# Request & Response Format in APIs

## Understanding API Request & Response Format

An API request is a structured message that a client sends to a server to perform an operation, such as retrieving data, creating a resource, updating, or deleting it. A response is the structured message the server returns after processing the request. Clear formats ensure consistency, reduce errors, and make integration predictable.

**Key Elements of a Request**

* **HTTP Method:** GET, POST, PUT, DELETE, PATCH
* **Endpoint URL:** Identifies the resource (`/users`, `/orders`)
* **Headers:** Provide metadata, authentication, and content type
* **Body (optional):** Contains data for POST/PUT/PATCH requests

**Example Request: GET /users**

```http
GET /users HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
Accept: application/json
```

**Example Response: 200 OK**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}
```

**Best Practices for Requests & Responses**

* Maintain consistent field names and data types
* Always return a `status` or HTTP status code to indicate success/failure
* Include error messages and codes for debugging
* Avoid sending unnecessary fields in responses

---

## JSON Structure Conventions

Most APIs use **JSON** because it is lightweight, readable, and language-agnostic. Proper JSON structure is essential for predictable parsing by clients.

**Key Conventions:**

* **Objects for single resources**, **arrays for collections**
* **Flat hierarchy** preferred; avoid deeply nested objects unless necessary
* **Use consistent data types** (e.g., string for dates, boolean for true/false)
* **Include meta-information** like `status`, `timestamp`, and `requestId`

**Example**

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  },
  "timestamp": "2026-01-18T14:00:00Z",
  "requestId": "abc123xyz"
}
```

**Common Mistakes**

* Mixing arrays and objects inconsistently
* Using inconsistent data types for the same field across endpoints
* Overly deep nesting which complicates parsing

---

## Field Naming Styles

API field naming should follow a **consistent convention** to avoid confusion. Two primary styles are used:

| Style      | Example                    | Notes                                         |
| ---------- | -------------------------- | --------------------------------------------- |
| camelCase  | `firstName`, `userEmail`   | Popular in JavaScript, React, Node.js APIs    |
| snake_case | `first_name`, `user_email` | Popular in Python, Django, and some REST APIs |

**Best Practices**

* Pick one convention per API version and stick with it
* Ensure all nested objects and arrays follow the same style
* Document the naming convention clearly in API documentation

---

## Pagination Response Format

APIs returning large datasets should implement pagination to improve performance and reduce payload size.

### Limit & Offset Pagination

**Request**

```http
GET /users?limit=10&offset=20
```

**Response**

```json
{
  "status": "success",
  "data": [
    {"id": 21, "name": "User21"},
    {"id": 22, "name": "User22"}
  ],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 20
  }
}
```

* `limit` defines the maximum records returned
* `offset` defines the starting point in the dataset
* `total` indicates total records available

### Page & Per Page Pagination

**Request**

```http
GET /users?page=3&perPage=10
```

**Response**

```json
{
  "status": "success",
  "data": [...],
  "pagination": {
    "totalPages": 10,
    "currentPage": 3,
    "perPage": 10,
    "totalRecords": 100
  }
}
```

* Easier for UI-based pagination
* `currentPage` and `totalPages` simplify navigation

**Best Practices**

* Always include total record count or total pages for clients
* Validate query parameters to avoid invalid offsets/pages
* Consider using cursor-based pagination for very large datasets

---

## Sorting and Filtering Parameters

Sorting and filtering allow clients to retrieve **specific subsets of data** efficiently.

**Sorting Example**

```http
GET /users?sort=name_asc
```

* `sort` parameter specifies field and order (`_asc` for ascending, `_desc` for descending)

**Filtering Example**

```http
GET /users?role=admin&active=true
```

* Each filter corresponds to a field
* Combine multiple filters using logical AND by default
* Support exact matches, ranges, and partial matches where necessary

**Best Practices**

* Clearly document supported sorting and filtering parameters
* Avoid implementing business logic in filters; keep it data-centric
* Return errors if unsupported parameters are used

---

## Metadata in Responses

Metadata provides **context about the response** without being part of the main data.

**Common Fields**

* `status`: success or error
* `timestamp`: server response time in ISO 8601 format
* `requestId`: unique request identifier for debugging
* `pagination`: paging information for collections

**Example**

```json
{
  "status": "success",
  "timestamp": "2026-01-18T14:00:00Z",
  "data": [...],
  "requestId": "abc123xyz"
}
```

**Best Practices**

* Include metadata in all responses for consistency
* Use `requestId` for tracing logs in production systems
* Standardize metadata keys across API endpoints

---

## Empty Responses and Status-Only Responses

Some endpoints return **no data**, such as DELETE requests, but still need to indicate success or failure.

**DELETE /users/1 Example (204 No Content)**

```http
HTTP/1.1 204 No Content
```

**Status-Only Response Example**

```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

**Best Practices**

* Use correct HTTP status codes (200, 201, 204, 400, 404, 500)
* Include JSON messages for clients that rely on response bodies
* Avoid returning empty objects unless standardized

---

## Common Mistakes to Avoid

* Inconsistent field naming across endpoints
* Returning different structures for similar resources
* Ignoring proper HTTP status codes
* Overly nested or bloated response payloads
* Missing pagination for large datasets
* Using ambiguous or generic error messages
