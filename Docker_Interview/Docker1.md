# Docker Interview Questions & Answers 🚀

# Module 1 — Docker Fundamentals

A complete beginner-to-interview focused Docker Q&A guide.

---

# 1. What is Docker?

Docker is a containerization platform that packages applications along with their dependencies into lightweight containers so they run consistently across environments.

---

# 2. Why was Docker created?

Docker was created to solve:
- Environment mismatch
- Dependency conflicts
- "Works on my machine" problem
- Deployment inconsistency

---

# 3. What is Containerization?

Containerization is the process of packaging an application with all required dependencies, libraries, and configurations into a single isolated unit called a container.

---

# 4. What is a Docker Container?

A Docker container is:
- lightweight
- isolated
- portable runtime environment

that runs an application and its dependencies.

---

# 5. What is Docker Image?

A Docker image is a read-only template used to create containers.

Example:
- Ubuntu image
- Node image
- MongoDB image

---

# 6. Difference Between Image and Container?

| Image | Container |
|---|---|
| Blueprint/template | Running instance |
| Read-only | Executable |
| Static | Dynamic |

Example:

```bash
docker run nginx
```

- nginx = image
- running nginx service = container

---

# 7. What is Docker Hub?

Docker Hub is a cloud-based registry where Docker images are stored and shared.

It is similar to GitHub but for Docker images.

Official website:
https://hub.docker.com

---

# 8. What is Docker Engine?

Docker Engine is the core runtime that:
- builds images
- runs containers
- manages networking
- manages volumes

---

# 9. What is Docker Daemon?

Docker Daemon (`dockerd`) is the background service responsible for:
- building containers
- running containers
- managing Docker objects

---

# 10. What is Docker Client?

Docker Client is the CLI where users run commands like:

```bash
docker run nginx
```

It communicates with Docker daemon.

---

# 11. What Problem Does Docker Solve?

Docker solves:
- environment inconsistency
- dependency mismatch
- deployment issues
- scaling challenges
- onboarding complexity

---

# 12. Difference Between Virtual Machine and Docker

| Virtual Machine | Docker |
|---|---|
| Includes full OS | Shares host OS kernel |
| Heavy | Lightweight |
| Slow startup | Fast startup |
| High RAM usage | Low RAM usage |

---

# 13. Why is Docker Lightweight?

Docker containers share the host operating system kernel instead of running a complete operating system.

---

# 14. What is the Docker Lifecycle?

```text
Dockerfile
   ↓
Docker Image
   ↓
Docker Container
   ↓
Running Application
```

---

# 15. What Happens When You Run `docker run`?

Example:

```bash
docker run nginx
```

Docker performs:
1. Checks local image
2. Pulls image if not found
3. Creates container
4. Starts container

---

# 16. What is a Dockerfile?

Dockerfile is a text file containing instructions to build a Docker image.

Example:

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

---

# 17. What Does `FROM` Mean in Dockerfile?

`FROM` specifies the base image.

Example:

```dockerfile
FROM node:18
```

---

# 18. Difference Between CMD and ENTRYPOINT

| CMD | ENTRYPOINT |
|---|---|
| Default command | Fixed executable |
| Can be overridden | Harder to override |

---

# 19. Difference Between COPY and ADD

| COPY | ADD |
|---|---|
| Simple file copy | Advanced copy |
| Recommended mostly | Supports URL & extraction |

Best practice:
Use `COPY` unless extra features are needed.

---

# 20. Difference Between RUN and CMD

| RUN | CMD |
|---|---|
| Executes during image build | Executes during container start |
| Creates image layer | Does not create layer |

---

# 21. What Are Docker Layers?

Each Dockerfile instruction creates a layer.

Example:

```dockerfile
RUN npm install
COPY . .
```

Each creates separate cached layer.

---

# 22. Why Are Docker Layers Important?

Benefits:
- Faster builds
- Better caching
- Reduced image transfer size

---

# 23. What is Docker Cache?

Docker reuses unchanged layers from previous builds to speed up image building.

---

# 24. What is an Alpine Image?

Alpine is a minimal lightweight Linux distribution commonly used in Docker images.

Example:

```dockerfile
FROM node:18-alpine
```

Advantages:
- Smaller size
- Faster download
- Better security

---

# 25. What is Port Mapping in Docker?

Port mapping connects container ports to host machine ports.

Example:

```bash
docker run -p 3000:3000 node-app
```

Syntax:

```text
hostPort:containerPort
```

---

# 26. What is Detached Mode?

Detached mode runs container in background.

Example:

```bash
docker run -d nginx
```

---

# 27. Difference Between `docker run`, `start`, and `exec`

| Command | Purpose |
|---|---|
| docker run | Create + start container |
| docker start | Start existing stopped container |
| docker exec | Run command inside container |

---

# 28. What is `docker ps`?

Shows running containers.

```bash
docker ps
```

---

# 29. What is `docker images`?

Shows downloaded Docker images.

```bash
docker images
```

---

# 30. What is `docker logs`?

Displays container logs.

```bash
docker logs container_id
```

---

# 31. What is `docker exec`?

