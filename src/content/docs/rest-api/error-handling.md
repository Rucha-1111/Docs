# Error Handling

Effective error handling in APIs is essential for reliability, usability, and security. Well-defined error responses allow clients to understand failures, take corrective action, and integrate smoothly with the API.

---

## Standard Error Response Structure

A standardized error response provides consistency across an API, making it easier for clients to parse and handle errors. Typical components of a structured error response include:

* **HTTP status code**: Indicates the general type of error (e.g., 400 for bad request, 401 for unauthorized)
* **Error code**: A machine-readable identifier for the specific error
* **Error message**: Human-readable description of the error
* **Details** (optional): Additional information such as invalid fields or hints for resolution

Example:

```json
{
  "status": 400,
  "error": "INVALID_INPUT",
  "message": "The 'email' field is required.",
  "details": {
    "field": "email",
    "issue": "missing"
  }
}
```

---

## Error Codes vs Error Messages

* **Error Codes**: Standardized identifiers for programmatic handling. They allow clients to react to specific errors without parsing messages. Examples: `USER_NOT_FOUND`, `INVALID_TOKEN`.
* **Error Messages**: Human-readable descriptions that provide context about the error. They are useful for debugging and displaying information to developers or users.

Both should be consistent, descriptive, and separated in the response.

---

## Validation Errors

Validation errors occur when the client provides input that does not meet the API’s requirements. Common examples include missing fields, invalid data types, or out-of-range values.

* HTTP Status Code: `400 Bad Request`
* Include specific information about which fields failed validation
* Helps clients quickly correct requests

Example:

```json
{
  "status": 400,
  "error": "VALIDATION_FAILED",
  "message": "Input validation failed for one or more fields.",
  "details": [
    {
      "field": "password",
      "issue": "must be at least 8 characters"
    },
    {
      "field": "email",
      "issue": "invalid format"
    }
  ]
}
```

---

## Authentication Errors

Authentication errors occur when the client fails to provide valid credentials or tokens. These errors indicate that the request cannot proceed due to security restrictions.

* HTTP Status Codes: `401 Unauthorized` for missing/invalid credentials, `403 Forbidden` for insufficient permissions
* Responses should avoid exposing sensitive details that could aid attackers

Example:

```json
{
  "status": 401,
  "error": "INVALID_TOKEN",
  "message": "Access token is missing or invalid."
}
```

---

## Rate-Limit Errors

Rate-limit errors occur when a client exceeds the allowed number of API requests within a given time period. These errors help protect API infrastructure from abuse and ensure fair usage.

* HTTP Status Code: `429 Too Many Requests`
* Include information about limits and retry timing

Example:

```json
{
  "status": 429,
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "You have exceeded the maximum number of requests per minute.",
  "retry_after": 60
}
```

---

## Debug vs User-Safe Errors

* **Debug Errors**: Include detailed information about failures, stack traces, and internal issues. Useful for development and troubleshooting but should **never be exposed in production**.
* **User-Safe Errors**: Simplified messages intended for end-users or clients that **do not reveal internal implementation details**, reducing the risk of information leakage.

Best practice is to log detailed errors internally while returning concise, safe messages to clients.

---

Proper error handling ensures APIs are robust, developer-friendly, and secure, enabling clients to respond to issues effectively while maintaining operational integrity.
