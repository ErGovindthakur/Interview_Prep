# 🚀 Git & GitHub Mastery — Part 2 (Intermediate)

## 🎯 Goal

Learn how developers actually work using:

* Branching
* Merging
* GitHub connection
* Collaboration workflow

---

# 🌿 1. What is Branching?

👉 Branch = Separate version of your code

### 💡 Example:

You are building a website:

* `main` → stable version ✅
* `login-feature` → new feature 🚧

👉 If something breaks in login → main is still safe

---

# 🔥 Create Branch

```bash
git branch branch-name
```

### Example:

```bash
git branch login-feature
```

---

# 🔍 Check Branches

```bash
git branch
```

👉 Current branch will have `*`

---

# 🔄 Switch Branch

### Old way:

```bash
git checkout branch-name
```

### New way (recommended):

```bash
git switch branch-name
```

---

# ⚡ Shortcut (Create + Switch)

```bash
git switch -c branch-name
```

---

# 🧠 Important Concept

👉 Each branch has its **own changes**

---

# 🔀 2. Merging Branches

👉 Merge = Combine changes from one branch to another

---

## 📌 Steps:

### 1. Go to main branch

```bash
git switch main
```

### 2. Merge feature branch

```bash
git merge login-feature
```

---

# 💡 Real Example

* You worked on `login-feature`
* Now it's complete ✅
* Merge into `main`

---

# 🌐 3. Connect Git to GitHub

---

## 📌 Step 1: Create Repo on GitHub

👉 Go to GitHub → Click **New Repository**

* Name: `git-practice`
* Click Create

---

## 📌 Step 2: Connect Local to GitHub

```bash
git remote add origin https://github.com/your-username/repo-name.git
```

---

## 📌 Step 3: Push Code

```bash
git push -u origin main
```

👉 Uploads your code to GitHub

---

# 🔄 4. Pull Changes

```bash
git pull origin main
```

👉 Gets latest code from GitHub

---

# 📥 5. Clone Repository

```bash
git clone https://github.com/username/repo.git
```

👉 Downloads project to your system

---

# 🧠 Real Developer Flow

```text
1. Clone repo
2. Create branch
3. Work on feature
4. Commit changes
5. Push branch
6. Merge into main
```

---

# 🧪 6. Practical (IMPORTANT 🚀)

---

## 🔹 Step 1: Create GitHub Repo

* Go to GitHub
* Create new repo

---

## 🔹 Step 2: Connect Your Project

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 🔹 Step 3: Create New Branch

```bash
git switch -c feature1
```

---

## 🔹 Step 4: Make Changes

* Edit your file (index.txt)
* Add new content

---

## 🔹 Step 5: Add + Commit

```bash
git add .
git commit -m "added feature1"
```

---

## 🔹 Step 6: Push Branch

```bash
git push origin feature1
```

---

## 🔹 Step 7: Merge to Main

```bash
git switch main
git merge feature1
```

---

## 🔹 Step 8: Push Updated Main

```bash
git push origin main
```

---

# 🎯 Final Summary

* Branch = new feature workspace 🌿
* `git switch` = move between branches
* `git merge` = combine changes
* `git push` = upload code
* `git pull` = download updates
* `git clone` = copy repo

---

# 🚀 Next Step

👉 Advanced Git:

* Rebase
* Conflict handling
* Reset / Revert
* Stash

---
