# HTTP Basics for REST

Understanding HTTP is fundamental for designing and consuming RESTful APIs. HTTP defines the protocol for communication between clients and servers, specifying methods, headers, status codes, and message formats.

---

## HTTP Methods (GET, POST, PUT, PATCH, DELETE)

REST APIs use standard HTTP methods to define operations on resources:

* **GET**: Retrieve a resource or collection of resources. Safe and idempotent.
* **POST**: Create a new resource. Not idempotent; multiple identical requests may create multiple resources.
* **PUT**: Update or replace an existing resource entirely. Idempotent; repeated requests have the same effect.
* **PATCH**: Partially update a resource. Typically idempotent but modifies only specific fields.
* **DELETE**: Remove a resource. Idempotent; deleting an already deleted resource returns the same result.

---

## Safe vs Idempotent Methods

* **Safe methods**: Do not modify resources. Examples: `GET`, `HEAD`. Safe methods can be called without risk of changing server state.
* **Idempotent methods**: Repeated execution produces the same result as a single execution. Examples: `GET`, `PUT`, `DELETE`.
* **Non-idempotent methods**: May have side effects if called multiple times. Example: `POST`.

---

## HTTP Request Structure

A standard HTTP request consists of:

1. **Request Line**: Specifies the method, URI, and HTTP version.

   ```
   GET /users/123 HTTP/1.1
   ```
2. **Headers**: Key-value pairs conveying metadata (e.g., authentication, content type).
3. **Body** (optional): Contains data for methods like POST, PUT, or PATCH.

Example:

```
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

---

## HTTP Response Structure

A standard HTTP response consists of:

1. **Status Line**: HTTP version, status code, and reason phrase.

   ```
   HTTP/1.1 200 OK
   ```
2. **Headers**: Metadata about the response (e.g., content type, caching).
3. **Body** (optional): Contains the response data in a format like JSON or XML.

Example:

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "12345",
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

---

## Headers vs Body

* **Headers**: Metadata about the request or response. Examples include `Content-Type`, `Authorization`, `Cache-Control`.
* **Body**: The main content or payload of the message. Contains the data being sent or received.

Headers guide how clients and servers process the body but do not contain the primary data itself.

---

## Content-Type and Accept Headers

* **Content-Type**: Specifies the format of the data being sent in the request body. Example: `application/json`, `application/xml`.
* **Accept**: Indicates the format that the client expects in the response. Example: `Accept: application/json`.

Correct use of these headers ensures proper serialization, deserialization, and interpretation of API data across different clients and servers.
