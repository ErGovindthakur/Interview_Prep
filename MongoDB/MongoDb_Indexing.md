# MongoDB Indexing Lab 🚀

### Learning Indexing by Comparing COLLSCAN vs IXSCAN

---

# Goal

Understand:

* What indexing is
* Why indexing is used
* How MongoDB behaves without indexing
* How MongoDB behaves with indexing
* How to read `.explain("executionStats")`
* What changes after creating an index

---

# Step 1: Create Database

```js
use ecomDb
```

### What Happens?

MongoDB switches to:

```txt
ecomDb
```

If the database doesn't exist, MongoDB creates it automatically when data is inserted.

---

# Step 2: Insert Product Data

```js
db.products.insertMany([
{
  name: "iPhone 15",
  category: "Mobile",
  brand: "Apple",
  price: 79999,
  stock: 20
},
{
  name: "Galaxy S24",
  category: "Mobile",
  brand: "Samsung",
  price: 74999,
  stock: 15
},
{
  name: "MacBook Air",
  category: "Laptop",
  brand: "Apple",
  price: 99999,
  stock: 10
},
{
  name: "ThinkPad X1",
  category: "Laptop",
  brand: "Lenovo",
  price: 89999,
  stock: 12
},
{
  name: "AirPods Pro",
  category: "Accessories",
  brand: "Apple",
  price: 24999,
  stock: 50
}
])
```

### What Happens?

MongoDB inserts:

```txt
5 Product Documents
```

into:

```txt
products collection
```

---

# Step 3: Verify Data

```js
db.products.find().limit(1)
```

Output:

```js
{
  name: "iPhone 15",
  category: "Mobile",
  brand: "Apple",
  price: 79999,
  stock: 20
}
```

### Purpose

Check whether data exists.

---

# Step 4: Find Lenovo Product

```js
db.products.find({
  brand: "Lenovo"
})
```

Output:

```js
{
  name: "ThinkPad X1",
  brand: "Lenovo"
}
```

### What MongoDB Does Internally?

Without an index:

```txt
Check Product 1
Check Product 2
Check Product 3
Check Product 4 ← Found Lenovo
Check Product 5
```

MongoDB still scans the entire collection.

---

# Step 5: Verify Query Performance

```js
db.products.find({
  brand: "Apple"
}).explain("executionStats")
```

---

# Important Output

```txt
winningPlan:
  COLLSCAN
```

---

# What Does COLLSCAN Mean?

COLLSCAN = Collection Scan

MongoDB checks:

```txt
Document 1
Document 2
Document 3
Document 4
Document 5
```

One by one.

---

# Visualization

Without Index:

```txt
Apple?
 ↓
[Product 1] ✓

Apple?
 ↓
[Product 2] ✗

Apple?
 ↓
[Product 3] ✓

Apple?
 ↓
[Product 4] ✗

Apple?
 ↓
[Product 5] ✓
```

MongoDB checked:

```txt
5 Documents
```

---

# Important Metrics

```txt
nReturned: 3
```

Means:

```txt
3 Apple Products Found
```

---

```txt
totalDocsExamined: 5
```

Means:

```txt
MongoDB Checked All 5 Documents
```

---

```txt
totalKeysExamined: 0
```

Means:

```txt
No Index Exists
```

---

# Summary

```txt
Returned = 3
Examined = 5
```

MongoDB worked harder than necessary.

---

# Step 6: Create Index

```js
db.products.createIndex({
  brand: 1
})
```

Output:

```txt
brand_1
```

---

# What Actually Happens?

MongoDB creates:

```txt
Apple   → Product 1
Apple   → Product 3
Apple   → Product 5

Samsung → Product 2

Lenovo  → Product 4
```

This structure is stored separately from the collection.

---

# Visualization

Collection:

```txt
Product 1
Product 2
Product 3
Product 4
Product 5
```

Index:

```txt
Apple
  ↓
  Product 1
  Product 3
  Product 5

Lenovo
  ↓
  Product 4

Samsung
  ↓
  Product 2
```

---

# Step 7: Verify Index Exists

```js
db.products.getIndexes()
```

Output:

```txt
_id_
brand_1
```

---

# Meaning

MongoDB now has:

```txt
Default Index:
_id_

Custom Index:
brand_1
```

---

# Step 8: Run Same Query Again

```js
db.products.find({
  brand: "Apple"
}).explain("executionStats")
```

---

# Important Output

```txt
winningPlan:
  FETCH
    IXSCAN
```

---

# What is IXSCAN?

IXSCAN = Index Scan

MongoDB uses:

```txt
brand_1
```

instead of scanning every document.

---

# Visualization

Before:

```txt
Product 1
Product 2
Product 3
Product 4
Product 5
```

After:

```txt
brand_1
 ↓
Apple
 ↓
Product 1
Product 3
Product 5
```

MongoDB jumps directly.

---

# Understanding FETCH

Output:

```txt
FETCH
```

Meaning:

```txt
Index tells MongoDB
where documents are.

FETCH retrieves actual documents.
```

Flow:

```txt
IXSCAN
 ↓
FETCH
 ↓
Return Documents
```

---

# Important Metrics

---

## nReturned

```txt
3
```

Means:

```txt
3 Apple Products Returned
```

---

## totalKeysExamined

```txt
3
```

Means:

```txt
MongoDB checked 3 index entries.
```

---

## totalDocsExamined

```txt
3
```

Means:

```txt
MongoDB fetched only
3 matching documents.
```

---

# Biggest Difference

Without Index:

```txt
totalDocsExamined = 5
```

With Index:

```txt
totalDocsExamined = 3
```

MongoDB touched fewer documents.

---

# Visual Comparison

## Without Index

```txt
Query
 ↓
COLLSCAN
 ↓
Check Product 1
Check Product 2
Check Product 3
Check Product 4
Check Product 5
 ↓
Return Apple Products
```

---

## With Index

```txt
Query
 ↓
IXSCAN
 ↓
brand_1 Index
 ↓
Apple Entries
 ↓
FETCH
 ↓
Return Apple Products
```

---

# Why Difference Looks Small?

Because:

```txt
Only 5 Documents Exist
```

In real applications:

```txt
5 Million Documents
```

Without Index:

```txt
totalDocsExamined:
5000000
```

With Index:

```txt
totalDocsExamined:
3
```

Huge difference.

---

# What Should You Focus On?

Whenever using:

```js
.explain("executionStats")
```

Check:

---

## 1. winningPlan

Bad:

```txt
COLLSCAN
```

Good:

```txt
IXSCAN
```

---

## 2. totalDocsExamined

Bad:

```txt
100000
```

Good:

```txt
10
```

---

## 3. totalKeysExamined

Shows:

```txt
How many index entries MongoDB checked
```

---

## 4. nReturned

Shows:

```txt
How many documents were returned
```

---

# Real Interview Questions

### What is COLLSCAN?

> Collection Scan. MongoDB scans every document in a collection.

---

### What is IXSCAN?

> Index Scan. MongoDB uses an index to locate matching documents quickly.

---

### Why Did totalDocsExamined Drop?

Because MongoDB no longer checks every document.

It uses the index to jump directly to matching records.

---

### What Does FETCH Mean?

MongoDB first finds matching entries in the index (IXSCAN), then fetches the actual documents from the collection.

---

# Golden Rule ⭐

```txt
COLLSCAN = Search Every Document

IXSCAN = Search The Index First
```

The easiest way to identify a good query:

```txt
Look for IXSCAN
Look for Low totalDocsExamined
Avoid COLLSCAN whenever possible
```

That's exactly how backend developers verify whether an index is actually being used in production.
