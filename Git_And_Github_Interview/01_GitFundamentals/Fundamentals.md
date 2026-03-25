# 🚀 Git & GitHub Mastery — Part 1 (Basics)

## 🎯 Goal

Understand:

* What Git is
* Why we use it
* Basic commands
* Do your first practical

---

# 📌 1. What is Version Control?

👉 Version Control means:

> Tracking changes in your code over time.

### 💡 Example:

Imagine you are writing code:

* Day 1 → Working fine ✅
* Day 2 → You added new feature → Code broke ❌

Without version control → You're stuck 😭
With version control → You can go back to Day 1 version easily ✅

---

# 📌 2. What is Git?

👉 Git is a **tool/software** that:

* Tracks changes in your files
* Saves history of your code
* Helps you go back to previous versions

### 💡 Simple line:

> Git = Time machine for your code ⏳

---

# 📌 3. What is GitHub?

👉 GitHub is a **website/platform** that:

* Stores your Git projects online
* Helps you share code
* Used for collaboration (team work)

### 💡 Example:

* Git → works on your laptop 💻
* GitHub → stores code on internet 🌐

---

# 📌 4. Git vs GitHub (Important)

| Feature | Git                 | GitHub             |
| ------- | ------------------- | ------------------ |
| Type    | Tool                | Platform           |
| Works   | Local (your system) | Cloud (online)     |
| Use     | Track code changes  | Store & share code |

---

# ⚙️ 5. Installation & Setup

## ✅ Check Git installed:

```bash
git --version
```

## ✅ Set your identity (IMPORTANT):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

# 🔥 6. Basic Git Commands

---

## 📌 1. Initialize Git Repo

```bash
git init
```

👉 Creates `.git` folder (Git starts tracking your project)

---

## 📌 2. Check Status

```bash
git status
```

👉 Shows:

* Untracked files
* Modified files
* Staged files

---

## 📌 3. Add Files (Staging)

```bash
git add filename
```

OR

```bash
git add .
```

👉 Moves files to **staging area**

---

## 📌 4. Commit (Save Snapshot)

```bash
git commit -m "your message"
```

👉 Saves your code version

---

## 📌 5. Check History

```bash
git log
```

👉 Shows all commits

---

# 🧠 Important Concept (Must Understand)

## 🔁 Git Flow:

```
Working Directory → Staging Area → Repository
```

### 💡 Meaning:

1. You write code → (Working)
2. `git add` → (Staging)
3. `git commit` → (Saved forever)

---

# 🧪 7. Practical — Your First Git Project

Follow step-by-step:

---

## 🔹 Step 1: Create Folder

```bash
mkdir git-practice
cd git-practice
```

---

## 🔹 Step 2: Initialize Git

```bash
git init
```

---

## 🔹 Step 3: Create File

```bash
touch index.txt
```

Add some text inside:

```
Hello Git
```

---

## 🔹 Step 4: Check Status

```bash
git status
```

👉 Output:

* File is **untracked**

---

## 🔹 Step 5: Add File

```bash
git add index.txt
```

---

## 🔹 Step 6: Check Again

```bash
git status
```

👉 Output:

* File is **staged**

---

## 🔹 Step 7: Commit

```bash
git commit -m "first commit"
```

---

## 🔹 Step 8: Check History

```bash
git log
```

👉 Shows your commit

---

# 🎯 Final Summary

* Git tracks your code history
* GitHub stores it online
* `git init` → start project
* `git add` → prepare changes
* `git commit` → save changes
* `git log` → see history

---

# 🚀 Next Step

👉 After this, you’ll learn:

* Branching
* GitHub connection
* Real developer workflow

---
