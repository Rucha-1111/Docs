# Rate Limiting & Throttling

---

## Why Rate Limiting Exists

Rate limiting is a technique used to control the number of requests a client can make to an API within a specified time frame. It helps:

* Prevent abuse and denial-of-service attacks.
* Ensure fair usage among clients.
* Protect backend resources and maintain performance.

---

## Rate Limit Headers

APIs often communicate rate limits through HTTP headers to inform clients about usage and remaining quota. Common headers include:

| Header                  | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `X-RateLimit-Limit`     | Maximum number of requests allowed in the time window.                                     |
| `X-RateLimit-Remaining` | Number of requests remaining in the current window.                                        |
| `X-RateLimit-Reset`     | Time (usually in UNIX timestamp) when the rate limit resets.                               |
| `Retry-After`           | Suggested wait time (in seconds) before making the next request after exceeding the limit. |

### Example

```http
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1674076800
Retry-After: 60
```

---

## Per-User vs Per-IP Limits

### Per-User Limits

* Apply limits based on user accounts or API keys.
* Useful for authenticated APIs to provide fair access to registered users.

### Per-IP Limits

* Apply limits based on client IP addresses.
* Common for public endpoints without authentication.
* Helps prevent abuse by anonymous clients.

### Hybrid Approach

* Some APIs implement both per-user and per-IP limits to cover multiple abuse scenarios.

---

## Handling Limit Exceeded Responses

When clients exceed rate limits, the API responds with HTTP status code **429 Too Many Requests**.

### Example Response

```json
{
  "error": "Rate limit exceeded",
  "message": "You have exceeded 100 requests per hour.",
  "retry_after": 60
}
```

### Best Practices for Clients

* Respect `Retry-After` headers.
* Implement exponential backoff for retries.
* Monitor usage to avoid hitting limits proactively.

---

## Retry-After Strategies

Retry strategies define how clients handle requests after hitting a rate limit:

1. **Fixed Retry**
   Wait for a fixed duration specified by the `Retry-After` header before retrying.

2. **Exponential Backoff**
   Gradually increase the wait time between retries to reduce server load:

   ```text
   1s → 2s → 4s → 8s ...
   ```

3. **Jitter**
   Add random variation to retry intervals to prevent request bursts:

   ```text
   retry_time = base * 2^attempt + random(0, jitter_max)
   ```

4. **Client-Side Queueing**
   Queue requests locally and release them according to available quota.

### Implementation Example (Pseudo-code)

```python
import time

def call_api():
    response = make_request()
    if response.status_code == 429:
        retry_after = int(response.headers.get("Retry-After", 60))
        time.sleep(retry_after)
        return call_api()
    return response
```

---
