# Docker Core Commands Notes 🚀
# Complete Practical Explanation with Purpose

---

# Practical Feedback ✅

Excellent work.

You successfully:
- Pulled Docker images
- Ran containers
- Used detached mode
- Used port mapping
- Checked logs
- Entered inside container
- Managed container lifecycle

This is REAL Docker usage.

You are no longer at beginner-zero level now.

---

# 1. `docker pull redis`

```bash
docker pull redis
```

---

# Purpose

Downloads Docker image from Docker Hub to your local machine.

---

# What Happened Internally?

Docker:
1. Contacted Docker Hub
2. Downloaded Redis image layers
3. Stored image locally

---

# Important Output

```text
Using default tag: latest
```

Meaning:
Docker automatically used:
```text
redis:latest
```

---

# Interview Point

## What is `latest`?

`latest` is the default Docker image tag.

---

# Docker Image Structure

```text
image-name:tag
```

Example:

```text
redis:latest
node:18
mongo:6
```

---

# 2. `docker run -d --name mynginx -p 8080:80 nginx`

```bash
docker run -d --name mynginx -p 8080:80 nginx
```

MOST IMPORTANT command in Docker 🔥

---

# Full Breakdown

---

# A. `docker run`

Purpose:
Creates + starts a new container.

---

# Internal Workflow

Docker:
1. Checks image locally
2. Pulls image if missing
3. Creates container
4. Starts container

---

# B. `-d`

```bash
-d
```

Meaning:
Detached mode.

Purpose:
Runs container in background.

Without `-d`:
terminal becomes occupied.

---

# C. `--name mynginx`

Purpose:
Assign custom name to container.

Without it:
Docker creates random names like:

```text
happy_turing
focused_newton
```

---

# D. `-p 8080:80`

Purpose:
Port mapping.

Syntax:

```text
HostPort:ContainerPort
```

Meaning:

```text
Your PC Port → Container Port
8080         → 80
```

---

# Why Needed?

Containers are isolated.

Without port mapping:
browser cannot access container app.

---

# E. `nginx`

This is the image name.

Docker uses nginx image to create container.

---

# Result

Nginx web server started inside container.

---

# 3. `docker ps`

```bash
docker ps
```

---

# Purpose

Shows currently running containers.

---

# Your Output Explained

| Column | Meaning |
|---|---|
| CONTAINER ID | Unique container identifier |
| IMAGE | Image used |
| COMMAND | Startup command |
| CREATED | Creation time |
| STATUS | Running/stopped state |
| PORTS | Port mapping |
| NAMES | Container name |

---

# Your Important Output

```text
0.0.0.0:8080->80/tcp
```

Meaning:

```text
Your PC Port 8080
↓
Connected to
↓
Container Port 80
```

---

# 4. Browser Access

```text
http://localhost:8080
```

---

# Purpose

Access nginx server running INSIDE container.

---

# Important Concept

```text
localhost = your machine
```

Docker forwarded:
```text
localhost:8080
↓
container:80
```

---

# 5. `docker logs mynginx`

```bash
docker logs mynginx
```

---

# Purpose

Shows container logs/output.

Useful for:
- debugging
- errors
- monitoring

---

# Your Logs Explained

---

# A. Nginx Startup

```text
Configuration complete; ready for start up
```

Meaning:
Nginx server successfully started.

---

# B. Worker Processes

```text
start worker process
```

Meaning:
Nginx created worker threads to handle requests.

---

# C. Browser Request

```text
GET / HTTP/1.1
```

Meaning:
Your browser requested homepage.

---

# D. 200 Status

```text
200
```

Meaning:
Request successful.

---

# E. Favicon Error

```text
/favicon.ico failed
```

NOT a real problem.

Browser automatically tries to load favicon icon.

Since nginx demo page has no favicon:
404 appeared.

Completely normal.

---

# 6. `docker exec -it mynginx bash`

```bash
docker exec -it mynginx bash
```

