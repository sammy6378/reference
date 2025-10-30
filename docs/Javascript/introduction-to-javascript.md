---
sidebar_position: 1
title: JavaScript Basics
---


Welcome to the magical world of JavaScript (often just called JS). If you're new to programming, don't worry—we're starting from the very beginning. Think of JavaScript as the secret sauce that makes websites come alive: buttons that respond when you click them, forms that check your input, and even games right in your browser.

JavaScript is one of the most popular programming languages in the world. It's beginner-friendly, super versatile, and powers everything from simple web pages to complex apps like Netflix or Google Maps. By the end of this section, you'll write your first lines of code and see them in action. Let's dive in—it's going to be fun! 😊

## What is JavaScript?

Imagine you're building a house. HTML is the structure (walls and roof), CSS is the paint and decorations (making it pretty), and JavaScript is the electricity and plumbing—it makes things work! JS adds interactivity and logic to web pages.

- **Created in 1995** by Brendan Eich (in just 10 days—talk about a rush job!).
- **Not related to Java** (despite the similar name—it's like how a hot dog isn't related to a dog 🐶).
- **Used everywhere**: On the web, in mobile apps (via React Native), servers (Node.js), and even robots or games.

JavaScript is a "high-level" language, meaning it's easy for humans to read and write, and the computer translates it for you. It's also "dynamic," so you can change things on the fly without restarting everything.

### How JavaScript Runs

JavaScript doesn't run on its own—it needs an "engine" to execute the code. Here's the scoop:

- **In the Browser (Client-Side)**: Every modern web browser (like Chrome, Firefox, or Safari) has a built-in JS engine. For example:
  - Chrome uses V8 (super fast!).
  - When you visit a website, the browser downloads the JS code and runs it right on your device. This makes things interactive without needing to talk to a server every time.

- **On the Server (Node.js)**: Node.js is like a browser engine but for servers. It lets you run JS outside the browser—for building backends, APIs, or even desktop apps.
  - Install Node.js from [nodejs.org](https://nodejs.org) (remember our prerequisites? You've got this!).
  - Fun fact: Node.js powers big sites like LinkedIn and Uber.

In short: Browser for front-end fun, Node.js for back-end power. We'll start with the browser since it's easiest for beginners.

:::tip Quick Analogy
JavaScript in the browser is like a puppet show—the audience (you) sees the action happen live. Node.js is like backstage crew, handling the behind-the-scenes stuff!
:::

## How to Link JS in HTML

Ready to write some code? First, we need to connect JavaScript to an HTML page. There are a few ways, but we'll keep it simple.

### 1. Inline Script (Quick and Easy)

Put JS directly in your HTML file. Great for testing small bits.

Create a file called `index.html` and add this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JS Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <script>
        alert("Welcome to JavaScript! 🎉");
    </script>
</body>
</html>
```

Open it in your browser—bam! A popup appears. The `<script>` tag is where the magic happens.

### 2. Internal Script (In the Same File)

Similar to inline, but place it in the `<head>` or at the end of `<body>` for better performance.

Add to your `index.html`:

```html
<script>
    document.body.style.backgroundColor = "lightblue"; // Changes the background!
</script>
```

### 3. External Script (Best for Bigger Projects)

Separate your JS into its own file (e.g., `script.js`). This keeps things organized.

In `script.js`:

```javascript
alert("This is from an external file! 🚀");
```

In `index.html`:

```html
<script src="script.js"></script>
```

Link it with `src="path/to/script.js"`. Pro tip: Put this at the end of `<body>` so the page loads faster.

:::info Try It Out!
Open your code editor, create these files, and refresh your browser. If nothing happens, check for typos—JS is picky about spelling!
:::

:::warning Common Pitfall
Make sure your file paths are correct. If `script.js` is in a folder called `js`, use `src="js/script.js"`.
:::

## console.log and Debugging Basics

Coding is like detective work—sometimes things go wrong, and you need tools to investigate. Enter `console.log()`, your new best friend!

### What is console.log?

It's a simple way to print messages to the browser's console (a hidden developer tool). Think of it as whispering secrets to yourself while coding.

In your `script.js`:

```javascript
console.log("Hello from the console! 👋");
console.log(42); // Numbers work too!
console.log("My favorite color is", "blue"); // Multiple things
```

To see it:

1. Open your HTML in Chrome.
2. Right-click > Inspect > Go to the "Console" tab.
3. Refresh the page—your messages appear!

### Why Use It?

- **Debugging**: Spot errors. Example: If a button isn't working, log "Button clicked!" to check if the code runs.
- **Testing Values**: Log variables to see what's inside them.
- **Fun Fact**: You can style logs with `console.log("%cFancy text!", "color: red; font-size: 20px;");`—try it!

### Basic Debugging Tips

- **Errors in Console**: Red messages? Read them—they tell you what's wrong (e.g., "undefined variable").
- **Breakpoints**: In the Sources tab, click a line number to pause code execution. Super useful!
- **Common Fixes**:
  - Forgot a semicolon? JS might forgive it, but it's good habit: `console.log("Hi");`
  - Case-sensitive: `Console.log` won't work—it's `console.log`.

:::tip Pro Beginner Tip
Stuck? Google the error message + "JavaScript"—millions have been there before you. You're not alone! 🌟
:::

:::info Experiment Time
Add `console.error("Oh no!");` for a red error or `console.warn("Watch out!");` for yellow warnings. Play around!
:::

If you have questions, hop over to our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
