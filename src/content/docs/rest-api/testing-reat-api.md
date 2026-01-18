# Testing REST APIs

## Manual Testing with Tools

Manual testing helps validate API behavior during development or for ad-hoc checks. Tools allow sending requests, inspecting responses, and testing endpoints interactively.

**Popular Tools**

* **Postman:** Create requests, run collections, visualize responses
* **cURL:** Command-line tool for quick testing

**Example: GET Request using Postman**

* Set method to `GET`
* Enter endpoint: `https://api.example.com/users`
* Add headers: `Authorization: Bearer <token>`
* Inspect status code, headers, and JSON response

**Example: GET Request using cURL**

```bash
curl -X GET "https://api.example.com/users" \
     -H "Authorization: Bearer <token>" \
     -H "Accept: application/json"
```

**Best Practices**

* Test both success and error scenarios manually
* Validate HTTP status codes, response structure, and headers
* Use environments or variables in tools like Postman for repeated tests

---

## Automated API Testing

Automated testing validates API behavior consistently and supports regression testing.

**Common Frameworks**

* **JavaScript:** Jest, Mocha, Supertest
* **Python:** Pytest, Requests, Locust for performance
* **Java:** RestAssured, JUnit

**Example: Automated Test using Jest + Supertest (Node.js)**

```javascript
const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users').set('Authorization', 'Bearer <token>');
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });
});
```

**Best Practices**

* Automate all critical endpoints
* Include success, failure, and edge-case scenarios
* Integrate tests into CI/CD pipelines for continuous validation

---

## Unit vs Integration Tests

Testing should be layered to ensure both **individual components** and **their interactions** work correctly.

**Unit Tests**

* Test single functions or endpoints in isolation
* Mock external dependencies (databases, other services)

```javascript
const getUser = require('../services/userService');

test('getUser returns correct user', () => {
  const user = getUser(1);
  expect(user.id).toBe(1);
});
```

**Integration Tests**

* Test API endpoints with real dependencies
* Validate database interactions, external services, and authentication

```javascript
const request = require('supertest');
const app = require('../app');

describe('POST /users', () => {
  it('should create a new user and save to database', async () => {
    const res = await request(app).post('/users').send({ name: 'John', email: 'john@example.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.name).toBe('John');
  });
});
```

**Best Practices**

* Maintain clear separation between unit and integration tests
* Mock external services for unit tests to reduce flakiness
* Use integration tests for critical workflows

---

## Mock APIs

Mock APIs simulate responses from endpoints that may not be available yet. Useful for frontend-backend parallel development and testing edge cases.

**Popular Tools**

* **Postman Mock Servers**
* **WireMock** (Java)
* **JSON Server** (Node.js)

**Example: Mock API Response (JSON Server)**

```json
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]
}
```

**Best Practices**

* Mock realistic responses including errors and delays
* Keep mock schemas in sync with real API contracts
* Use mocks in automated tests to isolate dependencies

---

## Testing Edge Cases

Edge cases ensure the API handles **unexpected or extreme scenarios** correctly.

**Examples**

* Sending invalid data types: `/users` POST with `"age": "abc"`
* Missing required fields: `/users` POST without `"email"`
* Unauthorized access: missing or invalid `Authorization` header
* Rate limits exceeded: simulate multiple requests in quick succession
* Large payloads: test upload limits and response handling

**Example: Edge Case Test using Jest**

```javascript
test('POST /users with missing email should return 400', async () => {
  const res = await request(app).post('/users').send({ name: 'John' });
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toMatch(/email is required/);
});
```

**Best Practices**

* Include both positive and negative scenarios in automated tests
* Validate proper HTTP status codes and error messages
* Test boundary conditions such as empty arrays, null values, and maximum field lengths
