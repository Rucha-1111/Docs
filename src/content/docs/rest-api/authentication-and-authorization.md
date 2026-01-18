# Authentication & Authorization

Authentication and authorization are critical components of API security, ensuring that only legitimate users and applications can access resources and perform permitted actions.

---

## Authentication vs Authorization

* **Authentication**: The process of verifying the identity of a client or user. It answers the question: *“Who are you?”*
* **Authorization**: The process of determining whether an authenticated client has the right to access a specific resource or perform an action. It answers the question: *“Are you allowed to do this?”*

Both processes work together to secure APIs, but they serve distinct purposes.

---

## API Keys

API keys are unique identifiers issued to clients to access an API. They are included in requests as a query parameter or header.

* Simple to implement
* Suitable for identifying applications rather than users
* Limited security, as keys can be exposed if not handled properly

Example:

```
GET /users
Headers:
  x-api-key: YOUR_API_KEY
```

---

## Bearer Tokens

Bearer tokens are a form of access token that must be included in the HTTP Authorization header for API requests.

* Tokens are issued after authentication
* Do not require storing credentials in each request
* Provide better security than API keys

Example:

```
GET /users
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## JWT Basics

**JSON Web Tokens (JWT)** are compact, URL-safe tokens used for authentication and authorization.

* Contain claims (user info, permissions) in a signed payload
* Can be verified without server-side storage
* Commonly used in stateless authentication

JWT structure:

1. **Header**: Specifies the token type and signing algorithm
2. **Payload**: Contains user claims and metadata
3. **Signature**: Ensures integrity and authenticity

Example payload:

```json
{
  "sub": "12345",
  "name": "John Doe",
  "role": "admin",
  "iat": 1674000000,
  "exp": 1674003600
}
```

---

## Token Expiration & Refresh

* **Expiration**: Access tokens are valid for a limited time to reduce risk if compromised.
* **Refresh tokens**: Longer-lived tokens used to obtain new access tokens without re-authenticating.

Typical flow:

1. Client authenticates and receives access + refresh tokens
2. Access token is used for API requests
3. On expiration, refresh token is sent to obtain a new access token

---

## Role-Based Access

Role-Based Access Control (RBAC) assigns permissions based on user roles.

* Roles define groups of actions a user can perform
* Reduces complexity in managing individual permissions
* Common roles: `admin`, `editor`, `viewer`

Example:

```json
{
  "role": "editor",
  "permissions": ["read_articles", "edit_articles"]
}
```

---

## Permission Scopes

Scopes provide fine-grained control over what actions a token or user can perform.

* Used in OAuth 2.0 and JWTs
* Each token can carry multiple scopes specifying allowed operations
* Scopes help enforce **least privilege** access

Example:

```
Authorization: Bearer TOKEN
Scopes: read:users write:orders delete:products
```
