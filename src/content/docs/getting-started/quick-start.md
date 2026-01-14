# Quick Start

Get up and running in under 5 minutes with this quick start guide.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ or later
- npm or yarn package manager
- A code editor (VS Code recommended)

## Installation

Install the package using your preferred package manager:

\`\`\`bash
npm install @example/api-client
\`\`\`

Or with yarn:

\`\`\`bash
yarn add @example/api-client
\`\`\`

## Basic Usage

Create your first API call in just a few lines:

\`\`\`javascript
import { createClient } from '@example/api-client';

// Initialize the client
const client = createClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.example.com'
});

// Make your first request
const users = await client.users.list();
console.log(users);
\`\`\`

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`apiKey\` | string | — | Your API key (required) |
| \`baseUrl\` | string | \`https://api.example.com\` | API base URL |
| \`timeout\` | number | \`30000\` | Request timeout in ms |
| \`retries\` | number | \`3\` | Number of retry attempts |

## Next Steps

Now that you have the basics down, explore:

- [Core Concepts](/docs/rest-api-basics) — Understand how the API works
- [Authentication](/docs/authentication) — Secure your requests
- [Tutorials](/docs/building-your-first-api) — Build real applications
