# Contributing to JS, TS & React Native Documentation

We welcome contributions to our comprehensive documentation for JavaScript, TypeScript, and React Native! This guide will help you get started with contributing to the project.

## 🎯 How to Contribute

There are many ways you can contribute to this documentation:

- **Report bugs or issues** in the documentation
- **Suggest improvements** to existing content
- **Add new examples** and code snippets
- **Fix typos** and grammatical errors
- **Translate content** to other languages
- **Improve the website design** and user experience

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** (v16 or higher) installed
- **Git** for version control
- A **GitHub account**
- A code editor like **VS Code**

### Setting Up the Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine:

   ```bash
   git clone https://github.com/YOUR_USERNAME/reference.git
   cd reference
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

5. **Open your browser** to `http://localhost:3000`

## 📝 Making Changes

### Documentation Structure

Our documentation is organized in a progressive learning path. Follow the structure below when adding new content:

```
docs/
├── getting-started.md                      # Getting started guide
├── intro.md                               # Project overview
│
├── Javascript/                            # JavaScript documentation
│   ├── Beginner/                         # Foundation concepts
│   │   ├── introduction-to-javascript.md # What is JavaScript?
│   │   ├── variables.md                  # Variables and data types
│   │   ├── arrays.md                     # Working with arrays
│   │   ├── functions.md                  # Functions and scope
│   │   ├── objects.md                    # Objects and methods
│   │   └── projects.md                   # Beginner projects
│   │
│   └── Intermediate/                     # Advanced concepts
│       ├── advanced-functions.md        # Advanced function patterns
│       ├── dom-manipulation.md           # DOM interaction
│       ├── es6-features.md              # Modern JavaScript features
│       ├── async-javascript/            # Asynchronous programming
│       │   ├── callbacks.md             # Callback functions
│       │   ├── promises.md              # Promise patterns
│       │   ├── async-await.md           # Async/await syntax
│       │   └── asynchronous-operations.md # Complex async operations
│       ├── json-apis.md                 # Working with APIs
│       ├── error-handling.md            # Error handling patterns
│       └── final-projects.md            # Intermediate projects
│
├── Typescript/                           # TypeScript documentation
│   ├── intro.md                         # TypeScript introduction
│   └── tips.md                          # TypeScript best practices
│
└── react-native/                        # React Native documentation
    ├── setup.md                         # Environment setup
    └── components.md                    # Component development
```

### Writing Guidelines

When contributing to the documentation, please follow these guidelines:

#### Content Guidelines

- **Use clear, simple language** that beginners can understand
- **Provide practical examples** with working code snippets
- **Include explanations** for complex concepts
- **Use proper markdown formatting** with headers, lists, and code blocks
- **Add emojis** sparingly to make content more engaging
- **Test all code examples** before submitting

#### Code Examples

- Use **syntax highlighting** with appropriate language tags
- Provide **complete, runnable examples** when possible
- Add **comments** to explain complex code
- Follow **best practices** for the respective technology
- Include **error handling** where appropriate

#### Style Guide

- Use **sentence case** for headings
- Use **bullet points** for lists
- Use **numbered lists** for step-by-step instructions
- Use **callout boxes** (:::tip, :::info, :::warning) for important notes
- Use **inline code** for variable names, function names, and short code snippets

### Example Contribution

Here's an example of a well-formatted documentation section:

```markdown
## Array Methods

JavaScript provides many built-in methods to work with arrays efficiently.

### map() Method

The `map()` method creates a new array with the results of calling a function for every array element.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

:::tip Pro Tip
Always use `map()` when you need to transform array elements. It's more functional and readable than traditional loops.
:::

```

## 🔄 Submitting Changes

