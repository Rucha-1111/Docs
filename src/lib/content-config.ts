/**
 * Content Configuration
 * =====================
 * This file dynamically loads documentation and blog content from the file system.
 * Content is automatically discovered from src/content/docs/ and src/content/blogs/
 */

export interface DocItem {
  slug: string;
  title: string;
  description?: string;
}

export interface DocCategory {
  slug: string;
  title: string;
  icon: string;
  items: DocItem[];
}



export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

// Load all docs markdown files
const docsModules = import.meta.glob('/src/content/docs/**/*.md', {
  eager: true,
  as: 'raw'
}) as Record<string, string>;

// Load all blog markdown files
const blogModules = import.meta.glob('/src/content/blogs/*.md', {
  eager: true,
  as: 'raw'
}) as Record<string, string>;



// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: Record<string, unknown>, body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  const frontmatter: Record<string, unknown> = {};
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      // Remove quotes if present
      const cleanValue = value.replace(/^["']|["']$/g, '');
      // Parse arrays for tags
      if (key.trim() === 'tags' && cleanValue.startsWith('[')) {
        // Replace single quotes with double quotes for JSON parsing
        const jsonString = cleanValue.replace(/'/g, '"');
        frontmatter[key.trim()] = JSON.parse(jsonString);
      } else {
        frontmatter[key.trim()] = cleanValue;
      }
    }
  });

  return { frontmatter, body };
}

// Extract title from first # heading
function extractTitle(content: string): string {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.substring(2).trim();
    }
  }
  return 'Untitled';
}

// Generate docs config from file structure
function generateDocsConfig(): { categories: DocCategory[] } {
  const categories: Record<string, DocCategory> = {};

  // Default icons for categories
  const defaultIcons: Record<string, string> = {
    'getting-started': 'Rocket',
    'concepts': 'BookOpen',
    'tutorials': 'Code',
    'reference': 'FileText',
  };

  Object.keys(docsModules).forEach(path => {
    // Extract category and slug from path
    // Path format: /src/content/docs/category/slug.md
    const pathParts = path.split('/');
    const categorySlug = pathParts[4]; // category
    const fileName = pathParts[5]; // slug.md
    const slug = fileName.replace('.md', '');

    const content = docsModules[path];
    const title = extractTitle(content);

    // Create category if it doesn't exist
    if (!categories[categorySlug]) {
      const titleCase = categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      categories[categorySlug] = {
        slug: categorySlug,
        title: titleCase,
        icon: defaultIcons[categorySlug] || 'FileText',
        items: [],
      };
    }

    // Add doc item
    categories[categorySlug].items.push({
      slug,
      title,
    });
  });

  return { categories: Object.values(categories) };
}

// Generate blog posts from files
function generateBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  Object.keys(blogModules).forEach(path => {
    const fileName = path.split('/').pop()!;
    const slug = fileName.replace('.md', '');
    const content = blogModules[path];

    const { frontmatter, body } = parseFrontmatter(content);

    // Extract description from first paragraph
    const description = body.split('\n\n')[0]?.replace(/^[#\s]*/, '') || '';

    // Estimate reading time (roughly 200 words per minute)
    const wordCount = body.split(/\s+/).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    posts.push({
      slug,
      title: (frontmatter.title as string) || extractTitle(body),
      description,
      date: (frontmatter.date as string) || new Date().toISOString().split('T')[0],
      tags: (frontmatter.tags as string[]) || [],
      readingTime,
    });
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Export generated configs
export const docsConfig = generateDocsConfig();
export const blogPosts = generateBlogPosts();

// Helper functions
export function getDocBySlug(slug: string): DocItem | undefined {
  for (const category of docsConfig.categories) {
    const doc = category.items.find(item => item.slug === slug);
    if (doc) return doc;
  }
  return undefined;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}
