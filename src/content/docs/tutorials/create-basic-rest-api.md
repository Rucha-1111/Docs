# How to Create a Basic REST API from Scratch

## Introduction

APIs (Application Programming Interfaces) are the backbone of modern web development. They allow different software applications to communicate with each other by sending and receiving data in a structured format. Think of an API as a waiter in a restaurant: you (the client) tell the waiter (the API) what you want, and the waiter brings your request to the kitchen (the server) and returns with your food (the data).

In this comprehensive tutorial, we will build a **simple REST API** using **Node.js and Express**. REST (Representational State Transfer) is an architectural style that uses standard HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.

### What You Will Learn

By the end of this tutorial, you will have:

* A fully functional REST API with multiple endpoints
* Practical knowledge of using `GET` and `POST` HTTP methods
* Understanding of how to structure an API project
* Experience testing APIs using different tools
* A complete, documented project ready to deploy

### Why Node.js and Express?

**Node.js** is a JavaScript runtime that allows you to run JavaScript on the server side, not just in the browser. It's fast, scalable, and has a massive ecosystem of packages.

**Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating server-side applications and APIs.

---

## Prerequisites

Before diving into the tutorial, ensure you have the following tools installed on your computer:

### Required Software

* **Node.js** (version 14 or higher) and **npm** (Node Package Manager)
  * npm comes bundled with Node.js
  * [Download Node.js](https://nodejs.org/)
  * To verify installation, run: `node --version` and `npm --version`

* **Code Editor**
  * We recommend [Visual Studio Code](https://code.visualstudio.com/) (free and powerful)
  * Alternatives: Sublime Text, Atom, or any text editor you're comfortable with

* **API Testing Tool** (optional but highly recommended)
  * [Postman](https://www.postman.com/downloads/) - User-friendly GUI for API testing
  * [Insomnia](https://insomnia.rest/download) - Lightweight alternative to Postman
  * Alternative: Use browser extensions like REST Client or curl commands

### Recommended Knowledge

* Basic understanding of JavaScript
* Familiarity with command line/terminal
* Basic understanding of how the web works (HTTP requests/responses)

---

## Step 1: Initialize Your Project

The first step in creating any Node.js project is to set up your project structure and initialize it with npm.

### 1.1 Create Project Folder

Open your terminal or command prompt and create a new directory for your API project:

```bash
mkdir basic-api
cd basic-api
```

**Explanation:**

* `mkdir basic-api` creates a new folder named "basic-api"
* `cd basic-api` changes your current directory to the newly created folder

### 1.2 Initialize Node.js Project

Now, initialize a new Node.js project by running:

```bash
npm init -y
```

**What does this do?**

The `npm init` command creates a `package.json` file, which is the heart of any Node.js project. This file contains:

* Project metadata (name, version, description)
* Dependencies (packages your project needs)
* Scripts for running tasks
* Other configuration details

The `-y` flag automatically answers "yes" to all prompts, creating a default `package.json` file. Without this flag, you would need to manually answer questions about your project.

### 1.3 Verify package.json

Open the newly created `package.json` file. It should look something like this:

```json
{
  "name": "basic-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

You can edit this file to add a description, author name, or other details if you wish.

![Initialize Project](/Docs/rest-api/step1-init.png)

---

## Step 2: Install Express

Express is a third-party package that we need to install as a dependency for our project.

### 2.1 Install Express Package

Run the following command in your terminal:

```bash
npm install express
```

**What happens during installation?**

1. npm downloads the Express package from the npm registry
2. It saves Express to a `node_modules` folder in your project
3. It adds Express as a dependency in your `package.json` file
4. It creates or updates a `package-lock.json` file that locks the exact versions of all packages

### 2.2 Verify Installation

After installation, check your `package.json` file. You should now see Express listed under dependencies:

```json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

The version number may differ depending on when you're following this tutorial. The `^` symbol means npm will accept minor version updates.

### 2.3 Understanding node_modules

You'll notice a new `node_modules` folder has been created. This folder contains Express and all its dependencies. **_Never edit files in this folder manually_**, and you typically don't include it in version control (add it to `.gitignore` if using Git).

![Install Express](/Docs/rest-api/step2-express.png)

---

## Step 3: Create the Server

Now we'll create the actual server file that will run our API.

### 3.1 Create server.js

In your project root directory, create a new file called `server.js`. This will be the entry point of our application.

### 3.2 Import Express and Initialize

Add the following code to `server.js`:

```javascript
const express = require('express');
const app = express();
const port = 3000;
```

**Code Breakdown:**

* `const express = require('express');` - Imports the Express module using CommonJS syntax
* `const app = express();` - Creates an Express application instance. This `app` object has methods for routing HTTP requests, configuring middleware, rendering HTML, and more
* `const port = 3000;` - Defines the port number our server will listen on. Port 3000 is commonly used for local development

### 3.3 Add Middleware

Add this line next:

```javascript
// Middleware to parse JSON
app.use(express.json());
```

**What is Middleware?**

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle.

`express.json()` is a built-in middleware that parses incoming requests with JSON payloads. Without this, your API wouldn't be able to read JSON data sent in POST requests.

### 3.4 Create Your First Route

Add a simple test route:

```javascript
// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

**Understanding Routes:**

* `app.get()` defines a route that responds to HTTP GET requests
* The first parameter `'/'` is the path (root path in this case)
* The second parameter is a callback function with two parameters:
  * `req` (request) - contains information about the HTTP request
  * `res` (response) - used to send back the desired HTTP response
* `res.send()` sends a simple string response to the client

### 3.5 Start the Server

Finally, tell the server to start listening for requests:

```javascript
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

**What does app.listen() do?**

* Binds and listens for connections on the specified host and port
* The callback function runs once the server starts successfully
* The backticks (`) allow us to use template literals to embed the port variable

### 3.6 Complete server.js Code

Your complete `server.js` file should now look like this:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### 3.7 Run Your Server

In your terminal, start the server by running:

```bash
node server.js
```

You should see the message: `Server running at http://localhost:3000`

### 3.8 Test in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see **"Hello, World!"** displayed on the page. Congratulations! Your server is running.

**Troubleshooting:**

* If you see "Cannot GET /", make sure your server.js file is correct and restart the server
* If the port is already in use, change the port number to something else (like 3001, 8000, etc.)
* To stop the server, press `Ctrl+C` in the terminal

![Browser Test](/Docs/rest-api/step3-browser.png)

---

## Step 4: Create a Simple API Endpoint

Now let's create a more realistic API endpoint that returns actual data in JSON format.

### 4.1 Add Sample Data

At the top of your `server.js` file, after the variable declarations, add an array of user objects:

```javascript
const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];
```

**Understanding the Data Structure:**

This is a simple JavaScript array containing objects. Each object represents a user with:

* `id`: A unique identifier for the user
* `name`: The user's name

In a real application, this data would typically come from a database like MongoDB, PostgreSQL, or MySQL. For learning purposes, we're using an in-memory array.

### 4.2 Create the /users Endpoint

Add a new route to retrieve all users:

```javascript
app.get('/users', (req, res) => {
  res.json(users);
});
```

**Code Explanation:**

* `app.get('/users', ...)` - Defines a GET endpoint at the `/users` path
* `res.json(users)` - Sends the users array as a JSON response
  * The `json()` method automatically:
    * Converts the JavaScript object/array to JSON format
    * Sets the `Content-Type` header to `application/json`
    * Sends the response to the client

### 4.3 Complete Code So Far

Your `server.js` should now look like this:

```javascript
const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### 4.4 Restart Your Server

Since we modified the code, we need to restart the server:

1. Stop the current server (press `Ctrl+C` in terminal)
2. Start it again:

```bash
node server.js
```

**Pro Tip:** Later, you can install `nodemon` which automatically restarts your server when files change:

```bash
npm install --save-dev nodemon
```

Then run with: `npx nodemon server.js`

### 4.5 Test the Endpoint

You can test this endpoint in multiple ways:

#### Method 1: Browser

Navigate to:

```
http://localhost:3000/users
```

You should see the JSON response:

```json
[
  { "id": 1, "name": "Rucha" },
  { "id": 2, "name": "John" }
]
```

#### Method 2: Postman

1. Open Postman
2. Create a new request
3. Set method to `GET`
4. Enter URL: `http://localhost:3000/users`
5. Click "Send"
6. View the response in the body section

#### Method 3: curl (Command Line)

If you prefer command line, use:

```bash
curl http://localhost:3000/users
```

![Users API Response](/Docs/rest-api/step4-users.png)

### 4.6 Understanding REST Principles

This endpoint follows REST principles:

* **Resource-based:** `/users` represents a collection of user resources
* **HTTP Methods:** We use GET to retrieve data (read-only operation)
* **Stateless:** Each request is independent; the server doesn't store client state
* **JSON Format:** We use JSON, the standard format for API data exchange

---

## Step 5: Add a POST Endpoint

So far, we can only read data. Let's add functionality to create new users using the POST method.

### 5.1 Understanding HTTP POST

The POST method is used to submit data to be processed. Unlike GET requests, POST requests:

* Can send data in the request body
* Are not cached by browsers
* Don't remain in browser history
* Have no restrictions on data length

### 5.2 Create the POST Route

Add this code to your `server.js`:

```javascript
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
```

**Detailed Code Explanation:**

1. `app.post('/users', ...)` - Defines a POST endpoint at `/users` path
   * Notice we're using the same path as our GET endpoint
   * Express automatically routes to the correct handler based on HTTP method

2. `const newUser = { ... }` - Creates a new user object:
   * `id: users.length + 1` - Generates a simple incremental ID
     * In production, databases handle ID generation automatically
   * `name: req.body.name` - Gets the name from the request body
     * `req.body` is populated by the `express.json()` middleware we added earlier

3. `users.push(newUser)` - Adds the new user to our users array
   * This modifies the in-memory array
   * In a real app, you'd save to a database

4. `res.status(201).json(newUser)` - Sends the response:
   * `status(201)` - Sets HTTP status code to 201 (Created)
     * Status codes are important in REST APIs
     * 201 specifically means a resource was successfully created
   * `json(newUser)` - Returns the newly created user as JSON

### 5.3 HTTP Status Codes

Here are common status codes you'll use in APIs:

* **200 OK** - Successful GET, PUT, or DELETE
* **201 Created** - Successful POST (resource created)
* **204 No Content** - Successful request with no response body
* **400 Bad Request** - Invalid request data
* **404 Not Found** - Resource doesn't exist
* **500 Internal Server Error** - Server-side error

### 5.4 Complete server.js

Your final `server.js` should look like this:

```javascript
const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### 5.5 Restart Server

Remember to restart your server to apply changes:

```bash
# Stop with Ctrl+C, then:
node server.js
```

### 5.6 Test with Postman

To test the POST endpoint, you can't use a browser directly (browsers default to GET requests). Use Postman instead:

#### Step-by-Step Postman Instructions

1. **Open Postman** and create a new request

2. **Set the Method** to `POST` (dropdown next to URL)

3. **Enter the URL**: `http://localhost:3000/users`

4. **Configure the Body**:
   * Click on the "Body" tab
   * Select "raw"
   * Choose "JSON" from the dropdown (right side)

5. **Enter JSON Data**:

   ```json
   {
     "name": "Alice"
   }
   ```

6. **Click "Send"**

7. **View the Response**:
   * You should receive a 201 status code
   * Response body should show:

   ```json
   {
     "id": 3,
     "name": "Alice"
   }
   ```

### 5.7 Verify the User Was Added

Make a GET request to `http://localhost:3000/users` again. You should now see all three users:

```json
[
  { "id": 1, "name": "Rucha" },
  { "id": 2, "name": "John" },
  { "id": 3, "name": "Alice" }
]
```

### 5.8 Test with curl

Alternatively, test with curl:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice"}'
```

![Add User](/Docs/rest-api/step5-post.png)

---

## Conclusion

This tutorial demonstrated the end-to-end process of creating a basic REST API using Node.js and Express. It covered project initialization, server setup, route creation, and handling HTTP requests and responses.

You implemented:

* A GET endpoint to retrieve a collection of users
* A POST endpoint to create a new user using JSON request data
* Proper use of middleware for request parsing
* Basic API testing using browser tools, Postman, and curl

The API uses in-memory data and is intended for learning purposes. In a production environment, this data would be persisted using a database and enhanced with validation, error handling, and authentication.

This example provides a foundational reference for understanding REST concepts and documenting simple API workflows.
