# Installation Guide

This guide covers all installation methods and platform-specific instructions.

## System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | 18.x | 20.x LTS |
| Memory | 512MB | 2GB+ |
| Disk Space | 100MB | 500MB |

## Package Managers

### npm

\`\`\`bash
npm install @example/api-client
\`\`\`

### yarn

\`\`\`bash
yarn add @example/api-client
\`\`\`

### pnpm

\`\`\`bash
pnpm add @example/api-client
\`\`\`

## TypeScript Support

TypeScript types are included out of the box. No additional packages required.

\`\`\`typescript
import { createClient, User, ApiError } from '@example/api-client';

const client = createClient({ apiKey: 'your-key' });

// Full type safety
const user: User = await client.users.get('user-123');
\`\`\`

## Verifying Installation

Run this test to verify everything is working:

\`\`\`javascript
import { version } from '@example/api-client';

console.log('API Client version:', version);
// Output: API Client version: 2.0.0
\`\`\`

## Troubleshooting

### Common Issues

**Error: Module not found**

Make sure you're using a supported Node.js version:

\`\`\`bash
node --version
# Should output v18.x.x or higher
\`\`\`

**Error: Network timeout**

Check your firewall settings and ensure you can reach the API endpoint:

\`\`\`bash
curl https://api.example.com/health
\`\`\`
