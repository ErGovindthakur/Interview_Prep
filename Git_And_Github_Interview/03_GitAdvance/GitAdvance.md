# 🚀 Git & GitHub Mastery — Part 3 (Advanced)

## 🎯 Goal

Master advanced Git concepts used in real-world development:

* Clean history
* Undo mistakes
* Handle conflicts
* Work like a pro

---

# 🔀 1. Merge vs Rebase

## 📌 Merge (Safe & Common)

```bash
git merge branch-name
```

👉 Combines branches and keeps history

### 💡 Example:

* main → A → B
* feature → C

After merge:

```text
A → B → (merge commit) → C
```

👉 History becomes messy but safe

---

## 📌 Rebase (Clean History)

```bash
git rebase branch-name
```

👉 Moves your branch on top of another

### 💡 Example:

Before:

```text
main → A → B  
feature → C
```

After rebase:

```text
A → B → C
```

👉 Looks clean like linear history ✨

---

## ⚠️ Rule:

* Use **merge** → in team projects
* Use **rebase** → for clean history (before pushing)

---

# 🧳 2. Git Stash (Temporary Save)

👉 Saves your work without committing

---

## 📌 Save changes:

```bash
git stash
```

---

## 📌 See stash list:

```bash
git stash list
```

---

## 📌 Apply stash:

```bash
git stash apply
```

---

## 📌 Remove stash:

```bash
git stash drop
```

---

### 💡 Example:

You are working → suddenly need to switch branch
👉 Use stash instead of committing incomplete code

---

# 🔁 3. Undo Changes (Very Important 🔥)

---

## 📌 Reset (Dangerous ⚠️)

```bash
git reset --hard HEAD~1
```

👉 Deletes last commit completely

---

## 📌 Soft Reset

```bash
git reset --soft HEAD~1
```

👉 Keeps changes but removes commit

---

## 📌 Revert (Safe)

```bash
git revert commit-id
```

👉 Creates a new commit to undo changes

---

## ⚠️ Rule:

* `reset` → local use only
* `revert` → safe for team projects

---

# ⚔️ 4. Merge Conflicts

👉 Happens when:

* Same file edited in two branches

---

## 📌 Example:

```text
Branch A → index.txt = Hello  
Branch B → index.txt = Hi
```

👉 Git gets confused → conflict ❌

---

## 📌 Fix Steps:

1. Open file
2. You’ll see:

```text
<<<<<<< HEAD
Hello
=======
Hi
>>>>>>> feature
```

3. Edit manually:

```text
Hello Hi
```

4. Then:

```bash
git add .
git commit -m "resolved conflict"
```

---

# 🚫 5. .gitignore

👉 Prevents files from being tracked

---

## 📌 Example:

```text
node_modules/
.env
dist/
```

👉 These files will NOT be committed

---

# 🧠 6. Git Internals (Simple Idea)

👉 Git stores everything as:

* Snapshots (not changes)
* Each commit = full version

---

## 📌 Important Terms:

* **Blob** → file data
* **Commit** → snapshot
* **HEAD** → current position

---

# 🧪 7. Practical (MUST DO 🚀)

---

## 🔥 Task 1: Stash Practice

```bash
git switch -c test-stash
# edit file
git stash
git switch main
git switch test-stash
git stash apply
```

---

## 🔥 Task 2: Reset Practice

```bash
git commit -m "test commit"
git reset --soft HEAD~1
```

---

## 🔥 Task 3: Conflict Practice

1. Create branch:

```bash
git switch -c conflict-branch
```

2. Edit same file differently in:

* main
* conflict-branch

3. Merge:

```bash
git merge conflict-branch
```

👉 Resolve conflict manually

---

## 🔥 Task 4: Clean History with Rebase

```bash
git switch feature1
git rebase main
```

---

# 🎯 Final Summary

* Merge → safe, messy history
* Rebase → clean, risky if misused
* Stash → save work temporarily
* Reset → delete commits
* Revert → safe undo
* Conflict → manual fix
* .gitignore → ignore files

---

# 🏁 You Are Now Ahead of 90% Developers 🚀

👉 You can now:

* Work in teams
* Handle real Git problems
* Maintain clean history

---