### Creating a Pull Request

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/improve-javascript-docs
   ```

1. **Make your changes** and test them locally
1. **Commit your changes** with a descriptive message:

   ```bash
   git add .
   git commit -m "Add advanced array methods documentation"
   ```

1. **Push to your fork**:

   ```bash
   git push origin feature/improve-javascript-docs
   ```

1. **Create a Pull Request** on GitHub with:
   - A clear title describing your changes
   - A detailed description of what you've added or fixed
   - Screenshots if you've made visual changes
   - References to any related issues

### Branch Naming Conventions

To help with code reviews and project organization, please follow these branching guidelines:

#### Branch Naming Format

Use the following format for your branch names:

```
<type>/<short-description>
```

#### Branch Types

| Type       | Purpose                    | Example                                |
| ---------- | -------------------------- | -------------------------------------- |
| `feat`     | New features or content    | `feat/add-async-await-tutorial`        |
| `fix`      | Bug fixes or corrections   | `fix/broken-links-javascript-section`  |
| `docs`     | Documentation improvements | `docs/improve-contributing-guide`      |
| `style`    | Design/UI improvements     | `style/enhance-mobile-navigation`      |
| `refactor` | Code/content restructuring | `refactor/reorganize-beginner-content` |
| `test`     | Adding or fixing tests     | `test/add-code-example-validation`     |
| `chore`    | Maintenance tasks          | `chore/update-dependencies`            |

#### Branch Naming Examples

✅ **Good Examples:**

```bash
feat/typescript-generics-tutorial
fix/incorrect-array-examples
docs/update-installation-guide
style/improve-code-block-styling
refactor/split-large-javascript-file
```

❌ **Avoid:**

```bash
my-changes
update
fix-stuff
new-feature
```

#### Creating and Working with Branches

1. **Create a new branch** from main:

   ```bash
   git checkout main
   git pull upstream main  # Sync with latest changes
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** and commit regularly:

   ```bash
   git add .
   git commit -m "Add: Clear description of what you added"
   ```

3. **Push your branch** to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

4. **Create a Pull Request** with a clear title matching your branch purpose

### Commit Message Guidelines

Use clear, descriptive commit messages that follow this format:

```
<Type>: <Short description>

[Optional longer description]
```

**Examples:**

```bash
feat: Add TypeScript interfaces tutorial
fix: Correct array method examples in beginner guide
docs: Update contribution guidelines with branch naming
style: Improve responsive design for mobile devices
```

**Types for commits:**

- `feat:` New features or content
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Formatting, UI changes
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

### Pull Request Checklist

Before submitting your pull request, make sure:

- [ ] Your branch name follows our naming conventions
- [ ] The documentation builds without errors (`npm run build`)
- [ ] All code examples are tested and work correctly
- [ ] Links are working and point to the correct pages
- [ ] Grammar and spelling are correct
- [ ] The content follows our style guidelines
- [ ] Your commits have clear, descriptive messages
- [ ] You've synced with the latest main branch
- [ ] You've added yourself to the contributors list (if applicable)

### Review Process

To help us review your contribution quickly:

1. **Use descriptive PR titles** that match your branch type
2. **Fill out the PR template** completely
3. **Reference related issues** using `#issue-number`
4. **Add screenshots** for visual changes
5. **Request specific reviewers** if you know who should review
6. **Respond to feedback** promptly and professionally

## 🐛 Reporting Issues

If you find bugs, typos, or have suggestions for improvement:

1. **Check existing issues** to see if it's already reported
2. **Create a new issue** with:
   - A clear, descriptive title
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment details (OS, browser, Node.js version)

## 💡 Suggesting New Content

We're always looking to expand our documentation! If you have ideas for new content:

1. **Check our roadmap** in the issues to see what's planned
2. **Create a new issue** with the label "content-request"
3. **Describe the topic** and why it would be valuable
4. **Outline the content structure** if you have ideas

## 🏆 Recognition

Contributors who help improve this documentation will be:

- **Added to our contributors list**
- **Mentioned in release notes** for significant contributions
- **Recognized** in our community discussions

## 📞 Getting Help

If you need help with contributing:

- **Join our discussions** on GitHub Discussions
- **Ask questions** in issues with the "help-wanted" label
- **Reach out** to maintainers through GitHub

## 📋 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive in all interactions
- **Be collaborative** and help others learn
- **Be constructive** when providing feedback
- **Be patient** with beginners and those learning

## 🎉 Thank You

Thank you for contributing to making JavaScript, TypeScript, and React Native documentation better for everyone! Your efforts help developers worldwide learn and build amazing applications.

---

*This project is proudly sponsored by **Nuvex** - empowering developers worldwide.*
