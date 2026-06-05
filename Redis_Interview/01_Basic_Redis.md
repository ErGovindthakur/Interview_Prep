# Redis Interview Notes 🚀

## 1. What is Redis?

### Answer

Redis (Remote Dictionary Server) is an open-source, in-memory NoSQL database used for:

* Caching
* Session Management
* Real-time Analytics
* Message Brokering

Since data is stored in RAM, Redis is extremely fast compared to traditional databases.

---

## 2. Why is Redis Faster Than MongoDB/MySQL?

### Answer

Redis stores data in RAM, while databases like MongoDB and MySQL primarily store data on disk.

Accessing RAM is much faster than reading from disk, making Redis ideal for high-speed operations.

### Interview One-Liner

> Redis is faster because it stores data in memory (RAM), whereas traditional databases store data on disk.

---

## 3. What is Caching?

### Answer

Caching is the process of storing frequently accessed data in a fast storage layer so future requests can be served quickly without repeatedly hitting the database or external APIs.

### Example

```txt
First Request  -> Database
Second Request -> Redis Cache
```

---

## 4. What is Cache Hit and Cache Miss?

### Cache Hit

Requested data is found in Redis.

```txt
Client → Redis → Response
```

### Cache Miss

Requested data is not found in Redis.

The application fetches data from the database/API and stores it in Redis.

```txt
Client → Redis ❌ → Database → Redis → Response
```

### Interview One-Liner

> Cache Hit means data is available in Redis, while Cache Miss means data must be fetched from the original source.

---

## 5. Why Use Redis If We Already Have a Database?

### Answer

Databases are designed for permanent storage, while Redis is designed for speed.

Redis reduces database load and improves application performance by serving frequently requested data quickly.

### Interview One-Liner

> The database is the source of truth, and Redis acts as a high-speed caching layer.

---

## 6. What Data Types Does Redis Support?

### Answer

Redis supports multiple data structures:

* String
* List
* Hash
* Set
* Sorted Set

### Example

```bash
SET name "Govind"

HSET user name "Govind" age 24
```

---

## 7. What Happens If Redis Server Crashes?

### Answer

Since Redis stores data in memory, data can be lost if persistence is not enabled.

Redis provides persistence mechanisms such as:

* RDB Snapshots
* AOF (Append Only File)

These help Redis recover data after a restart.

### Interview One-Liner

> Redis stores data in RAM, but persistence mechanisms allow recovery after crashes.

---

## 8. What is TTL in Redis?

TTL = Time To Live

### Answer

TTL defines how long a key should exist before Redis automatically removes it.

### Example

```bash
SET posts data EX 60
```

Means:

```txt
Store for 60 seconds
Delete automatically after 60 seconds
```

### Common Use Cases

* OTPs
* Session Tokens
* Cached API Responses

---

## 9. What is the Difference Between Redis and MongoDB?

| Feature     | Redis              | MongoDB           |
| ----------- | ------------------ | ----------------- |
| Type        | NoSQL In-Memory DB | NoSQL Document DB |
| Storage     | RAM                | Disk              |
| Speed       | Extremely Fast     | Fast              |
| Persistence | Optional           | Default           |
| Main Use    | Caching            | Permanent Storage |

### Interview One-Liner

> MongoDB is usually the primary database, while Redis acts as a high-speed caching layer.

---

## 10. What Are Common Redis Use Cases?

### Answer

Redis is commonly used for:

* API Caching
* Session Storage
* OTP Storage
* Rate Limiting
* Real-Time Chat Applications
* Leaderboards
* Queue Systems

### Example

```txt
Instagram Post
      ↓
Store in Redis
      ↓
Millions of users get data quickly
```

---

# Bonus Question ⭐

## Why Do We Use JSON.stringify() and JSON.parse() with Redis?

### Answer

Redis stores data as strings.

Before storing JavaScript objects, we convert them into strings using `JSON.stringify()`.

When retrieving data, we convert the string back into a JavaScript object using `JSON.parse()`.

### Example

```js
await redis.set(
  "user",
  JSON.stringify(user)
);

const user = JSON.parse(
  await redis.get("user")
);
```

### Interview One-Liner

> Redis stores strings, so we use JSON.stringify() before storing objects and JSON.parse() after retrieving them.

---

# 30-Second Redis Interview Introduction

> Redis is an in-memory NoSQL database mainly used for caching and high-speed data access. It helps reduce database load by storing frequently accessed data in RAM. Common Redis concepts include cache hits, cache misses, TTL, persistence, and data structures like strings, hashes, and lists. In production systems, Redis is typically used as a fast caching layer while databases like MongoDB or MySQL remain the source of truth.

---

# Golden Interview Line ⭐

> Redis is not usually the source of truth. MongoDB/MySQL stores the actual data, while Redis acts as an accelerator that makes applications faster.
