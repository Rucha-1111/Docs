/**
 * Documentation Content
 * ====================
 * This file dynamically loads documentation markdown content from the file system.
 * Content is automatically discovered from src/content/docs/
 */

// Load all docs markdown files
const docsModules = import.meta.glob('/src/content/docs/**/*.md', {
  eager: true,
  as: 'raw'
}) as Record<string, string>;

// Generate docs content from file structure
function generateDocsContent(): Record<string, string> {
  const content: Record<string, string> = {};

  Object.keys(docsModules).forEach(path => {
    // Extract slug from path
    // Path format: /src/content/docs/category/slug.md
    const pathParts = path.split('/');
    const fileName = pathParts[5]; // slug.md
    const slug = fileName.replace('.md', '');

    content[slug] = docsModules[path];
  });

  return content;
}

export const docsContent = generateDocsContent();
