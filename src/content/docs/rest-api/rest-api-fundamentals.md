# REST API FUndanananna

Understanding REST (Representational State Transfer) is fundamental to working with modern web APIs.

## What is REST?

REST is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol — almost always HTTP.

## Key Principles

### 1. Stateless

Each request from client to server must contain all information needed to understand and process the request.

```http
GET /api/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer your-token-here
```

### 2. Resource-Based

Everything is a resource, identified by a URI:

- \`/users\` — Collection of users
- \`/users/123\` — A specific user
- \`/users/123/posts\` — Posts by a specific user

### 3. HTTP Methods

| Method | Purpose | Idempotent |
|--------|---------|------------|
| \`GET\` | Retrieve resources | Yes |
| \`POST\` | Create resources | No |
| \`PUT\` | Update/replace resources | Yes |
| \`PATCH\` | Partial update | No |
| \`DELETE\` | Remove resources | Yes |

## Example Requests

### GET — Retrieve Data

\`\`\`javascript
const response = await fetch('/api/users');
const users = await response.json();
\`\`\`

### POST — Create Data

\`\`\`javascript
const response = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: '<john@example.com>'
  })
});
\`\`\`

### DELETE — Remove Data

\`\`\`javascript
await fetch('/api/users/123', {
  method: 'DELETE'
});
\`\`\`

## Best Practices

1. **Use nouns for endpoints** — \`/users\` not \`/getUsers\`
2. **Use plural names** — \`/users\` not \`/user\`
3. **Version your API** — \`/v1/users\`
4. **Return appropriate status codes**
5. **Support filtering and pagination**
