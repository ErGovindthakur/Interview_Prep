# 📘 MongoDBFundamentals.md

## 🚀 MongoDB Phase 1 — Top 25 Interview Questions (With Answers & Examples)

---

## 🟢 Basic Concepts

### 1. What is MongoDB?

👉 MongoDB is a NoSQL database that stores data in JSON-like documents.

**Example:**

```json
{ "name": "Govind", "age": 22 }
```

---

### 2. What is NoSQL?

👉 A database that does not use tables; it uses flexible data models like documents.

---

### 3. SQL vs NoSQL?

👉 SQL = tables, fixed schema
👉 NoSQL = documents, flexible schema

---

### 4. What is a Database in MongoDB?

👉 A container that holds collections.

---

### 5. What is a Collection?

👉 A group of documents (like a table in SQL).

---

### 6. What is a Document?

👉 A JSON-like object that stores data.

**Example:**

```json
{ "name": "Phone", "price": 30000 }
```

---

### 7. What is `_id`?

👉 Unique identifier automatically added to each document.

---

### 8. What is BSON?

👉 Binary version of JSON used internally by MongoDB.

---

## 🟢 CRUD Operations

### 9. What is CRUD?

👉 Create, Read, Update, Delete

---

### 10. How to insert data?

```js
db.users.insertOne({ name: "Govind", age: 22 })
```

---

### 11. How to read data?

```js
db.users.find()
```

---

### 12. Difference between `find()` and `findOne()`?

👉 `find()` → returns multiple
👉 `findOne()` → returns single

---

### 13. How to update data?

```js
db.users.updateOne(
  { name: "Govind" },
  { $set: { age: 23 } }
)
```

---

### 14. What is `$set`?

👉 Used to update specific fields.

---

### 15. How to delete data?

```js
db.users.deleteOne({ name: "Govind" })
```

---

## 🟢 Query Operators

### 16. What is `$gt`?

👉 Greater than

```js
db.products.find({ price: { $gt: 1000 } })
```

---

### 17. What is `$lt`?

👉 Less than

---

### 18. What is `$in`?

👉 Match multiple values

```js
db.products.find({ category: { $in: ["electronics"] } })
```

---

### 19. What is `$or`?

👉 Match any condition

```js
db.products.find({
  $or: [{ name: "Laptop" }, { price: 1500 }]
})
```

---

### 20. Can we combine operators?

👉 Yes

```js
db.products.find({
  price: { $gt: 1000, $lt: 50000 }
})
```

---

## 🟢 Projection & Sorting

### 21. What is projection?

👉 Selecting specific fields

```js
db.products.find({}, { name: 1, _id: 0 })
```

---

### 22. How to sort data?

```js
db.products.find().sort({ price: -1 })
```

👉 -1 = descending
👉 1 = ascending

---

### 23. What is limit?

👉 Restrict number of results

```js
db.products.find().limit(2)
```

---

### 24. What is skip?

👉 Skip documents (pagination)

```js
db.products.find().skip(1).limit(2)
```

---

## 🟢 Data Types & Schema

### 25. What are MongoDB data types?

👉 String, Number, Boolean, Array, Object, Date

**Example:**

```json
{
  "name": "Govind",
  "age": 22,
  "skills": ["React", "Node"],
  "address": { "city": "Patna" },
  "isActive": true,
  "createdAt": new Date()
}
```

---

## 🔥 Bonus Interview Insight

👉 MongoDB is schema-less, but in real applications we use **Mongoose** to enforce structure.

---

## ✅ Your Progress

You now understand:

* MongoDB structure
* CRUD operations
* Query operators
* Projection & sorting
* Data types

👉 You are now **ready for Phase 2 (Real Backend Development)** 🚀

---
