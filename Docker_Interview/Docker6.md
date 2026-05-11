# Module 6 — Docker Networking 🚀
# Complete Essential Notes + Practical + Interview Concepts

---

# 1. Why Docker Networking is Needed?

Modern applications use multiple services:

```text
Frontend
Backend
MongoDB
Redis
PostgreSQL
```

All services must communicate.

Docker networking makes this possible.

---

# 2. Important Understanding

Every Docker container gets:
- isolated environment
- private IP address
- separate network stack

Meaning:
containers behave like mini systems.

---

# 3. Default Docker Networks

Command:

```bash
docker network ls
```

---

# Main Networks

| Network | Purpose |
|---|---|
| bridge | Default communication network |
| host | Uses host machine network |
| none | No networking |

---

# 4. Bridge Network 🔥

Default Docker network.

Allows containers to communicate.

---

# Visualization

```text
Container A
    ↓
Bridge Network
    ↓
Container B
```

---

# 5. Create Custom Network

```bash
docker network create mynetwork
```

---

# Purpose

Creates isolated custom Docker network.

---

# Why Custom Networks Are Important?

Benefits:
- service isolation
- cleaner architecture
- service discovery
- production best practice

---

# 6. Check Networks

```bash
docker network ls
```

---

# Your Output

```text
mynetwork
```

was successfully created.

---

# 7. Run MongoDB in Network

```bash
docker run -d --name mongodb --network mynetwork mongo
```

---

# Breakdown

| Part | Meaning |
|---|---|
| --network mynetwork | Attach container to network |
| mongodb | Container name |
| mongo | Image |

---

# Important Error You Faced 🔥

```text
container name already in use
```

---

# Why Error Happened?

Because container named:
```text
mongodb
```

already existed.

Docker container names must be unique.

---

# Correct Solution

```bash
docker rm -f mongodb
```

Then rerun container.

---

# 8. Run Redis in Same Network

```bash
docker run -d --name redisdb --network mynetwork redis
```

---

# Result

Now:
- MongoDB
- Redis

both exist inside same Docker network.

---

# 9. Ubuntu Test Container

```bash
docker run -it --name ubuntu-test --network mynetwork ubuntu bash
```

---

# Purpose

Used Ubuntu container for networking testing.

---

# 10. Install Ping Tool

```bash
apt install iputils-ping -y
```

---

# Why Needed?

Minimal Docker images usually do NOT include debugging tools.

---

# 11. Docker DNS 🔥

MOST IMPORTANT CONCEPT.

Docker automatically provides:
# internal DNS resolution

Meaning:
containers communicate using container names.

---

# Example

Inside Ubuntu container:

```bash
ping mongodb
```

worked successfully.

---

# Your Important Output 🔥

```text
PING mongodb (172.19.0.2)
```

Meaning:
Docker resolved:

```text
mongodb
```

→ actual container IP address.

---

# THIS is Docker Service Discovery 🔥

---

# 12. Why `localhost` Fails Inside Containers?

MOST ASKED INTERVIEW QUESTION.

Inside container:

```text
localhost = same container itself
```

NOT another container.

---

# WRONG ❌

```env
MONGO_URI=mongodb://localhost:27017
```

---

# CORRECT ✅

```env
MONGO_URI=mongodb://mongodb:27017
```

Because:
```text
mongodb
```

is container hostname.

---

# 13. Container Name = Hostname 🔥

Inside same Docker network:

```text
mongodb
redisdb
backend
frontend
```

all become hostnames.

---

# 14. Docker Service Discovery

Docker automatically maps:

```text
container-name → IP address
```

No manual IP management needed.

---

# 15. Docker Network Inspect

Command:

```bash
docker network inspect mynetwork
```

---

# Purpose

Shows:
- connected containers
- IP addresses
- network configuration

---

# 16. Port Mapping vs Docker Network 🔥

VERY IMPORTANT DIFFERENCE.

---

# Port Mapping

Example:

```bash
-p 5000:5000
```

Used for:

```text
Browser ↔ Container
```

---

# Docker Network

Used for:

```text
Container ↔ Container
```

---

# 17. Real MERN Architecture 🚀

```text
Frontend Container
        ↓
Backend Container
        ↓
MongoDB Container
        ↓
Redis Container
```

All communicate using Docker networks.

---

# 18. Real MongoDB Connection String

Correct Docker URI:

```env
MONGO_URI=mongodb://mongodb:27017/mydb
```

---

# Real Redis Connection

```env
REDIS_URL=redis://redisdb:6379
```

---

# 19. `host` Network

Container directly uses host machine network.

Example:

```bash
docker run --network host nginx
```

---

# Important

Less isolation.
Mostly Linux use cases.

---

# 20. `none` Network

No network access.

Example:

```bash
docker run --network none nginx
```

---

# Used For

- security
- isolation
- restricted containers

---

# Most Asked Interview Questions 🔥

---

# Q1. How Do Containers Communicate?

Using Docker networks.

---

# Q2. What is Bridge Network?

Default Docker network for container communication.

---

# Q3. Why Use Custom Networks?

Better isolation and service discovery.

---

# Q4. Why Does `localhost` Fail in Containers?

Because localhost refers to same container itself.

---

# Q5. How Backend Connects to MongoDB in Docker?

Using container name.

Example:

```env
mongodb://mongodb:27017
```

---

# Q6. What is Docker DNS?

Automatic container-name → IP resolution.

---

# Q7. Difference Between Port Mapping and Docker Network?

| Port Mapping | Docker Network |
|---|---|
| Browser ↔ Container | Container ↔ Container |

---

# Q8. What is Docker Service Discovery?

Containers communicating using names instead of IPs.

---

# Q9. Why Networking is Important in Docker?

Modern applications use multiple communicating services.

---

# Q10. What is `host` Network?

Container shares host machine network.

---

# Biggest Achievement From Module 6 🚀

You now understand:
- Docker networking
- custom bridge networks
- container communication
- Docker DNS
- service discovery
- localhost confusion
- real backend architecture
- MongoDB + Redis communication

This is REAL production-level backend Docker knowledge.

---

# End of Module 6 🚀