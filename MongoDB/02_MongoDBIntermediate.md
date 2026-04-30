# 📘 MongoDBIntermediate.md

## 🚀 Phase 2 — Intermediate Level (Top 25 Interview Questions)

---

## 🟡 Mongoose & Schema

### 1. What is Mongoose?

👉 Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js.

**Example:**

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String
});
```

---

### 2. What is a Schema?

👉 Defines structure of data in MongoDB.

```js
const schema = new mongoose.Schema({
  name: String,
  age: Number
});
```

---

### 3. What is a Model?

👉 Used to interact with a collection.

```js
const User = mongoose.model("User", schema);
```

---

### 4. Difference between Schema & Model?

👉 Schema = structure
👉 Model = performs operations

---

### 5. What is validation in Mongoose?

👉 Ensures correct data before saving

```js
name: { type: String, required: true }
```

---

### 6. What is `timestamps`?

👉 Adds `createdAt` & `updatedAt`

```js
{ timestamps: true }
```

---

### 7. What is default value?

👉 Auto assigned if not provided

```js
isActive: { type: Boolean, default: true }
```

---

## 🟡 Schema Design

### 8. What is embedding?

👉 Storing related data inside document

```json
{
  "user": "Govind",
  "address": { "city": "Patna" }
}
```

---

### 9. What is referencing?

👉 Linking documents using `_id`

```js
user: { type: ObjectId, ref: "User" }
```

---

### 10. When to use embedding?

👉 Small + frequently accessed together

---

### 11. When to use referencing?

👉 Large + scalable data

---

### 12. What is hybrid approach?

👉 Combination of embedding + referencing

---

## 🟡 Relationships

### 13. What is 1:1 relationship?

👉 One document → one document

---

### 14. What is 1:M relationship?

👉 One document → many documents

---

### 15. What is M:M relationship?

👉 Many documents connected both ways

---

### 16. What is `populate()`?

👉 Fetch referenced data (like join)

```js
await Post.find().populate("createdBy");
```

---

## 🟡 Aggregation

### 17. What is aggregation?

👉 Data processing pipeline

---

### 18. What is `$match`?

👉 Filter stage

```js
{ $match: { likesCount: { $gt: 0 } } }
```

---

### 19. What is `$group`?

👉 Group data

```js
{
  $group: {
    _id: "$createdBy",
    totalPosts: { $sum: 1 }
  }
}
```

---

### 20. Why `$sum: 1` is used?

👉 To count documents

---

### 21. What is `$lookup`?

👉 Join collections

```js
{
  $lookup: {
    from: "users",
    localField: "createdBy",
    foreignField: "_id",
    as: "user"
  }
}
```

---

### 22. What is `$unwind`?

👉 Converts array into object

```js
{ $unwind: "$user" }
```

---

### 23. What is `$project`?

👉 Select specific fields

```js
{ $project: { title: 1 } }
```

---

## 🟡 Indexing

### 24. What is indexing?

👉 Improves query performance

```js
db.posts.createIndex({ createdBy: 1 })
```

---

### 25. What is compound index?

👉 Index on multiple fields

```js
db.posts.createIndex({ createdBy: 1, likesCount: -1 })
```

---

## 🔥 Bonus Interview Insight

👉 Always design schema based on **access pattern**

---

## 🎯 Your Current Level

You now know:

* Mongoose ✔️
* Schema Design ✔️
* Relationships ✔️
* Aggregation ✔️
* Indexing ✔️

👉 You are now **Intermediate Backend Developer Ready 🚀**

---
