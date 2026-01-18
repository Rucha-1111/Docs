# API Documentation Standards

Comprehensive API documentation is essential for developers to understand and effectively use an API. Well-structured documentation reduces integration errors, improves adoption, and accelerates development.

---

## What Good API Docs Include

Good API documentation clearly communicates the purpose, usage, and constraints of the API. Key elements include:

* Overview of the API and its functionality
* Authentication and authorization requirements
* Detailed descriptions of endpoints and resources
* Request and response formats with examples
* Error codes and handling guidelines
* Versioning and change history
* Rate limits, pagination, and filtering mechanisms

---

## Endpoint Descriptions

Each API endpoint should be documented with:

* **Endpoint URL**: The full URI or path
* **HTTP method**: GET, POST, PUT, PATCH, DELETE
* **Resource description**: Purpose and behavior of the endpoint
* **Parameters**: Path parameters, query parameters, and headers with data types and constraints
* **Authentication requirements**: Whether the endpoint requires API keys, tokens, or OAuth

Example:

```
GET /users/{userId}
Description: Retrieve details of a specific user
Parameters:
  - userId (path, string, required): Unique ID of the user
Authentication: Bearer token required
```

---

## Request Examples

Request examples illustrate how a client should interact with the API. They include:

* Complete URL with parameters
* HTTP method
* Required headers (e.g., Content-Type, Authorization)
* Request body (for POST, PUT, PATCH)

Example:

```
POST /users
Headers:
  Content-Type: application/json
  Authorization: Bearer <token>
Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin"
}
```

---

## Response Examples

Response examples show what the client can expect from the API. They should include:

* HTTP status code
* Response headers
* Response body (typically JSON or XML)

Example:

```
HTTP/1.1 201 Created
Content-Type: application/json
Body:
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
  "createdAt": "2026-01-18T14:00:00Z"
}
```

---

## Error Examples

Error examples provide guidance for handling failed requests. They should include:

* HTTP status code
* Error message
* Error code (optional)
* Possible causes and suggested actions

Example:

```
HTTP/1.1 404 Not Found
Content-Type: application/json
Body:
{
  "error": "User not found",
  "code": "USER_404"
}
```

---

## OpenAPI / Swagger Overview

**OpenAPI** (formerly Swagger) is a specification for describing RESTful APIs in a standardized format. It enables:

* Auto-generation of interactive documentation
* Code generation for client SDKs and server stubs
* Validation of requests and responses against the API contract

OpenAPI documents use YAML or JSON to define:

* Endpoints and HTTP methods
* Request and response structures
* Authentication schemes
* Parameters, headers, and status codes

Example snippet (YAML):

```yaml
paths:
  /users/{userId}:
    get:
      summary: Retrieve a user by ID
      parameters:
        - in: path
          name: userId
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
```
