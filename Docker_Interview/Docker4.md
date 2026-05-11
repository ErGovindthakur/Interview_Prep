# Module 4 — Dockerfile Mastery 🚀
# Complete Notes + Practical + Interview Concepts

---

# 1. What is a Dockerfile?

Dockerfile is:
- a text file
- containing instructions
- to build Docker images

Simple definition:

> Dockerfile tells Docker how to create an image.

---

# Docker Workflow

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
    ↓
docker run
    ↓
Container
```

---

# 2. Project Setup

We created a Node.js + Express application.

---

# Initialize Project

```bash
npm init -y
```

Purpose:
Creates `package.json`.

---

# Install Express

```bash
npm install express
```

Purpose:
Installs Express dependency.

---

# 3. `server.js`

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker is awesome 🚀");
});

app.listen(5000, () => {
  console.log("server is running at port http://localhost:5000");
});
```

---

# Purpose

Creates simple Express server running on:
```text
port 5000
```

---

# 4. Dockerfile

Created file named:

```text
Dockerfile
```

NO extension.

---

# Dockerfile Content

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

---

# 5. `FROM`

```dockerfile
FROM node:18-alpine
```

---

# Purpose

Selects base image.

Meaning:
- use Node.js runtime
- alpine version (lightweight Linux)

---

# Important

Every Docker image starts from base image.

---

# Interview Question

## What is Base Image?

Starting point for Docker image.

---

# 6. `WORKDIR`

```dockerfile
WORKDIR /app
```

---

# Purpose

Sets working directory inside container.

Equivalent to:

```bash
cd /app
```

---

# Important

All future commands run inside:
```text
/app
```

---

# 7. First `COPY`

```dockerfile
COPY package*.json ./
```

---

# Purpose

Copies:
```text
package.json
package-lock.json
```

from local machine → container.

---

# Breakdown

```text
Source            Destination
package*.json →   ./
```

---

# Why This is IMPORTANT 🔥

For Docker layer caching.

---

# Optimization Logic

BAD:

```dockerfile
COPY . .
RUN npm install
```

Problem:
Any file change reruns npm install.

---

# GOOD:

```dockerfile
COPY package*.json ./
RUN npm install

COPY . .
```

Now:
- dependency layer gets cached
- faster rebuilds

SUPER IMPORTANT interview concept.

---

# 8. `RUN`

```dockerfile
RUN npm install
```

---

# Purpose

Executes command DURING image build.

---

# Important

`RUN`:
- creates new Docker layer
- installs dependencies into image

---

# 9. Second `COPY`

```dockerfile
COPY . .
```

---

# Purpose

Copies ALL project files into container.

---

# Meaning

```text
Current Folder → Container Folder
```

---

# 10. `EXPOSE`

```dockerfile
EXPOSE 5000
```

---

# Purpose

Documents application port.

---

# IMPORTANT

`EXPOSE` does NOT publish port.

You STILL need:

```bash
-p 5000:5000
```

during container run.

---

# 11. `CMD`

```dockerfile
CMD ["npm", "start"]
```

---

# Purpose

Default startup command for container.

---

# Meaning

When container starts:

```bash
npm start
```

runs automatically.

---

# MOST ASKED INTERVIEW QUESTION 🔥

# Difference Between RUN and CMD

| RUN | CMD |
|---|---|
| Build-time | Runtime |
| Executes during build | Executes during container start |
| Creates layer | Starts app |

---

# 12. Build Docker Image

```bash
docker build -t docker-node-app .
```

---

# Breakdown

---

# A. `docker build`

Builds Docker image from Dockerfile.

---

# B. `-t`

Tags/names image.

---

# C. `docker-node-app`

Image name.

---

# D. `.`

Current directory.

Docker searches Dockerfile here.

---

# Internal Build Flow

```text
Dockerfile
    ↓
Read instructions
    ↓
Create layers
    ↓
Build image
```

---

# 13. Check Images

```bash
docker images
```

Purpose:
Shows all local images.

---

# 14. Run Container

```bash
docker run -d -p 5000:5000 --name myapp docker-node-app
```

---

# Breakdown

| Part | Meaning |
|---|---|
| docker run | Create + start container |
| -d | Detached mode |
| -p 5000:5000 | Port mapping |
| --name myapp | Custom container name |
| docker-node-app | Image name |

---

# Port Mapping

```text
Host Port → Container Port
5000      → 5000
```

---

# 15. Browser Access

```text
http://localhost:5000
```

Purpose:
Access Express server running inside container.

---

# 16. `docker logs myapp`

```bash
docker logs myapp
```

---

# Purpose

Shows container logs/output.

---

# Your Logs Explained

```text
[nodemon] starting `node server.js`
```

Meaning:
Nodemon started Node server.

---

```text
server is running at port http://localhost:5000
```

Meaning:
Express app successfully started inside container.

---

# 17. `docker stop myapp`

```bash
docker stop myapp
```

---

# Purpose

Stops running container.

Container still exists.

---

# 18. `docker rm myapp`

```bash
docker rm myapp
```

---

# Purpose

Deletes stopped container.

---

# 19. `docker rmi docker-node-app`

```bash
docker rmi docker-node-app
```

---

# Purpose

Deletes Docker image.

---

# Important

Container must be removed first.

Otherwise image cannot be deleted.

---

# Core Concepts Learned 🚀

---

# A. Dockerfile

Instructions to build Docker image.

---

# B. Base Image

Starting image.

Example:

```dockerfile
FROM node:18-alpine
```

---

# C. Docker Layers

Each Dockerfile instruction creates separate layer.

---

# D. Docker Cache

Docker reuses unchanged layers.

Makes builds FAST.

---

# E. Layer Optimization

Copy package.json first for caching.

---

# F. Build vs Runtime

| Build Time | Runtime |
|---|---|
| RUN | CMD |

---

# G. Image vs Container

| Image | Container |
|---|---|
| Blueprint | Running instance |

---

# H. Alpine Images

Lightweight Linux images.

Benefits:
- smaller size
- faster deployment
- better security

---

# Most Asked Interview Questions 🔥

---

# Q1. What is Dockerfile?

Text file containing instructions to build Docker image.

---

# Q2. What is `FROM`?

Specifies base image.

---

# Q3. What is `WORKDIR`?

Sets working directory inside container.

---

# Q4. What is `COPY`?

Copies files from host machine → container.

---

# Q5. What is `RUN`?

Executes command during image build.

---

# Q6. What is `CMD`?

Default startup command for container.

---

# Q7. Difference Between RUN and CMD?

| RUN | CMD |
|---|---|
| Build-time | Runtime |

---

# Q8. Why Copy package.json First?

For Docker caching optimization.

---

# Q9. What is `EXPOSE`?

Documents container port.

---

# Q10. What does `docker build -t app .` mean?

Build image named `app` from current directory.

---

# Biggest Achievement From Module 4 🚀

You successfully:
- wrote Dockerfile
- built custom Docker image
- dockerized Express app
- ran application inside container
- understood Docker layers
- understood caching
- understood build process

This is REAL Docker development knowledge.

---

# End of Module 4 🚀