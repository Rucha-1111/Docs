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
  items?: DocItem[];
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
  const categoryPaths: Record<string, string[]> = {};

  // Default icons for categories
  const defaultIcons: Record<string, string> = {
    'introduction': 'Home',
    'rest-api': 'BookOpen',
    'tutorials': 'Code',
    'reference': 'FileText',
  };

  Object.keys(docsModules).forEach(path => {
    // Extract category from path
    // Path format: /src/content/docs/category/...
    const pathParts = path.split('/');
    const categorySlug = pathParts[4]; // category

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

    // Group paths by category
    if (!categoryPaths[categorySlug]) {
      categoryPaths[categorySlug] = [];
    }
    categoryPaths[categorySlug].push(path);
  });

  // Build tree for each category
  Object.keys(categories).forEach(categorySlug => {
    categories[categorySlug].items = buildTree(categoryPaths[categorySlug], categorySlug);
  });

  // Order for categories - rearrange the folder names below to change the sidebar order
  const categoryOrder = ['introduction', 'rest-api', 'leetcode', 'hackerrank-java', 'hackerrank-algorithms', 'hackerrank-datastructures', 'hackerrank-sql', 'tutorials'];
  const categoriesArray = Object.values(categories);
  categoriesArray.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.slug);
    const bIndex = categoryOrder.indexOf(b.slug);
    if (aIndex === -1 && bIndex === -1) return a.slug.localeCompare(b.slug); // alphabetical for others
    if (aIndex === -1) return 1; // a not in order, b is, b first
    if (bIndex === -1) return -1; // b not in order, a is, a first
    return aIndex - bIndex;
  });

  return { categories: categoriesArray };
}

// Build tree from paths
function buildTree(paths: string[], categorySlug: string): DocItem[] {
  const tree: DocItem[] = [];

  paths.forEach(path => {
    const relativePath = path.replace(`/src/content/docs/${categorySlug}/`, '').replace('.md', '');
    const parts = relativePath.split('/');
    const content = docsModules[path];
    const title = extractTitle(content);

    if (title !== 'Untitled') {
      insertItem(tree, parts, relativePath, title);
    }
  });

  sortItems(tree);
  return tree;
}

// Insert item into tree
function insertItem(tree: DocItem[], parts: string[], fullSlug: string, title: string) {
  const currentSlug = parts[0];
  let item = tree.find(i => i.slug === currentSlug);

  if (!item) {
    item = {
      slug: currentSlug,
      title: parts.length > 1 ? currentSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : title,
      items: parts.length > 1 ? [] : undefined,
    };
    tree.push(item);
  }

  if (parts.length > 1) {
    insertItem(item.items!, parts.slice(1), fullSlug, title);
  } else {
    // For files, set the full slug and title
    item.slug = fullSlug;
    item.title = title;
    item.items = undefined; // Ensure no items for files
  }
}

// Sort items recursively
function sortItems(items: DocItem[]) {
  items.sort((a, b) => a.slug.localeCompare(b.slug));
  items.forEach(item => {
    if (item.items) {
      sortItems(item.items);
    }
  });
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
const DEFAULT_DOC_SLUGS = ['welcome', 'rest-api-fundamentals', 'rest-api-basics', 'introduction', 'getting-started'];

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
