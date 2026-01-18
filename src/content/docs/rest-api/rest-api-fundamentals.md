# REST API Fundamentals

In modern web applications, APIs are the backbone of system communication. **REST APIs**—short for **Representational State Transfer APIs**—are one of the most widely used types of APIs, enabling seamless interaction between clients (like web or mobile apps) and servers.

Imagine ordering a pizza online. You place your order via an app, the app sends your request to the kitchen, and soon the pizza is delivered to your door. You don’t need to know how the chef prepares it; you just expect your order to be fulfilled correctly. In the world of web apps, **REST APIs function in a similar manner**: they are intermediaries that receive requests from clients, communicate with the server, and return the data or results in a predictable format.

---

## What an API Is

Before diving into REST APIs specifically, it’s important to understand **what an API is**.

**API**, or **Application Programming Interface**, is a set of rules and protocols that allows **two software systems to communicate with each other**. It defines:

* How requests are structured
* What data formats are accepted and returned
* How responses and errors are communicated

APIs abstract the internal workings of a system, exposing only the necessary functionality. This enables developers to **leverage complex services** without needing to understand their internal implementation.

In essence, an API is a **contract between software components**: if the client sends a properly formatted request, the server guarantees a predictable response.

---

## What “REST” Actually Means

REST stands for **Representational State Transfer**, a design architecture for building APIs over the web. It was introduced by Roy Fielding in his doctoral dissertation in 2000 and has since become the standard for web-based APIs.

Key principles of REST include:

1. **Client–Server Separation**
   The client (frontend or consumer) and server (backend or provider) are independent systems. The client handles the user interface, while the server manages data and business logic. This separation **promotes modularity** and allows each to evolve independently.

2. **Stateless Communication**
   Every request from a client to a server must contain all the information needed to understand and process the request. The server does **not store client context** between requests. Statelessness ensures **scalability** and **reliability**, as servers can handle requests without tracking session data.

3. **Resources and Actions**
   In REST, everything is treated as a **resource**, which can be any entity such as a user, product, or document. Resources are identified by **URIs (Uniform Resource Identifiers)**, and standard HTTP methods define actions on them:

   | HTTP Method | Action         | Description                  |
   | ----------- | -------------- | ---------------------------- |
   | GET         | Read           | Retrieve data for a resource |
   | POST        | Create         | Add a new resource           |
   | PUT         | Update/Replace | Modify an existing resource  |
   | PATCH       | Update/Partial | Partially update a resource  |
   | DELETE      | Delete         | Remove a resource            |

4. **Uniform Interface**
   REST APIs adhere to a **consistent structure** so that clients can interact with any RESTful service in a standardized way. This includes consistent URIs, HTTP methods, status codes, and response formats (typically JSON or XML).

---

## URI Design Basics

Uniform Resource Identifiers (URIs) are the addresses used to identify resources in REST APIs. Good URI design is **intuitive, consistent, and hierarchical**, making APIs easy to use and maintain. Some best practices include:

* Use **nouns, not verbs**, to represent resources:

```

  /users        → List all users
  /users/123    → Retrieve user with ID 123
```

* Use **plural nouns** for collections:

```
  /products     → All products
  /products/456 → Specific product
```

* Avoid including action names in URIs; instead, use **HTTP methods** to indicate the action:

```
  GET /orders   → Fetch orders
  POST /orders  → Create a new order
  DELETE /orders/789 → Delete order 789
```

* Support **query parameters** for filtering, sorting, or pagination:

```
  /orders?status=pending&limit=20
```

---

## Summary

A **REST API** is a standardized way for software systems to communicate over the web, exposing resources and operations in a predictable, uniform manner. By following REST principles—client-server separation, statelessness, resource-based design, and uniform interfaces—developers can build scalable, maintainable, and interoperable web services.

REST APIs form the foundation of modern web and mobile applications, enabling integration between diverse systems and services efficiently and reliably.