Runs commands inside running container.

Example:

```bash
docker exec -it container_id bash
```

---

# 32. What is a Docker Volume?

Docker volume stores persistent data outside the container lifecycle.

---

# 33. Why Do We Need Volumes?

Because container data gets deleted when container is removed.

Volumes preserve data.

---

# 34. Difference Between Volume and Bind Mount

| Volume | Bind Mount |
|---|---|
| Managed by Docker | Managed by host OS |
| Better portability | Direct local access |

---

# 35. What is Docker Networking?

Docker networking allows containers to communicate with:
- each other
- external systems
- internet

---

# 36. Types of Docker Networks

Main types:
- bridge
- host
- none

---

# 37. What is Bridge Network?

Default Docker network allowing container-to-container communication.

---

# 38. Why Does `localhost` Sometimes Fail in Containers?

Inside container:
- `localhost` refers to container itself
- not host machine

---

# 39. What are Environment Variables in Docker?

Environment variables store configuration values.

Example:

```bash
docker run -e PORT=5000 app
```

---

# 40. What is Docker Compose?

Docker Compose manages multi-container applications using YAML configuration.

---

# 41. Why Docker Compose is Important?

It simplifies:
- multi-container setup
- networking
- volumes
- service management

---

# 42. What is Multi-Stage Build?

Technique to reduce image size by separating:
- build stage
- production stage

---

# 43. Why Multi-Stage Build Matters?

Benefits:
- smaller image
- improved security
- faster deployment

---

# 44. What is Docker Registry?

Registry stores Docker images.

Examples:
- Docker Hub
- AWS ECR

---

# 45. What is Docker Swarm?

Docker Swarm is Docker's native container orchestration tool.

Used for:
- scaling
- load balancing
- clustering

---

# 46. What is Container Orchestration?

Managing multiple containers automatically.

Includes:
- scaling
- recovery
- networking
- deployment

---

# 47. Docker vs Kubernetes

| Docker | Kubernetes |
|---|---|
| Container platform | Container orchestration |
| Runs containers | Manages containers |

---

# 48. What Happens When a Container Stops?

Container process ends.
Container remains unless removed manually.

---

# 49. How to Reduce Docker Image Size?

Best practices:
- Use Alpine images
- Multi-stage builds
- Remove unnecessary packages
- Optimize layers

---

# 50. Docker Security Best Practices

- Use official images
- Use non-root users
- Keep images updated
- Scan vulnerabilities
- Use minimal images

---

# 51. What is `.dockerignore`?

Similar to `.gitignore`.

Prevents unnecessary files from being copied during build.

Example:

```text
node_modules
.env
.git
```

---

# 52. How Docker Helps CI/CD?

Docker ensures:
- consistent builds
- portable deployments
- faster testing
- environment consistency

---

# 53. Explain Docker Architecture

Main components:
- Docker Client
- Docker Daemon
- Docker Registry
- Docker Engine

Flow:

```text
User
 ↓
Docker Client
 ↓
Docker Daemon
 ↓
Docker Registry
 ↓
Containers
```

---

# 54. What is the Difference Between Stateless and Stateful Containers?

| Stateless | Stateful |
|---|---|
| No persistent data | Persistent data required |
| Easier scaling | Needs storage management |

Example:
- Stateless → frontend app
- Stateful → database

---

# 55. How Would You Dockerize a MERN Stack App?

Basic steps:
1. Create Dockerfile for frontend
2. Create Dockerfile for backend
3. Use MongoDB container
4. Create docker-compose.yml
5. Configure networking & volumes

---

# 56. Explain Real Production Docker Setup

Typical setup:
- Nginx reverse proxy
- Frontend container
- Backend container
- Database container
- Redis container
- CI/CD pipeline
- Monitoring

---

# 57. How Do You Debug a Crashed Container?

Commands:

```bash
docker logs container_id
docker ps -a
docker inspect container_id
docker exec -it container_id bash
```

---

# 58. What is the Difference Between `EXPOSE` and `-p`?

| EXPOSE | -p |
|---|---|
| Documentation | Actual port mapping |
| Dockerfile instruction | Runtime configuration |

---

# 59. What is Docker Compose File?

YAML file defining:
- services
- networks
- volumes

Example:

```yaml
version: "3"

services:
  backend:
    build: .
    ports:
      - "5000:5000"
```

---

# 60. Why Companies Use Docker?

Benefits:
- portability
- scalability
- consistency
- faster deployment
- microservices support
- CI/CD integration

---

# Quick Revision One-Liners 🚀

| Question | One-Liner Answer |
|---|---|
| What is Docker? | Containerization platform |
| What is Container? | Isolated runtime environment |
| What is Image? | Blueprint for container |
| VM vs Docker? | Docker shares OS kernel |
| CMD vs ENTRYPOINT? | Default vs fixed command |
| COPY vs ADD? | Simple vs advanced copy |
| RUN vs CMD? | Build-time vs runtime |
| Docker Compose? | Multi-container management |
| Volume? | Persistent storage |
| Alpine? | Lightweight Linux image |

---

# End of Module 1 🚀