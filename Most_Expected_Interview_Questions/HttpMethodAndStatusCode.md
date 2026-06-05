# HTTP Methods & Status Codes - Complete Interview Notes 🚀

## Why Do We Have Different HTTP Methods?

Technically, many operations can be performed using different HTTP methods.

For example:

* You can send data using GET.
* You can update data using POST.
* You can partially update data using PUT.

However:

> HTTP methods are not restricted by technology but by standards and semantics.

Following GET, POST, PUT, PATCH, and DELETE conventions makes APIs:

* Predictable
* Secure
* Cache-Friendly
* Easier for Developers to Understand
* Easier for Tools and Browsers to Work With

---

# 1. GET Method

## Purpose

Retrieve data.

```http
GET /users
```

## Benefits

✅ Browsers can cache responses

✅ Search engines understand it's safe

✅ Doesn't modify data

✅ Faster because proxies/CDNs can cache it

## Example

```txt
Instagram Feed
↓
GET /posts
```

Everyone immediately knows data is being fetched.

---

# 2. POST Method

## Purpose

Create new resources.

```http
POST /users
```

## Benefits

✅ Used for creation

✅ Request body can contain large data

✅ Not cached by default

✅ Safer for sensitive information than query parameters

## Example

```txt
Register User
↓
POST /register
```

---

# 3. PUT Method

## Purpose

Replace an entire resource.

```http
PUT /users/1
```

## Benefits

✅ Makes intentions clear

✅ Good for full profile updates

✅ Idempotent

### What is Idempotent?

Calling the same request multiple times produces the same final result.

```txt
PUT age = 25
PUT age = 25
PUT age = 25
```

Still:

```txt
age = 25
```

---

# 4. PATCH Method

## Purpose

Partially update a resource.

```http
PATCH /users/1
```

## Benefits

✅ Sends less data

✅ Faster network transfer

✅ Better for small updates

## Example

```json
{
  "isAdult": true
}
```

Only one field changes.

---

# 5. DELETE Method

## Purpose

Remove a resource.

```http
DELETE /users/1
```

## Benefits

✅ Intent is immediately clear

✅ Easy for developers and tools to understand

---

# PUT vs PATCH (Most Asked Interview Question)

## Current Document

```json
{
  "name": "abc",
  "age": 12,
  "isAdult": false
}
```

---

## Request

```http
PUT /user/1
```

```json
{
  "age": 19
}
```

---

## According to REST Theory

Result should become:

```json
{
  "age": 19
}
```

Why?

Because PUT is intended to replace the entire resource.

---

## Then Why Do We Usually See This?

Result:

```json
{
  "name": "abc",
  "age": 19,
  "isAdult": false
}
```

Because the backend implementation decides to merge the data.

---

# Example with MongoDB

Suppose we use:

```js
User.findByIdAndUpdate(
  id,
  req.body
);
```

Request:

```json
{
  "age": 19
}
```

Result:

```json
{
  "name": "abc",
  "age": 19,
  "isAdult": false
}
```

MongoDB updates only the provided field.

---

# Important Rule

```txt
HTTP Method ≠ Database Operation
```

Many developers confuse these two things.

---

# Real Reason Behind The Confusion

People think:

```txt
PUT
↓
Automatically replace document
```

Wrong.

PUT only expresses the client's intention.

The server decides how to implement it.

---

# Example

Client sends:

```http
PUT /users/1
```

---

## Implementation 1: True Replacement

```js
replaceOne(...)
```

Result:

```json
{
  "age": 19
}
```

---

## Implementation 2: Merge Update

```js
findByIdAndUpdate(...)
```

Result:

```json
{
  "name": "abc",
  "age": 19,
  "isAdult": false
}
```

Most Express + MongoDB applications use this approach.

---

# Why PUT Often Behaves Like PATCH

Most modern applications use:

```js
findByIdAndUpdate()
```

which updates only provided fields.

Because of this:

```txt
PUT ≈ PATCH
```

in many real-world projects.

Even though REST standards distinguish them.

---

# Real-World Example

## Current Form

```txt
Name: Govind
Age: 24
City: Delhi
```

---

## PATCH

You say:

```txt
Change only city.
```

Government updates only city.

---

## PUT

You say:

```txt
Here is my complete new form.
Replace old form.
```

Government throws away the old form and stores the new one.

---

## What Many Applications Actually Do

You submit:

```txt
Only City
```

Server says:

```txt
We'll update only city.
```

even though the request was PUT.

This is an implementation choice.

---

# Interview Answer

### What is the difference between PUT and PATCH?

> According to REST conventions, PUT is used for full resource replacement, while PATCH is used for partial updates. However, many modern applications implement PUT as a partial update internally, so the actual behavior depends on the server implementation rather than the HTTP method itself.

---

# Golden Rule ⭐

```txt
HTTP Method tells intention.
Backend code decides behavior.
```

This single line explains almost every confusion around PUT vs PATCH.

---

# Most Used HTTP Status Codes

| Code | Meaning               | Use Case                 |
| ---- | --------------------- | ------------------------ |
| 200  | OK                    | Fetch data               |
| 201  | Created               | Create user/todo         |
| 204  | No Content            | Delete success           |
| 400  | Bad Request           | Invalid input            |
| 401  | Unauthorized          | Not logged in            |
| 403  | Forbidden             | No permission            |
| 404  | Not Found             | Resource missing         |
| 409  | Conflict              | Email already exists     |
| 500  | Internal Server Error | Server crash/error       |
| 503  | Service Unavailable   | Service temporarily down |

---

# Quick Revision 🚀

## HTTP Methods

| Method | Purpose                 |
| ------ | ----------------------- |
| GET    | Fetch Data              |
| POST   | Create Data             |
| PUT    | Replace Entire Resource |
| PATCH  | Partial Update          |
| DELETE | Remove Resource         |

---

## Status Codes

### Success (2xx)

```txt
200 OK
201 Created
204 No Content
```

### Client Errors (4xx)

```txt
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
```

### Server Errors (5xx)

```txt
500 Internal Server Error
503 Service Unavailable
```

---

# Final Interview One-Liner

> HTTP methods define the intention of an operation, while the backend implementation defines how that operation is actually performed. Following standard HTTP conventions makes APIs predictable, secure, cache-friendly, and easier for developers and tools to understand.
