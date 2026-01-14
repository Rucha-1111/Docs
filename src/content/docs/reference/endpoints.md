# API Endpoints Reference

Complete reference for all available API endpoints.

## Base URL

\`\`\`
https://api.example.com/v1
\`\`\`

## Users

### List Users

\`\`\`http
GET /users
\`\`\`

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| \`page\` | integer | Page number (default: 1) |
| \`limit\` | integer | Items per page (default: 20, max: 100) |
| \`sort\` | string | Sort field (e.g., \`created_at\`) |
| \`order\` | string | Sort order: \`asc\` or \`desc\` |

**Response:**

\`\`\`json
{
  "data": [
    {
      "id": "usr_123",
      "email": "john@example.com",
      "name": "John Doe",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
\`\`\`

### Get User

\`\`\`http
GET /users/:id
\`\`\`

### Create User

\`\`\`http
POST /users
\`\`\`

**Request Body:**

\`\`\`json
{
  "email": "john@example.com",
  "name": "John Doe",
  "password": "securepassword123"
}
\`\`\`

### Update User

\`\`\`http
PATCH /users/:id
\`\`\`

### Delete User

\`\`\`http
DELETE /users/:id
\`\`\`

## Tasks

### List Tasks

\`\`\`http
GET /tasks
\`\`\`

### Create Task

\`\`\`http
POST /tasks
\`\`\`

**Request Body:**

\`\`\`json
{
  "title": "Complete documentation",
  "description": "Write API reference docs",
  "due_date": "2024-02-01"
}
\`\`\`
