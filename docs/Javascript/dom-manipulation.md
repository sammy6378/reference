---
sidebar_position: 11
title: DOM Manipulation
---

You’ve got functions, arrays, and objects down, and now it’s time to take control of web pages with **DOM manipulation**. The Document Object Model (DOM) is like a bridge between your JavaScript code and the HTML/CSS on a page. It turns your webpage into a living, breathing thing you can change on the fly—think updating text, styling buttons, or adding new elements with a click.

In this section, we’ll learn how to **select elements** (with all the key selectors), **change styles and content**, **create and remove elements**, and **handle events** like clicks and form inputs. By the end, you’ll be ready to make interactive sites like a pro. Let’s dive into the DOM! 🛠️

## Selecting Elements: Finding Your Targets 🎯

To change a webpage, you first need to find the HTML elements you want to work with. JavaScript offers several methods to select elements from the DOM. Here’s the full lineup, from simple to powerful!

### getElementById: The ID Hunter

Finds a single element by its unique `id` attribute. Fast and precise!

Example:

```html
<div id="greeting">Hello!</div>
```

```javascript
let greeting = document.getElementById("greeting");
console.log(greeting.textContent); // Hello!
```

### querySelector: The Super Selector

Selects the **first** element matching a CSS selector. Use any CSS-style selector (ID, class, tag, etc.).

Example:

```html
<p class="intro">Welcome!</p>
<button id="btn">Click me</button>
<div class="intro">Another intro</div>
```

```javascript
let firstIntro = document.querySelector(".intro"); // First .intro
let button = document.querySelector("#btn"); // ID selector
let paragraph = document.querySelector("p"); // Tag selector
console.log(firstIntro.textContent); // Welcome!
```

Advanced selectors:

```javascript
let specific = document.querySelector("div.intro"); // Tag with class
let nested = document.querySelector("ul li:first-child"); // First <li> in <ul>
```

### querySelectorAll: Grab All Matches

Returns a `NodeList` (like an array) of **all** elements matching a CSS selector. Iterate with `forEach` or `for...of`.

Example:

```html
<p class="intro">One</p>
<p class="intro">Two</p>
```

```javascript
let intros = document.querySelectorAll(".intro");
intros.forEach(p => console.log(p.textContent)); // One, Two
```

### Other Selectors

- **getElementsByClassName**: Gets all elements with a class (returns `HTMLCollection`).

  ```javascript
  let items = document.getElementsByClassName("item");
  // Convert to array for forEach: Array.from(items).forEach(...)
  ```

- **getElementsByTagName**: Gets all elements by tag name (e.g., `div`, `p`).

  ```javascript
  let divs = document.getElementsByTagName("div");
  ```

- **getElementsByName**: Gets elements by `name` attribute (common in forms).

  ```javascript
  let inputs = document.getElementsByName("username");
  ```

### When to Use What?

- **Single ID**: Use `getElementById`—fastest.
- **Single anything**: Use `querySelector`—flexible with CSS selectors.
- **Multiple elements**: Use `querySelectorAll` for modern iteration or `getElementsByClassName`/`TagName` for older code.
- **Forms**: `getElementsByName` for input fields.

:::tip Pro Tip
Stick to `querySelector` and `querySelectorAll` for most tasks—they’re versatile and match CSS skills you already know!
:::

:::warning Selector Specificity
`querySelector` grabs the **first** match. Use specific selectors (e.g., `div.intro` vs. `.intro`) to avoid surprises.
:::

## Changing Styles and Content: Make It Pop! 🎨

Once you’ve got an element, you can tweak its content (text, HTML) or style it dynamically.

### Changing Content

- **textContent**: Sets/gets plain text (safe, no HTML).

  ```javascript
  let title = document.querySelector("h1");
  title.textContent = "New Title! 🚀"; // Changes text
  ```

- **innerHTML**: Sets/gets HTML (use cautiously—can allow scripts if user input).

  ```javascript
  title.innerHTML = "<em>Awesome</em> Title!"; // Adds <em> tag
  ```

### Changing Styles

Access the `style` property to set CSS properties (use camelCase for multi-word properties).

Example:

```javascript
let box = document.querySelector(".box");
box.style.backgroundColor = "skyblue";
box.style.fontSize = "20px";
box.style.padding = "10px";
```

For multiple styles, use `classList` to toggle CSS classes:

```html
<style>
.active { border: 2px solid green; }
</style>
```

