# Security Best Practices for APIs

## HTTPS Enforcement

APIs must use HTTPS to ensure **encryption of data in transit**, protecting against eavesdropping and man-in-the-middle attacks.

**Implementation Guidelines**

* Enforce HTTPS on all endpoints; redirect HTTP requests to HTTPS automatically
* Use modern TLS versions (TLS 1.2 or 1.3)
* Avoid deprecated SSL/TLS protocols and weak ciphers
* Implement **HSTS (HTTP Strict Transport Security)** to force browsers to use HTTPS

**Example: Enforcing HTTPS in Express.js**

```javascript
app.use((req, res, next) => {
  if (req.protocol === 'http') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});
```

**Best Practices**

* Ensure all third-party APIs your system consumes are HTTPS
* Regularly update certificates and monitor for expiry
* Test endpoints with tools like SSL Labs to validate configuration

---

## Preventing Injection Attacks

Injection attacks, such as SQL injection or NoSQL injection, allow attackers to manipulate queries and access unauthorized data.

**Preventive Measures**

* Use **parameterized queries** or prepared statements instead of string concatenation
* Validate and sanitize all user inputs
* Limit database privileges for API accounts
* Apply **ORM/ODM security features** (e.g., Mongoose for MongoDB, Hibernate for SQL)

**Example: Parameterized SQL Query (Node.js + PostgreSQL)**

```javascript
const result = await client.query(
  'SELECT * FROM users WHERE email = $1',
  [userInputEmail]
);
```

**Example: Preventing NoSQL Injection (MongoDB)**

```javascript
const user = await User.findOne({ email: req.body.email });
```

* Avoid passing raw JSON from the client into queries

**Best Practices**

* Never trust user input
* Perform server-side validation, even if client-side validation exists
* Use security linters or scanners to detect injection vulnerabilities

---

## Avoiding Sensitive Data Leaks

APIs can unintentionally expose sensitive data like passwords, API keys, or personal user information.

**Guidelines**

* Never include secrets in responses (e.g., passwords, tokens)
* Mask or hash sensitive fields before returning data
* Store secrets securely using encryption at rest and proper access controls
* Avoid verbose error messages that reveal internal implementation

**Example: Masking Sensitive Fields in JSON Response**

```json
{
  "id": 123,
  "username": "john_doe",
  "email": "john@example.com",
  "password": "********"
}
```

**Best Practices**

* Use hashed passwords (bcrypt, Argon2) and never return them in responses
* Avoid logging sensitive information
* Implement strict access control based on roles and permissions

---

## CORS Configuration

Cross-Origin Resource Sharing (CORS) controls which domains can access your API. Misconfigured CORS can allow malicious sites to interact with your API.

**Proper CORS Configuration**

* Specify allowed origins explicitly instead of using `*`
* Limit allowed methods (`GET`, `POST`, etc.)
* Restrict allowed headers to necessary ones
* Enable credentials only if required and with proper security

**Example: Express.js CORS Configuration**

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

**Best Practices**

* Test your API with different origins to ensure restrictions are working
* Avoid using wildcard `*` for production
* Combine CORS with authentication and authorization checks

---

## Logging and Monitoring APIs

Effective logging and monitoring help detect **security incidents, performance issues, and abuse**.

**Key Practices**

* Log requests and responses without exposing sensitive data
* Include metadata like timestamps, user IDs, and request IDs
* Monitor logs for unusual patterns (spikes in requests, repeated failed logins)
* Implement alerting for anomalies and potential attacks

**Example: Logging with Masked Sensitive Data**

```javascript
console.log({
  requestId: req.id,
  userId: req.user?.id,
  endpoint: req.path,
  status: res.statusCode
});
```

**Best Practices**

* Use centralized logging (ELK Stack, Datadog, Splunk)
* Rotate logs to avoid disk exhaustion
* Ensure logs are tamper-proof and access-controlled

---

## API Abuse Prevention

APIs are vulnerable to abuse such as excessive requests, brute force attacks, and scraping.

**Preventive Measures**

* Implement **rate limiting** to restrict the number of requests per client/IP
* Use **API keys or OAuth tokens** for authentication and throttling
* Detect and block unusual patterns with **IP blacklisting or throttling rules**
* Implement **CAPTCHA** or challenge-response for sensitive operations

**Example: Rate Limiting in Express.js**

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: "Too many requests, please try again later."
});

app.use('/api/', limiter);
```

**Best Practices**

* Combine rate limiting with logging and alerting
* Adjust thresholds based on endpoint sensitivity
* Monitor abuse patterns and update security rules dynamically
