# Updating Documentation and Blogs

This file explains exactly how to add, organize, and control **documentation pages** and **blog posts** in this project.

---

## Documentation (Docs)

### Docs Location

All documentation lives here:

docs/src/content/docs/

---

### Adding a New Documentation Page

1. Go to the category folder where the page should appear:

   docs/src/content/docs/category-name/

2. Create a new markdown file:

   Page Name.md

3. Add frontmatter at the top of the file:

   ---

   title: Page Name
   order: 1

   ---

4. Write the content below the frontmatter.

Result:

- The page automatically appears in the sidebar
- The page is placed under its folder’s category
- Ordering is controlled by the `order` value

---

### Adding a New Documentation Category

1. Create a new folder inside:

   docs/src/content/docs/

   Example:
   advanced-topics/

2. Add markdown files inside this folder.

3. (Optional) Assign an icon to the category in:

   docs/src/lib/content-config.ts

   Add or edit:

   'advanced-topics': 'Zap',

Result:

- Folder name becomes the sidebar category
- Files inside become pages under that category

---

### Setting Documentation Page Order

Order is controlled per page.

Inside the markdown file:

---

order: 2

---

Lower numbers appear higher in the sidebar.

---

### Renaming Docs Pages or Categories

- Rename the **file** to change the page URL
- Change `title` in frontmatter to change sidebar text
- Rename the **folder** to change the category name

No config updates required.

---

### Documentation Icons

Icons are applied **per category**, not per page.

Icons are defined in:

docs/src/lib/content-config.ts

Example:

const defaultIcons = {
  'getting-started': 'Rocket',
  'concepts': 'BookOpen',
  'tutorials': 'Code',
  'reference': 'FileText',
};

To add a new category icon:

'your-category-name': 'IconName',

---

## Blogs

### Blog Location

All blog posts live here:

docs/src/content/blogs/

---

### Adding a New Blog Post

1. Create a markdown file:

   post-name.md

2. Add required frontmatter:

   ---

   title: Blog Title
   date: 2024-01-15
   tags: ["tag1", "tag2"]

   ---

3. Write blog content below the frontmatter.

Result:

- Blog is automatically discovered
- Appears in the blog list
- Sorted by date (newest first)

---

### Blog Frontmatter Rules

Required:

- `title`
- `date`

Optional:

- `tags` (array)
- `description` (if omitted, first paragraph is used)

Example:

---

title: How Authentication Works
date: 2024-02-10
tags: ["auth", "security"]
description: A breakdown of authentication concepts

---

---

### Blog Ordering

- Blogs are ordered by `date`
- Newer dates appear first
- `order` is ignored for blogs

---

### Renaming or Updating Blog Posts

- Rename the file to change the URL
- Update `title` to change display name
- Update `date` to change position in the list

No config changes required.

---

## What NOT to Edit

- Do not manually register docs pages
- Do not manually register blog posts
- Do not add sidebar entries by hand
- Do not assign icons inside markdown files

---

## Summary Rules

- Folders control documentation categories
- Markdown files control documentation pages
- Frontmatter controls title and order
- Icons are set in content-config.ts
- Blogs live only in `blogs/`
- Blog ordering is date-based
- All content is auto-discovered