VERY IMPORTANT 🔥

---

# Purpose

Enter inside running container terminal.

---

# Breakdown

---

# A. `docker exec`

Runs command inside existing container.

---

# B. `-i`

Interactive mode.

Keeps terminal input open.

---

# C. `-t`

Allocates terminal session.

---

# D. `bash`

Starts bash shell inside container.

---

# Result

You entered Linux environment INSIDE container.

---

# Your Prompt

```text
root@f01b890f8e38:/#
```

Meaning:

| Part | Meaning |
|---|---|
| root | logged-in user |
| f01b890f8e38 | container id |
| / | current directory |

---

# 7. `ls`

```bash
ls
```

---

# Purpose

Lists files/directories inside container.

---

# Important Realization

Container behaves like:
- mini Linux machine
- isolated OS environment

---

# 8. `exit`

```bash
exit
```

---

# Purpose

Exit container terminal.

Container still keeps running.

---

# Important Interview Point

## `exit` does NOT stop container

It only exits shell session.

---

# 9. `docker stop mynginx`

```bash
docker stop mynginx
```

---

# Purpose

Gracefully stops running container.

---

# Container Lifecycle

```text
Created
↓
Running
↓
Stopped
```

---

# Important

Container still exists after stopping.

---

# 10. `docker start mynginx`

```bash
docker start mynginx
```

---

# Purpose

Starts existing stopped container.

---

# Difference

| Command | Meaning |
|---|---|
| docker run | Create + Start |
| docker start | Start existing |

---

# 11. `docker rm -f mynginx`

```bash
docker rm -f mynginx
```

---

# Purpose

Deletes container.

---

# Breakdown

---

# A. `rm`

Remove container.

---

# B. `-f`

Force removal.

Even if container is running.

---

# Important

After removal:
container completely disappears.

---

# Core Docker Lifecycle Diagram

```text
docker pull
      ↓
Docker Image
      ↓
docker run
      ↓
Running Container
      ↓
docker stop
      ↓
Stopped Container
      ↓
docker start
      ↓
Running Again
      ↓
docker rm
      ↓
Deleted
```

---

# Most Important Interview Questions From This Practical 🔥

---

# Q1. Difference Between `run`, `start`, and `exec`

| Command | Meaning |
|---|---|
| run | Create + Start |
| start | Start existing |
| exec | Execute inside running container |

---

# Q2. Why Use Detached Mode?

Runs container in background.

---

# Q3. Why Use Port Mapping?

To expose container application to host machine/browser.

---

# Q4. What Does `8080:80` Mean?

```text
Host Port → Container Port
8080      → 80
```

---

# Q5. Why Can't We Access Container Directly?

Because containers run in isolated network environments.

---

# Q6. What Does `-it` Mean?

| Flag | Meaning |
|---|---|
| -i | Interactive |
| -t | Terminal |

---

# Q7. Does `exit` Stop Container?

No.

It only exits shell session.

---

# Q8. Difference Between Image and Container?

| Image | Container |
|---|---|
| Blueprint | Running instance |

---

# Q9. Why Was Favicon Error Shown?

Browser automatically requested favicon.ico.
Nginx demo page doesn't provide it.

---

# Q10. What Happens Internally During `docker run`?

Docker:
1. Pulls image if missing
2. Creates writable container layer
3. Starts process inside container

---

# Key Industry-Level Understanding 🚀

You just performed:
- image pulling
- container creation
- network exposure
- log inspection
- shell access
- lifecycle management

These are actual day-to-day Docker operations used by developers and DevOps engineers.

---

| Thing        | Meaning                    |
| ------------ | -------------------------- |
| Image        | Blueprint/template         |
| Container    | Running instance           |
| docker pull  | Download image             |
| docker run   | Pull + Create + Start      |
| docker stop  | Stop container             |
| docker start | Restart existing container |
| docker rm    | Delete container           |

# End of Module 2 🚀