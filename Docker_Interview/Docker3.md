# Module 3 — Docker Images Deep Dive 🚀
# Essential Concepts Summary

---

# 1. What is a Docker Image?

Docker image is:
- a blueprint
- read-only template
- used to create containers

Example:

```text
nginx
redis
mongo
```

---

# 2. Image vs Container

| Image | Container |
|---|---|
| Blueprint/template | Running instance |
| Read-only | Writable |
| Static | Running process |

Example:

```bash
docker run nginx
```

- nginx → image
- running nginx app → container

---

# 3. Docker Image Structure

```text
image-name:tag
```

Examples:

```text
node:18
mongo:6
redis:latest
```

---

# 4. What is a Tag?

Tag represents:
- version
- variant

Example:

```text
node:18
```

- image = node
- version = 18

---

# 5. What is `latest`?

Default Docker tag.

Example:

```bash
docker pull redis
```

actually means:

```bash
docker pull redis:latest
```

---

# 6. `docker pull`

```bash
docker pull redis
```

Purpose:
Downloads image from Docker Hub.

---

# 7. `docker images`

```bash
docker images
```

Purpose:
Shows all local Docker images.

Includes:
- repository
- tag
- image id
- size

---

# 8. Image ID

Every Docker image has unique ID.

Example:

```text
5dfe511714e1
```

Docker internally manages images using IDs.

---

# 9. Docker Tagging

```bash
docker tag nginx mynginx:v1
```

Purpose:
Creates new tag/name for existing image.

---

# Important Observation You Made 🔥

```text
mynginx:v1   → 5dfe511714e1
nginx:latest → 5dfe511714e1
```

SAME IMAGE ID.

Meaning:
tagging does NOT duplicate image.

It only creates another reference/name.

---

# 10. `docker rmi`

```bash
docker rmi mynginx:v1
```

Purpose:
Removes image tag/reference.

---

# Important Observation 🔥

Output:

```text
Untagged: mynginx:v1
```

Meaning:
only tag removed,
actual image still exists because:

```text
nginx:latest
```

still points to same IMAGE ID.

---

# 11. Dangling Images

Example:

```text
<none> <none>
```

Meaning:
unused/intermediate images.

Usually created during:
- rebuilds
- retagging
- failed builds

---

# 12. `docker image prune`

```bash
docker image prune
```

Purpose:
Removes dangling/unused images.

---

# Your Result

```text
Deleted Images:
796b61cdb5c8...
```

You successfully cleaned unused image.

---

# 13. Docker Images are Layered 🔥

MOST IMPORTANT CONCEPT.

Docker images are built using layers.

Each Dockerfile instruction creates layer.

Example:

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
```

Each line = separate layer.

---

# 14. Why Layers Matter?

Benefits:
- faster builds
- caching
- optimization
- reduced downloads

---

# 15. Docker Cache

Docker reuses unchanged layers during rebuild.

This makes Docker builds FAST.

---

# Example

GOOD optimization:

```dockerfile
COPY package.json .
RUN npm install

COPY . .
```

Why?

Because:
- npm install layer gets cached
- source code changes won't reinstall packages

SUPER IMPORTANT interview concept.

---

# 16. Base Image

Starting image in Dockerfile.

Example:

```dockerfile
FROM node:18
```

---

# 17. Alpine Images 🔥

Example:

```bash
docker pull node:18-alpine
```

Alpine = lightweight Linux distro.

---

# Why Alpine is Important?

Benefits:
- smaller size
- faster deployment
- less storage
- improved security

---

# Your Important Observation 🔥

```text
node:18-alpine → 127MB
```

Very small compared to normal Node image.

This is REAL industry optimization.

---

# 18. Why Smaller Images Matter?

Benefits:
- faster CI/CD
- faster deployments
- less bandwidth
- reduced attack surface
- lower storage cost

---

# 19. Read-Only Images

Docker images are read-only.

When container starts:
Docker adds writable layer above image.

---

# Visualization

```text
Docker Image (read-only)
        +
Writable Container Layer
        ↓
Running Container
```

---

# 20. Docker Build Process

When building image:

```bash
docker build -t myapp .
```

Docker:
1. Reads Dockerfile
2. Creates layers
3. Caches layers
4. Builds image

---

# Most Important Interview Questions 🔥

---

# Q1. What is Docker Image?

Read-only template used to create containers.

---

# Q2. What are Docker Layers?

Each Dockerfile instruction creates separate cached layer.

---

# Q3. Why Docker Builds Are Fast?

Because Docker caches unchanged layers.

---

# Q4. Why Alpine Images Are Popular?

Because they are lightweight and secure.

---

# Q5. What are Dangling Images?

Unused/intermediate images.

---

# Q6. Difference Between Image and Container?

| Image | Container |
|---|---|
| Blueprint | Running instance |

---

# Q7. Why Smaller Images Are Better?

- faster deployment
- better security
- less storage

---

# Q8. What is Tagging?

Creating another name/version reference for same image.

---

# Biggest Understanding From This Module 🚀

You now understand:
- how Docker images work internally
- image tagging
- layer architecture
- caching
- image optimization
- Alpine images
- dangling images
- Docker storage logic

This is REAL interview-level Docker knowledge.

---

# End of Module 3 🚀