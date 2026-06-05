# Advanced Redis Interview Notes 🚀

These topics are commonly asked in backend interviews and help distinguish developers who have worked with Redis in real-world applications.

---

# 1. Rate Limiting using Redis

## Problem

Imagine someone hits your login API:

```txt
1000 requests per second
```

Your server may crash.

## Solution

Allow only:

```txt
5 requests per minute
```

per user/IP.

Redis keeps count:

```txt
User IP: 123
Count: 1
Count: 2
Count: 3
...
Count: 6 ❌ Block
```

## Real-World Example

ATM Machine:

```txt
3 wrong PIN attempts
↓
Card Blocked
```

Redis remembers how many attempts happened.

## Interview Answer

> Rate limiting prevents users from making too many requests in a short time. Redis is commonly used because it can quickly count requests and automatically expire counters.

---

# 2. Session Storage using Redis

## Problem

User logs in.

How do we know they're still logged in?

### Without Redis

```txt
Store session in application memory
```

Server restarts:

```txt
All users logged out ❌
```

### With Redis

```txt
User logs in
↓
Session stored in Redis
↓
Session ID sent in cookie
```

Next request:

```txt
Cookie
↓
Redis
↓
User verified
```

## Real-World Example

Hotel Check-In

```txt
Reception stores your booking details.
```

Every time you show your room card:

```txt
Room Card
↓
Reception checks records
↓
Verified
```

Redis = Reception Records

## Interview Answer

> Redis stores user sessions centrally so users remain logged in even if the application server restarts.

---

# 3. Pub/Sub in Redis

Pub = Publisher

Sub = Subscriber

## Example

WhatsApp Group

```txt
You send message
↓
Everyone receives it
```

Redis Flow:

```txt
Publisher
↓
Channel
↓
Subscribers
```

Example:

```txt
Stock Price Changed
↓
Redis Channel
↓
Mobile App
↓
Dashboard
↓
Notification Service
```

All receive updates instantly.

## Interview Answer

> Redis Pub/Sub allows applications to communicate in real time using channels where publishers send messages and subscribers receive them.

---

# 4. Redis vs Memcached

Both are caching systems.

## Memcached

Simple Key-Value Cache

```txt
name -> Govind
```

## Redis

Supports:

* Strings
* Lists
* Hashes
* Sets
* Sorted Sets
* Pub/Sub
* Streams

Much more powerful.

## Real-World Example

```txt
Memcached  = Basic Calculator
Redis      = Scientific Calculator
```

## Interview Answer

> Memcached is a simple cache, while Redis offers advanced data structures, persistence, Pub/Sub, and many additional features.

---

# 5. Redis Persistence (AOF vs RDB)

A very common interview question.

## RDB (Snapshots)

Snapshot approach.

```txt
Take photo every 5 minutes
```

Example:

```txt
12:00 Photo
12:05 Photo
12:10 Photo
```

Server crashes at:

```txt
12:08
```

Redis restores:

```txt
12:05 Photo
```

Some recent data is lost.

### Real-World Example

```txt
Taking Photos 📸
```

---

## AOF (Append Only File)

Record every operation.

```txt
SET user Govind
SET age 24
SET city Delhi
```

After restart:

```txt
Replay Commands
```

More accurate.

### Real-World Example

```txt
Recording Video 🎥
```

## Interview Answer

> RDB stores snapshots periodically, while AOF logs every write operation. RDB is faster, while AOF provides better durability.

---

# 6. Distributed Caching

## Problem

One Redis server:

```txt
100 Million Users
```

Too much traffic.

## Solution

Use multiple Redis servers.

```txt
Redis-1
Redis-2
Redis-3
Redis-4
```

Data is distributed among them.

## Real-World Example

```txt
One Cashier  = Huge Queue 😭
Four Cashiers = Faster Service 🚀
```

## Interview Answer

> Distributed caching spreads cached data across multiple Redis instances to improve scalability and performance.

---

# 7. Redis Eviction Policies

## Problem

Redis RAM becomes full.

```txt
Memory = 100%
```

What now?

Redis decides what data to remove.

## Common Policy: LRU

Least Recently Used

```txt
Remove oldest unused items
```

## Real-World Example

Closet Full

```txt
Need space
↓
Throw away clothes not worn for years
```

## Interview Answer

> Eviction policies determine which keys Redis removes when memory is full. A common policy is LRU (Least Recently Used).

---

# 8. Leaderboards using Sorted Sets

This is where Redis shines.

## Example

Game Scores:

```txt
Govind = 100
Emma = 250
John = 180
```

Redis automatically sorts:

```txt
1. Emma 250
2. John 180
3. Govind 100
```

## Real-World Examples

* PUBG Rankings
* LeetCode Weekly Contest Rankings
* Gaming Leaderboards

## Interview Answer

> Redis Sorted Sets store values with scores and automatically maintain ranking order, making them ideal for leaderboards.

---

# 9. Redis Streams

Think of Streams as:

```txt
Advanced Queue System
```

## Example

Food Delivery:

```txt
Customer Orders Food
↓
Order Queue
↓
Restaurant
↓
Delivery Partner
```

Messages flow through the stream.

## Real-World Example

Amazon Order Processing:

```txt
Order Created
↓
Payment Service
↓
Inventory Service
↓
Shipping Service
```

Each service processes events.

## Interview Answer

> Redis Streams provide an event log and messaging system for processing data sequentially and reliably.

---

# 10. Redis Cluster & Replication

## Replication

One Master:

```txt
Master
```

Copies data to:

```txt
Replica 1
Replica 2
Replica 3
```

If Master fails:

```txt
Replica Promoted
```

System keeps running.

### Real-World Example

Teacher + Students

```txt
Teacher has original notes
Students copy notes
```

Teacher unavailable?

```txt
Best student becomes teacher
```

---

## Cluster

Not for backup.

Used for scaling.

```txt
Server 1 → Part of Data
Server 2 → Part of Data
Server 3 → Part of Data
```

### Easy Difference

```txt
Replication = Safety 🛡️
Cluster     = Scalability 🚀
```

## Interview Answer

> Replication improves availability and backup, while clustering improves scalability by distributing data across multiple Redis nodes.

---

# Quick Revision Table

| Topic                  | One-Line Answer                     |
| ---------------------- | ----------------------------------- |
| Rate Limiting          | Prevent too many requests           |
| Session Storage        | Store login sessions                |
| Pub/Sub                | Real-time messaging                 |
| Memcached vs Redis     | Redis has more features             |
| AOF vs RDB             | Video vs Photo analogy              |
| Distributed Cache      | Multiple Redis servers              |
| Eviction Policy        | Remove old data when memory is full |
| Sorted Sets            | Leaderboards                        |
| Streams                | Queue/Event processing              |
| Cluster vs Replication | Scaling vs Backup                   |

---

# Golden Interview Line ⭐

> Redis is not usually the source of truth. MongoDB/MySQL stores the actual data, while Redis acts as an accelerator that makes applications faster and more scalable.
