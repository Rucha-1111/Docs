# Real-World REST API Patterns

---

## CRUD APIs

CRUD APIs provide endpoints for **Create, Read, Update, and Delete** operations on resources. These operations map to HTTP methods:

| Operation | HTTP Method | Endpoint     | Description                                     |
| --------- | ----------- | ------------ | ----------------------------------------------- |
| Create    | POST        | `/users`     | Create a new resource.                          |
| Read      | GET         | `/users/123` | Retrieve a specific resource.                   |
| Update    | PUT/PATCH   | `/users/123` | Update an existing resource fully or partially. |
| Delete    | DELETE      | `/users/123` | Remove a resource.                              |

### Guidelines

* Use plural nouns for resource names.
* Return proper HTTP status codes: `201 Created`, `200 OK`, `204 No Content`.
* Use PATCH for partial updates and PUT for full updates.
* Include resource URIs in responses where applicable.

---

## Search APIs

Search APIs allow querying resources with flexible criteria, often including filtering, sorting, and pagination.

### Example

```http
GET /products/search?query=laptop&category=electronics&sort=price_desc&limit=20&page=2
```

### Features

* Filtering by multiple fields.
* Sorting by one or more fields.
* Pagination to limit response size.

### Guidelines

* Support logical operators in filters (`AND`, `OR`).
* Return metadata like `total_results`, `page`, `limit`.
* Avoid returning excessively large datasets; use cursor-based pagination if needed.

---

## Bulk Operations

Bulk operations perform multiple actions in a single request, reducing network overhead.

### Examples

**Bulk Create**

```http
POST /users/bulk
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Bob", "email": "bob@example.com"}
]
```

**Bulk Update**

```http
PATCH /orders/bulk
[
  {"id": 101, "status": "shipped"},
  {"id": 102, "status": "canceled"}
]
```

### Guidelines

* Use transactional operations if atomicity is required.
* Return a summary of successes and failures.
* Enforce payload limits to prevent server overload.

---

## Webhooks

Webhooks notify external systems of events asynchronously.

### Workflow

1. Client registers a callback URL.
2. API triggers an event.
3. API sends an HTTP POST request to the callback URL.

### Example Payload

```json
{
  "event": "order_shipped",
  "order_id": 12345,
  "status": "shipped",
  "timestamp": "2026-01-18T14:00:00Z"
}
```

### Guidelines

* Secure webhooks using signatures or API keys.
* Retry failed deliveries with exponential backoff.
* Provide delivery status and logs for debugging.

---

## Async Processing Patterns

Asynchronous processing handles long-running operations without blocking clients.

### Job Queue Pattern

* Client submits a job:

```http
POST /reports
```

* API responds with a job ID:

```json
{"job_id": "abc123", "status": "pending"}
```

* Client polls for status:

```http
GET /reports/abc123/status
```

### Webhook Notification Pattern

* API notifies the client via webhook when processing completes.

### Event-Driven Pattern

* Use message brokers (RabbitMQ, Kafka) for scalable background processing.

### Guidelines

* Include job states: `pending`, `in_progress`, `completed`, `failed`.
* Provide retry policies and error messages.
* Avoid long synchronous requests that can timeout or block resources.
