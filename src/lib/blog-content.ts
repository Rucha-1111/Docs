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

// Generate blog content from file structure
function generateBlogContent(): Record<string, string> {
  const content: Record<string, string> = {};

  Object.keys(blogModules).forEach(path => {
    // Extract slug from path
    // Path format: /src/content/blogs/slug.md
    const fileName = path.split('/').pop()!;
    const slug = fileName.replace('.md', '');

    content[slug] = blogModules[path];
  });

  return content;
}

export const blogContent = generateBlogContent();
