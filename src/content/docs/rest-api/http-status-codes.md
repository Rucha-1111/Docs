# HTTP Status Codes

HTTP status codes are standardized three-digit numbers that servers return to indicate the result of a client’s request. They provide crucial information about whether a request was successful, if the client made an error, or if the server encountered a problem. Understanding and using these codes correctly is fundamental to building and consuming RESTful APIs.

---

## Success Codes (200, 201, 204)

Success status codes indicate that a client’s request was processed successfully. Each code conveys a slightly different meaning:

* **200 OK**

  * Indicates the request was successful.
  * Typically used with `GET` requests when data is returned in the response body.
  * Example:

    ```json
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "id": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```
* **201 Created**

  * Indicates that a new resource was successfully created.
  * Commonly used with `POST` requests.
  * The response usually includes the location of the newly created resource via the `Location` header.
  * Example:

    ```json
    HTTP/1.1 201 Created
    Location: /users/12345
    Content-Type: application/json

    {
      "id": "12345",
      "name": "John Doe"
    }
    ```
* **204 No Content**

  * Indicates the request was successful but there is no content to return.
  * Commonly used with `DELETE` requests or successful `PUT`/`PATCH` requests where returning the updated resource is unnecessary.
  * Example:

    ```
    HTTP/1.1 204 No Content
    ```

---

## Client Errors (400, 401, 403, 404, 409)

Client error codes indicate that the request was invalid, incomplete, or unauthorized. These errors are caused by the client and generally require corrective action:

* **400 Bad Request**

  * The server cannot process the request due to invalid syntax, missing parameters, or invalid input data.
  * Example:

    ```json
    {
      "status": 400,
      "error": "INVALID_REQUEST",
      "message": "The 'email' field is required."
    }
    ```
* **401 Unauthorized**

  * The client is not authenticated or provided invalid credentials.
  * Typically requires sending proper authentication headers (e.g., API key, token).
  * Example:

    ```json
    {
      "status": 401,
      "error": "UNAUTHORIZED",
      "message": "Access token is missing or invalid."
    }
    ```
* **403 Forbidden**

  * The client is authenticated but does not have permission to access the requested resource.
  * Example:

    ```json
    {
      "status": 403,
      "error": "FORBIDDEN",
      "message": "You do not have permission to delete this resource."
    }
    ```
* **404 Not Found**

  * The requested resource does not exist on the server.
  * Example:

    ```json
    {
      "status": 404,
      "error": "NOT_FOUND",
      "message": "User with ID 12345 not found."
    }
    ```
* **409 Conflict**

  * Indicates a request conflict with the current state of the resource, such as attempting to create a resource that already exists.
  * Example:

    ```json
    {
      "status": 409,
      "error": "CONFLICT",
      "message": "User with this email already exists."
    }
    ```

---

## Server Errors (500, 502, 503)

Server error codes indicate that the client’s request was valid, but the server failed to process it. These errors usually require server-side investigation:

* **500 Internal Server Error**

  * A generic error indicating that the server encountered an unexpected condition.
  * Example:

    ```json
    {
      "status": 500,
      "error": "INTERNAL_SERVER_ERROR",
      "message": "An unexpected error occurred. Please try again later."
    }
    ```
* **502 Bad Gateway**

  * The server, acting as a gateway or proxy, received an invalid response from an upstream server.
  * Example:

    ```json
    {
      "status": 502,
      "error": "BAD_GATEWAY",
      "message": "Failed to retrieve data from the upstream service."
    }
    ```
* **503 Service Unavailable**

  * The server is temporarily unable to handle the request due to maintenance or overload.
  * Should include information about retry timing if possible.
  * Example:

    ```json
    {
      "status": 503,
      "error": "SERVICE_UNAVAILABLE",
      "message": "The server is temporarily unavailable. Please try again later."
    }
    ```

---

## When to Use Which Status Code

* Use **2xx codes** when the request is successfully processed.

  * `200` for successful data retrieval
  * `201` when a resource is created
  * `204` when no content needs to be returned
* Use **4xx codes** for client errors such as invalid input, authentication failures, or access restrictions.
* Use **5xx codes** for server-side errors or upstream service failures.
* Ensure consistency across endpoints to avoid confusion for API clients.

---

## Common Mistakes with Status Codes

* Returning **200 OK** for failed requests instead of an appropriate 4xx or 5xx code.
* Using **401 Unauthorized** for permission issues instead of **403 Forbidden**.
* Using **404 Not Found** for cases that should return a validation error (400).
* Overloading **500 Internal Server Error** without specifying the cause or differentiating server vs client issues.
* Inconsistent status codes across similar endpoints, making client error handling unpredictable.

Proper usage of HTTP status codes ensures clear communication between the API and its clients, improves developer experience, and facilitates automated error handling.
