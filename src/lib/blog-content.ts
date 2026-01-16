/**
 * Blog Content
 * ============
 * This file dynamically loads blog post markdown content from the file system.
 * Content is automatically discovered from src/content/blogs/
 */

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

// Generate blog content from file structure
function generateBlogContent(): Record<string, string> {
  const content: Record<string, string> = {};

  Object.keys(blogModules).forEach(path => {
    // Extract slug from path
    // Path format: /src/content/blogs/slug.md
    const fileName = path.split('/').pop()!;
    const slug = fileName.replace('.md', '');

    // Parse frontmatter and get only the body content
    const { body } = parseFrontmatter(blogModules[path]);
    content[slug] = body;
  });

  return content;
}

export const blogContent = generateBlogContent();
