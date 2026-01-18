# Pagination, Filtering & Sorting in APIs

Efficiently retrieving data from APIs is critical for performance, scalability, and user experience. Pagination, filtering, and sorting allow clients to access only the necessary data, reducing payload sizes, server load, and network latency. This article provides a comprehensive guide to these techniques, including implementation strategies, best practices, and performance considerations.

---

## Offset-Based Pagination

Offset-based pagination is the most common form of pagination, where the client specifies the starting point (offset) and the number of records to retrieve (limit).

### Example

```http
GET /users?offset=50&limit=10
```

Response:

```json
{
  "offset": 50,
  "limit": 10,
  "total": 230,
  "users": [
    {"id": 51, "name": "Alice"},
    {"id": 52, "name": "Bob"}
  ]
}
```

### Pros

* Simple and easy to implement.
* Works well for small datasets.

### Cons

* Performance can degrade for large offsets.
* Records may shift if underlying data changes between requests.

---

## Cursor-Based Pagination

Cursor-based pagination avoids the performance pitfalls of offset-based pagination by using a pointer (cursor) to the last item fetched.

### Example

```http
GET /users?cursor=eyJpZCI6NTB9&limit=10
```

Response:

```json
{
  "next_cursor": "eyJpZCI6NjB9",
  "users": [
    {"id": 51, "name": "Alice"},
    {"id": 52, "name": "Bob"}
  ]
}
```

### Pros

* More efficient for large datasets.
* Avoids duplicate or missing records if data changes between requests.

### Cons

* Slightly more complex to implement.
* Cursors are opaque, making debugging harder.

---

## Limit & Page Parameters

Limit and page parameters are a common shorthand for offset-based pagination.

### Example

```http
GET /products?page=3&limit=20
```

* `page`: The page number to retrieve.
* `limit`: Number of records per page.

Response includes metadata:

```json
{
  "page": 3,
  "limit": 20,
  "total_pages": 12,
  "products": [ ... ]
}
```

### Best Practices

* Set a reasonable maximum limit to prevent server overload.
* Return metadata such as `total`, `total_pages`, or `next_page` for client convenience.

---

## Filtering Strategies

Filtering allows clients to retrieve only relevant data, improving performance and usability.

### Common Filtering Techniques

1. **Exact Match**

```http
GET /orders?status=shipped
```

2. **Range Filters**

```http
GET /orders?date_from=2026-01-01&date_to=2026-01-18
```

3. **Partial Match / Search**

```http
GET /users?name_like=John
```

4. **Multiple Values**

```http
GET /products?category=electronics,appliances
```

### Best Practices

* Clearly document supported filter fields and operations.
* Avoid overloading endpoints with complex filters; consider a dedicated search endpoint.
* Validate filter parameters to prevent invalid or malicious queries.

---

## Sorting Conventions

Sorting enables clients to receive results in a predictable order.

### Syntax Examples

1. **Single Field Sorting**

```http
GET /users?sort=name
```

2. **Descending Order**

```http
GET /users?sort=-created_at
```

3. **Multiple Fields**

```http
GET /products?sort=category,-price
```

### Best Practices

* Default to a consistent sort order if none is specified.
* Support ascending and descending sorting with explicit notation (e.g., `-field` for descending).
* Limit the number of sortable fields to maintain performance.

---

## Performance Considerations

* **Indexes**: Ensure database fields used for filtering, sorting, and pagination are indexed.
* **Cursor vs Offset**: Use cursor-based pagination for large datasets to avoid slow queries.
* **Limit Caps**: Restrict maximum limits to prevent excessive server load.
* **Caching**: Cache common queries to reduce database hits.
* **Partial Response**: Allow clients to request only necessary fields to reduce payload size.
