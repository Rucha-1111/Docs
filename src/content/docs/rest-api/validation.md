# Validation & Data Integrity in APIs

## Input Validation Rules

Input validation ensures that the data received by the API is **correct, safe, and usable**, protecting the system from errors, attacks, and inconsistent data.

**Common Validation Checks**

* **Format validation:** Ensure data matches expected patterns (e.g., email, phone number)
* **Range validation:** Numeric or date fields fall within allowed limits
* **Length validation:** Strings or arrays have acceptable lengths
* **Enumeration validation:** Fields accept only specific predefined values

**Example: Express.js Input Validation Using Joi**

```javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('admin', 'user', 'guest')
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
```

**Best Practices**

* Validate **all user inputs** at the API boundary
* Apply both **client-side and server-side validation**
* Return clear, actionable error messages

---

## Required vs Optional Fields

Differentiating between required and optional fields ensures data completeness without forcing unnecessary input.

**Rules**

* **Required fields:** Must always be provided for the resource to be valid
* **Optional fields:** May be omitted; default values can be applied if necessary

**Example: JSON Schema**

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer" }
  },
  "required": ["name", "email"]
}
```

**Best Practices**

* Clearly document which fields are required and optional
* Avoid overloading requests with optional fields that are rarely used
* Apply defaults for optional fields where applicable

---

## Data Type Enforcement

Ensuring that fields conform to their expected data types prevents **runtime errors and data corruption**.

**Examples**

* Strings for text (`name`, `email`)
* Integers for IDs, quantities, or ages
* Booleans for flags (`isActive`)
* ISO 8601 format for date/time fields (`2026-01-18T14:00:00Z`)

**Example: Type Validation in Node.js**

```javascript
if (typeof req.body.age !== 'number') {
  return res.status(400).json({ error: "Age must be a number" });
}
```

**Best Practices**

* Enforce type checks at the API layer before persistence
* Normalize types (e.g., parse strings to integers if appropriate)
* Reject malformed or unexpected types with descriptive errors

---

## Handling Partial Updates

Partial updates allow clients to modify **only a subset of fields** without sending the entire resource. Typically implemented via `PATCH` requests.

**Example: PATCH /users/123**

Request:

```json
{
  "email": "newemail@example.com",
  "age": 30
}
```

Server Logic:

```javascript
const user = await User.findById(123);
if (req.body.email) user.email = req.body.email;
if (req.body.age) user.age = req.body.age;
await user.save();
```

**Best Practices**

* Validate only the fields being updated
* Preserve unchanged fields
* Apply the same validation rules as for full updates
* Use `PATCH` for partial updates, `PUT` for full replacements

---

## Preventing Invalid State Transitions

APIs must enforce **valid workflows and state changes** to maintain data integrity.

**Example: Order Status Transitions**

Allowed transitions:

| Current Status | Allowed Next Status |
| -------------- | ------------------- |
| pending        | confirmed, canceled |
| confirmed      | shipped, canceled   |
| shipped        | delivered           |
| delivered      | -                   |

Implementation:

```javascript
const validTransitions = {
  pending: ['confirmed', 'canceled'],
  confirmed: ['shipped', 'canceled'],
  shipped: ['delivered'],
  delivered: []
};

if (!validTransitions[currentStatus].includes(newStatus)) {
  return res.status(400).json({ error: `Invalid status transition from ${currentStatus} to ${newStatus}` });
}
```

**Best Practices**

* Define allowed state transitions in a table or configuration
* Enforce transitions in the API layer, not only in the database
* Return descriptive errors when invalid transitions are attempted

---

This ensures **input validation, data type enforcement, controlled updates, and consistent state management**, maintaining **high data integrity** and predictable API behavior.
