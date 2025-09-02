---
title: Branching in Git
sidebar_position: 3
---

# Branching in Git

Awesome! Now, let’s learn how to work on new features without breaking your main code. Branches are like parallel universes for your project.

## What is a Branch?

A branch is a separate line of development. You can experiment, then merge changes back when ready.

## Common Branch Commands

- `git branch`: List branches
- `git checkout -b feature`: Create and switch to a new branch
- `git merge feature`: Combine changes from another branch

Example:

```bash
git branch
git checkout -b new-feature
# Make changes
git add .
git commit -m "Add new feature"
git checkout main
git merge new-feature
```

:::info
Branches help you work safely and try new ideas.
:::

## What's Next?

Let’s share your code with the world! Next: [GitHub Workflow](./github-workflow.md).