```javascript
box.classList.add("active"); // Add class
box.classList.remove("active"); // Remove class
box.classList.toggle("active"); // Toggle on/off
```

:::tip ClassList > Style
Use `classList` for reusable styles defined in CSS—keeps your JS clean and maintainable!
:::

:::warning Security Note
Avoid `innerHTML` with user input (e.g., form data) to prevent XSS attacks. Stick to `textContent` unless you need HTML.
:::

## Creating and Removing Elements: Build and Destroy 🏗️

Want to add or remove elements dynamically? The DOM lets you create new HTML and delete what you don’t need.

### Creating Elements

Use `document.createElement` and append to the page.

```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "I’m new! 🎉";
newDiv.classList.add("box");
document.body.appendChild(newDiv); // Add to <body>
```

Append to specific parent:

```html
<div id="container"></div>
```

```javascript
let container = document.getElementById("container");
container.appendChild(newDiv); // Adds inside <div>
```

### Removing Elements

Use `remove()` or `parentNode.removeChild`.

```javascript
newDiv.remove(); // Bye-bye!
// Or: container.removeChild(newDiv);
```

### Inserting at Specific Positions

Use `prepend`, `append`, `before`, or `after`:

```javascript
let list = document.querySelector("ul");
let newItem = document.createElement("li");
newItem.textContent = "New Task";
list.prepend(newItem); // Add as first child
list.append(newItem); // Add as last child
```

:::tip Efficiency Tip
Use `append` to add multiple elements at once: `parent.append(child1, child2)`.
:::

## Event Listeners: Make It Interactive 🖱️

Events are user actions (clicks, typing, form submits) that your code can respond to. Event listeners are like setting traps to catch those actions.

### Adding Listeners

Use `addEventListener(event, callback)` for flexibility (better than `onclick`).

Example: Click to change color

```html
<button id="colorBtn">Change Color</button>
```

```javascript
let button = document.getElementById("colorBtn");
button.addEventListener("click", () => {
    button.style.backgroundColor = "lightcoral";
    console.log("Clicked! 🎨");
});
```

### Common Events

- **click**: Button or element clicked.

  ```javascript
  button.addEventListener("click", () => alert("Boom!"));
  ```

- **input**: User types in an input field (real-time).

  ```javascript
  let input = document.querySelector("input");
  input.addEventListener("input", (event) => {
      console.log("Typing:", event.target.value);
  });
  ```

- **submit**: Form submitted (use on `<form>`).

  ```html
  <form id="myForm">
      <input type="text" name="username">
      <button type="submit">Submit</button>
  </form>
  ```

  ```javascript
  let form = document.getElementById("myForm");
  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Stop page reload
      let username = form.querySelector("[name=username]").value;
      console.log("Submitted:", username);
  });
  ```

### Event Object

The `event` parameter in callbacks holds details like `event.target` (the element) or `event.key` (for keyboard events).

Example: Track mouse position

```javascript
document.addEventListener("mousemove", (event) => {
    console.log(`Mouse at: ${event.clientX}, ${event.clientY}`);
});
```

:::tip Event Listener Power
`addEventListener` lets you add multiple listeners to one element, unlike `onclick`. Remove with `removeEventListener` if needed.
:::

:::warning Prevent Default
For forms or links, use `event.preventDefault()` to stop default behavior (e.g., page reload on submit).
:::

## Practice Time! 🛠️

Try this mini-project in your browser:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Playground</title>
    <style>
        .task { padding: 5px; border-bottom: 1px solid gray; }
        .done { text-decoration: line-through; }
    </style>
</head>
<body>
    <h1>Task List 📝</h1>
    <input id="taskInput" placeholder="Add a task">
    <button id="addBtn">Add</button>
    <ul id="taskList"></ul>
    <script>
        let input = document.querySelector("#taskInput");
        let addBtn = document.querySelector("#addBtn");
        let taskList = document.querySelector("#taskList");

        addBtn.addEventListener("click", () => {
            if (input.value.trim() === "") return;
            let li = document.createElement("li");
            li.textContent = input.value;
            li.classList.add("task");
            li.addEventListener("click", () => li.classList.toggle("done"));
            taskList.appendChild(li);
            input.value = "";
        });
    </script>
</body>
</html>
```

- Type a task, click Add—it appears in the list!
- Click a task to mark it done (toggles line-through).
- Play: Add a “Clear All” button or remove tasks on double-click.

Questions? Pop over to our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
