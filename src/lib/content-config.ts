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

// Extract title from first # heading or numbered title
function extractTitle(content: string): string {
  const lines = content.split('\n');
  for (const line of lines) {
    // Check for markdown heading (# Title)
    if (line.startsWith('# ')) {
      return line.substring(2).trim();
    }
    // Check for numbered title (1. Title, 2. Title, etc.)
    const numberedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (numberedMatch) {
      return numberedMatch[1].trim();
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
    'rest-api': 'BookOpen',
    'tutorials': 'Code',
    'reference': 'FileText',
  };

  // Define custom order for rest-api category
  const restApiOrder = [
    'rest-api-fundamentals',
    'http-basics',
    'request-response-format',
    'resource-design',
    'http-status-codes',
    'authentication-and-authorization',
    'validation',
    'error-handling',
    'pagination',
    'rate-limiting',
    'security',
    'versioning',
    'optimization',
    'testing-rest-api',
    'real-patterns',
    'api-doc-strategy'
  ];

  // Define custom order for leetcode category
  const leetcodeOrder = [
    'merge-string-alternatively',
    'gcd-strings',
    'kids-with-candies',
    'can-place-flowers',
    'reverse-vowels-of-strings',
    'reverse-words-in-string',
    'product-of-array-except-self',
    'increasing-triplet-subsequence',
    'string-compression'
  ];

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

    // Add doc item only if it has a proper title
    if (title !== 'Untitled') {
      categories[categorySlug].items.push({
        slug,
        title,
      });
    }
  });

  // Sort items in each category
  Object.values(categories).forEach(category => {
    if (category.slug === 'rest-api') {
      // Sort rest-api items according to custom order
      category.items.sort((a, b) => {
        const indexA = restApiOrder.indexOf(a.slug);
        const indexB = restApiOrder.indexOf(b.slug);

        // If both items are in the custom order, sort by their position
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }

        // If only one item is in the custom order, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        // If neither is in the custom order, sort alphabetically
        return a.slug.localeCompare(b.slug);
      });
    } else if (category.slug === 'leetcode') {
      // Sort leetcode items according to custom order
      category.items.sort((a, b) => {
        const indexA = leetcodeOrder.indexOf(a.slug);
        const indexB = leetcodeOrder.indexOf(b.slug);

        // If both items are in the custom order, sort by their position
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }

        // If only one item is in the custom order, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        // If neither is in the custom order, sort alphabetically
        return a.slug.localeCompare(b.slug);
      });
    } else {
      // For other categories, sort alphabetically
      category.items.sort((a, b) => a.slug.localeCompare(b.slug));
    }
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

    const title = (frontmatter.title as string) || extractTitle(body);

    // Extract description from first paragraph that is not a heading
    let description = '';
    const paragraphs = body.split('\n\n').filter(p => p.trim());
    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed.startsWith('#')) {
        description = trimmed.replace(/^[#\s]*/, '').trim();
        break;
      }
    }

    posts.push({
      slug,
      title,
      description,
      date: (frontmatter.date as string) || new Date().toISOString().split('T')[0],
      tags: (frontmatter.tags as string[]) || [],
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

// Default document slugs to check in order of preference
const DEFAULT_DOC_SLUGS = ['rest-api-fundamentals', 'rest-api-basics', 'introduction', 'getting-started'];

export function getFirstDocSlug(): string | undefined {
  // First, check if any of the preferred default documents exist
  for (const preferredSlug of DEFAULT_DOC_SLUGS) {
    if (getDocBySlug(preferredSlug)) {
      return preferredSlug;
    }
  }

  // Fallback to the first document in the first category
  if (docsConfig.categories.length > 0 && docsConfig.categories[0].items.length > 0) {
    return docsConfig.categories[0].items[0].slug;
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
