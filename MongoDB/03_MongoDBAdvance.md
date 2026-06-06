# MongoDB Indexing - Complete Interview Notes 🚀

## Why Learn Indexing?

Indexing is one of those topics that separates:

```txt
"I know MongoDB"
```

from

```txt
"I understand how databases actually work"
```

---

# What Problem Does Indexing Solve?

Suppose you have:

```js
[
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  ...
  { id: 1000000, name: "Govind" }
]
```

Now you run:

```js
db.users.find({
  name: "Govind"
})
```

## Without Index

MongoDB checks:

```txt
Record 1
Record 2
Record 3
...
Record 999999
Record 1000000
```

until it finds Govind.

This is called:

```txt
Collection Scan (COLLSCAN)
```

### Time Complexity

```txt
O(n)
```

---

# Real World Example

Imagine finding a student named:

```txt
Govind
```

in a school of:

```txt
50,000 students
```

Without roll numbers:

```txt
Check Student 1
Check Student 2
Check Student 3
...
```

Very slow.

---

# What is an Index?

An Index is a special data structure that helps MongoDB locate data quickly.

Think of a book:

```txt
Index

Database ........ Page 10
JavaScript ...... Page 55
MongoDB ......... Page 120
Redis ........... Page 180
```

You don't read the entire book.

You jump directly to the page.

MongoDB does the same thing.

---

# Using Sample Data

Create an index:

```js
db.users.createIndex({
  email: 1
})
```

MongoDB creates something similar to:

```txt
Email                              Location
-------------------------------------------------
Chaim_McDermott@dana.io          -> Record 9
Karley_Dach@jasper.info          -> Record 6
Nathan@yesenia.net               -> Record 3
Rey.Padberg@karina.biz           -> Record 10
...
```

Now query:

```js
db.users.find({
  email: "Nathan@yesenia.net"
})
```

MongoDB directly jumps to:

```txt
Record 3
```

instead of scanning every document.

---

# Behind The Scenes

MongoDB uses:

```txt
B+ Tree Index
```

Think of:

```txt
                 M
               /   \
            G         T
          /   \     /   \
        A-F  H-L  N-S  U-Z
```

Searching:

```txt
Nathan
```

MongoDB navigates:

```txt
M
↓
T Left
↓
N-S
↓
Nathan
```

Only a few steps.

---

## Without Index

```txt
Check every record
```

## With Index

```txt
Navigate the tree
```

Huge performance difference.

---

# Example with Nested Fields

Query:

```js
db.users.find({
  "address.city": "Gwenborough"
})
```

Without index:

```txt
Check all users
```

Create index:

```js
db.users.createIndex({
  "address.city": 1
})
```

MongoDB stores:

```txt
Aliyaview         -> User 8
Bartholomebury    -> User 9
Gwenborough       -> User 1
Howemouth         -> User 7
...
```

Search becomes much faster.

---

# Why Not Index Everything?

Many beginners think:

```txt
More Indexes = More Speed
```

Wrong.

Imagine:

```txt
Student Register
```

and 50 different indexes.

When a new student joins:

```txt
Update Register
Update Roll Number Index
Update Name Index
Update City Index
Update Phone Index
Update Email Index
...
```

Work increases.

Same thing happens inside MongoDB.

---

# Drawbacks of Indexing

## 1. More Storage

```txt
Collection
+
Indexes
```

Indexes consume extra disk space.

---

## 2. Slower Inserts

```js
insertOne(...)
```

MongoDB updates:

```txt
Data
+
All Indexes
```

---

## 3. Slower Updates

Update:

```js
email
```

MongoDB updates:

```txt
Collection
+
Email Index
```

---

# Types of Indexes

---

## 1. Single Field Index

```js
db.users.createIndex({
  email: 1
})
```

Most common.

---

## 2. Compound Index

Multiple fields.

```js
db.users.createIndex({
  city: 1,
  name: 1
})
```

Useful for:

```js
db.users.find({
  city: "Gwenborough",
  name: "Leanne Graham"
})
```

---

## 3. Unique Index

```js
db.users.createIndex(
  {
    email: 1
  },
  {
    unique: true
  }
)
```

Prevents:

```txt
Duplicate Emails
```

### Real World Use

```txt
User Registration
```

---

## 4. Text Index

For text searching.

```js
db.users.createIndex({
  name: "text"
})
```

Search:

```js
db.users.find({
  $text: {
    $search: "Leanne"
  }
})
```

---

## 5. TTL Index

Automatically deletes documents.

```js
db.tokens.createIndex(
  {
    createdAt: 1
  },
  {
    expireAfterSeconds: 3600
  }
)
```

After:

```txt
1 Hour
```

MongoDB removes documents automatically.

### Common Use Cases

* OTPs
* Sessions
* Password Reset Tokens

---

# How MongoDB Decides to Use an Index?

Query:

```js
db.users.find({
  email: "Nathan@yesenia.net"
})
```

MongoDB Query Planner checks:

```txt
Do I have an email index?
```

### If Yes

```txt
Use IXSCAN
```

(Index Scan)

### If No

```txt
Use COLLSCAN
```

(Collection Scan)

---

# Verify Using Explain

```js
db.users.find({
  email: "Nathan@yesenia.net"
}).explain("executionStats")
```

Without index:

```txt
COLLSCAN
```

With index:

```txt
IXSCAN
```

---

# Most Asked Interview Questions

## What is Indexing?

> Indexing is a database optimization technique that creates a data structure to speed up query performance by avoiding full collection scans.

---

## Why is Indexing Fast?

> MongoDB uses B+ Tree indexes that allow efficient searching, insertion, and deletion operations.

---

## What are the Downsides of Indexing?

> Indexes improve read performance but consume additional storage and can slow down insert and update operations.

---

## When Should We Create an Index?

Create indexes on fields frequently used in:

```txt
find()
sort()
filter()
lookup()
```

Examples:

```txt
email
username
userId
createdAt
city
```

---

# Real Production Example

Suppose you build:

```txt
LinkedIn
```

Login Query:

```js
db.users.find({
  email: "govind@gmail.com"
})
```

Millions of users exist.

---

## Without Index

```txt
Check every user 😭
```

---

## With Index

```js
db.users.createIndex({
  email: 1
})
```

MongoDB immediately finds:

```txt
govind@gmail.com
```

This is why almost every production application indexes:

```txt
email
username
phone
userId
createdAt
```

---

# COLLSCAN vs IXSCAN

| Feature              | COLLSCAN | IXSCAN |
| -------------------- | -------- | ------ |
| Full Collection Scan | ✅ Yes    | ❌ No   |
| Uses Index           | ❌ No     | ✅ Yes  |
| Speed                | Slow     | Fast   |
| Recommended          | ❌ No     | ✅ Yes  |

---

# Golden Interview Line ⭐

> Indexes are like the index page of a book. Without an index, MongoDB scans every document in a collection. With an index, MongoDB uses a B+ Tree data structure to quickly locate matching documents, significantly improving query performance at the cost of additional storage and slightly slower writes.

---

# Quick Revision 🚀

```txt
COLLSCAN  -> Checks Every Document
IXSCAN    -> Uses Index

B+ Tree   -> Internal Data Structure

Pros:
✔ Fast Reads
✔ Fast Searches
✔ Fast Sorting

Cons:
✖ More Storage
✖ Slower Inserts
✖ Slower Updates

Common Indexes:
✔ Single Field
✔ Compound
✔ Unique
✔ Text
✔ TTL
```

## Final Rule

```txt
Index fields that are frequently searched.
Do not index everything.
```
