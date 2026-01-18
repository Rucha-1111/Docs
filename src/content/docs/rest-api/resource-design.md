# Resource Design in APIs

## Identifying Resources

Resources represent entities or concepts exposed by the API. Correct identification is crucial for clarity, consistency, and ease of use.

**Guidelines for Identifying Resources**

* A resource should represent a **noun**, not an action
* Focus on entities that the client needs to interact with, e.g., `users`, `orders`, `products`
* Avoid exposing internal implementation details as resources

**Example: Good Resource Identification**

| Resource      | Description                |
| ------------- | -------------------------- |
| `/users`      | Collection of all users    |
| `/users/{id}` | Specific user              |
| `/orders`     | Collection of all orders   |
| `/products`   | Collection of all products |

**Common Mistakes**

* Using actions as resource names, e.g., `/getUsers`
* Creating separate resources for related entities unnecessarily
* Including implementation details, e.g., `/db/users`

---

## Singular vs Plural Naming

Consistency in naming is critical for maintainable APIs.

* **Plural Naming** is recommended for collections: `/users`, `/orders`
* **Singular Naming** can be used for singletons or global resources: `/profile`, `/settings`

**Examples**

| Type            | Endpoint Example | Notes                                   |
| --------------- | ---------------- | --------------------------------------- |
| Collection      | `/users`         | Returns all users                       |
| Single Resource | `/users/{id}`    | Returns a single user                   |
| Singleton       | `/profile`       | Only one profile per authenticated user |

**Best Practices**

* Stick to plural for collections to maintain consistency
* Avoid mixing singular and plural arbitrarily
* Document singleton resources clearly

---

## Nested Resources

Nested resources represent **relationships between entities**. Use nesting sparingly and only for entities that are directly related.

**Example: Orders of a Specific User**

```http
GET /users/123/orders
```

* This endpoint returns all orders for user `123`
* Use nested resources when the hierarchy is meaningful
* Avoid deep nesting beyond 2-3 levels to keep URLs manageable

**Alternative Approach**

* Instead of deep nesting `/users/123/orders/456/items/789`, consider query parameters:

```http
GET /orders?userId=123&orderId=456
```

**Best Practices**

* Keep nested paths shallow
* Ensure the nesting reflects logical ownership, not just data structure
* Consider flattening with query parameters if hierarchy is complex

---

## Collection vs Single Resource Endpoints

Collection endpoints deal with **multiple resources**, while single resource endpoints deal with **specific items**.

**Collection Endpoint Example**

```http
GET /users
POST /users
```

* `GET` returns all users (possibly paginated)
* `POST` creates a new user

**Single Resource Endpoint Example**

```http
GET /users/123
PUT /users/123
DELETE /users/123
```

* `GET` retrieves the user with ID `123`
* `PUT` updates the user
* `DELETE` removes the user

**Best Practices**

* Collections are plural, single resources use IDs
* Avoid using query parameters to simulate a single resource retrieval, e.g., `/users?id=123`

---

## Versioning Resources

Versioning ensures backward compatibility as APIs evolve.

**Common Approaches**

* **URL Versioning:** Include version in path

```http
GET /v1/users
GET /v2/users
```

* **Header Versioning:** Specify version in HTTP header

```http
GET /users
Accept: application/vnd.example.v2+json
```

**Best Practices**

* Use URL versioning for public APIs for simplicity
* Maintain old versions until clients have migrated
* Avoid breaking changes in minor releases

---

## Avoiding Verbs in URLs

URLs should represent **resources**, not actions. The HTTP method defines the action.

**Incorrect Example**

```
GET /getUsers
POST /createUser
DELETE /removeUser
```

**Correct Example**

```
GET /users
POST /users
DELETE /users/{id}
```

**Best Practices**

* Use nouns for resources, actions are implied by HTTP methods
* Avoid `/updateUser` or `/deleteOrder` endpoints
* Keep URLs semantic, readable, and resource-centric
