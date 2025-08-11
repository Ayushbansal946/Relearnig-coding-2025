# 🚀 Git Commands Reference Guide

<div align="center">

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![Version Control](https://img.shields.io/badge/Version%20Control-Mastered-brightgreen)

**📚 Personal Git Commands Cheat Sheet - From Beginner to Intermediate**

</div>

---

## 📖 About This Reference

This is my personal Git commands reference, organized by learning progress and usage frequency. Each command includes practical examples and explanations based on real-world usage.

---

## ✅ **Commands I've Mastered**

### 🔍 **Repository Status & Information**

| Command | Description | Example Usage |
|---------|-------------|---------------|
| `git status` | Check the status of your working directory and staging area | Shows modified, staged, and untracked files |
| `git log --oneline` | View commit history in compact format | Quick overview of recent commits |

**💡 Pro Tip**: Always check `git status` before making commits to see what changes will be included.

---

### 🏁 **Repository Initialization**

```bash
# Initialize a new Git repository
git init
```
**📝 Explanation**: Creates a new Git repository in the current directory. This is the first command you run when starting a new project.

---

### 📦 **Staging Changes**

| Command | Description | Use Case |
|---------|-------------|----------|
| `git add <file>` | Stage specific file for commit | When you want to commit only certain changes |
| `git add foldername\` | Add all files and folders in the specified folder | Stage entire directory at once |
| `git add .\` | Add all files and folders in the present folder | Stage all changes in current directory |

**💡 Examples**:
```bash
git add README.md                    # Stage single file
git add src\                        # Stage all files in src folder
git add .\                          # Stage everything in current directory
```

---

### 💾 **Committing Changes**

```bash
# Commit with inline message (recommended for short messages)
git commit -m "Add new feature: user authentication"

# Commit using code editor (for longer, detailed messages)
git commit
```

**📝 Best Practices**:
- Use clear, descriptive commit messages
- Follow conventional commit format: `type: description`
- Examples: `feat: add login functionality`, `fix: resolve navigation bug`

---

### 🌿 **Branch Management**

#### **Viewing Branches**
```bash
git branch                          # List all local branches
```

#### **Creating Branches**
```bash
git branch <branch-name>            # Create new branch (doesn't switch to it)
git checkout -b <branch-name>       # Create new branch and switch to it
git switch -c <branch-name>         # Modern alternative to checkout -b
```

#### **Switching Branches**
```bash
git checkout <branch-name>          # Switch to existing branch
git switch <branch-name>            # Modern alternative to checkout
```

#### **Deleting Branches**
```bash
git branch -d <branch-name>         # Delete branch (safe delete)
git branch -D <branch-name>         # Force delete branch
```

**💡 Branch Naming Conventions**:
- `feature/user-auth` - For new features
- `fix/login-bug` - For bug fixes  
- `hotfix/critical-error` - For urgent fixes

---

### 🕰️ **Navigating History**

```bash
git checkout <head~2>               # Move HEAD to 2 commits before current
git checkout <commit_ID>            # Move HEAD to specific commit
```

**⚠️ Important**: These commands put you in "detached HEAD" state. Create a new branch if you want to make changes.

---

### 🔀 **Merging Branches**

```bash
git merge <branch-name>             # Merge specified branch into current branch
```

**📝 Typical Workflow**:
```bash
git checkout main                   # Switch to main branch
git merge feature/new-feature       # Merge feature branch into main
```

---

### 🔍 **Comparing Changes**

```bash
git diff                            # Show unstaged changes
git diff --staged                   # Show staged changes
git diff <branch1> <branch2>        # Compare two branches
```

---

### 💾 **Temporary Storage (Stashing)**

| Command | Description | When to Use |
|---------|-------------|-------------|
| `git stash` | Save current changes temporarily | Switch branches without committing |
| `git stash pop` | Apply most recent stash and remove it from stash list | Restore your work after switching back |
| `git stash list` | Show all available stashes | See what you've stashed |
| `git stash apply` | Apply most recent stash but keep it in stash list | Apply stash without removing it |
| `git stash apply stash@{0}` | Apply specific stash from list | When you have multiple stashes |

**💡 Stashing Workflow**:
```bash
git stash                           # Save current work
git checkout other-branch           # Switch to different branch
# Do work on other branch
git checkout original-branch        # Switch back
git stash pop                       # Restore your saved work
```

---

### 🌐 **Remote Repository Setup**

```bash
# Add remote repository
git remote add origin https://github.com/username/repository-name.git

# Push to remote repository (first time)
git push -u origin main
```

**📝 Explanation**: 
- `origin` is the conventional name for your main remote repository
- `-u` flag sets up tracking between local and remote branch
- After first push, you can use just `git push`

---

### 📝 **Important Notes & Best Practices**

> **⚠️ Critical Reminders**:
> - **Always commit before switching branches** to avoid losing work
> - **`git push` might require login access** - have your credentials ready
> - **Use `git status` frequently** to stay aware of your repository state

**🔄 Typical Development Workflow**:
```bash
1. git status                       # Check current state
2. git add .                        # Stage changes
3. git commit -m "descriptive message"  # Commit changes
4. git push                         # Push to remote repository
```

---

## 🎯 **Commands to Learn Next**

*These are commands I haven't fully mastered yet but plan to learn:*

### 🔄 **Repository Operations**
- `git clone <repository-url>` - Clone an existing repository
- `git pull` - Fetch and merge changes from remote repository
- `git push` - Push changes to remote repository (after initial setup)

### 🔧 **Configuration**
- `git config --global user.name "Your Name"` - Set global username
- `git config --global user.email "your.email@example.com"` - Set global email

### ↩️ **Undoing Changes**
- `git reset <file>` - Unstage a file
- `git checkout -- <file>` - Discard changes in working directory
- `git revert <commit>` - Revert a specific commit

### 🏷️ **Tagging**
- `git tag <tag-name>` - Create a tag
- `git push origin <tag-name>` - Push tag to remote repository

### 🌐 **Remote Management**
- `git remote add origin <repository-url>` - Add a remote repository

---

## 📚 **Learning Progress Tracker**

### ✅ **Mastered Skills**
- [x] Basic repository operations (init, status, log)
- [x] Staging and committing changes
- [x] Branch creation and management
- [x] Branch switching and merging
- [x] Stashing workflow
- [x] Remote repository setup
- [x] Basic history navigation

### 🔄 **Currently Learning**
- [ ] Advanced merge conflict resolution
- [ ] Rebasing workflows
- [ ] Advanced remote operations

### 🎯 **Next Goals**
- [ ] Git hooks and automation
- [ ] Advanced branching strategies (Git Flow)
- [ ] Collaborative workflows (Pull Requests)
- [ ] Git configuration optimization

---

## 🛠️ **Quick Reference Card**

**Daily Commands**:
```bash
git status              # Check what's changed
git add .               # Stage all changes
git commit -m "message" # Commit with message
git push               # Push to remote
```

**Branch Management**:
```bash
git branch                    # List branches
git checkout -b feature-name  # Create and switch to new branch
git checkout main             # Switch to main branch
git merge feature-name        # Merge feature into current branch
```

**Emergency Commands**:
```bash
git stash              # Save current work temporarily
git stash pop          # Restore stashed work
git checkout <file>    # Discard changes to file
```

---

<div align="center">

### 🌟 **"Git is a tool that helps you never lose your work and collaborate effectively!"** 🌟

**Keep Learning! 📖**

*Last Updated: August 2025 | Progress: Intermediate Beginner*

---

**📞 Personal Notes**: 
*This reference is based on my actual learning journey. Commands in the "Mastered" section are ones I use confidently in real projects.*

</div>
