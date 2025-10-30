---
sidebar_position: 9
title: Fun Beginner Projects
---

Wow, you’ve made it through the JavaScript basics—time to celebrate by building something awesome! 🎉 These three mini-projects—**Digital Dice Roller**, **Random Joke Generator**, and **Simple Calculator**—will put your skills to work. You’ll use variables, functions, arrays, objects, and loops, plus a touch of HTML and CSS to make them interactive on a webpage. Each project is beginner-friendly, includes full code, and runs in your browser. Let’s create some magic! 🪄

## Project 1: Digital Dice Roller 🎲

Roll a virtual die (1–6) with a button click. Perfect for practicing random numbers and DOM updates!

### What You’ll Learn

- Generate random numbers with `Math.random()`.
- Update the webpage with DOM manipulation.
- Handle button clicks with event listeners.

### The Code

Create three files: `index.html`, `style.css`, `dice.js`.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Digital Dice Roller</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🎲 Digital Dice Roller</h1>
    <p>Result: <span id="result">Click to roll!</span></p>
    <button onclick="rollDice()">Roll the Dice!</button>
    <script src="dice.js"></script>
</body>
</html>
```

**style.css**:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #45a049;
}
#result {
    font-size: 24px;
    color: #d32f2f;
}
```

**dice.js**:

```javascript
function rollDice() {
    let result = Math.floor(Math.random() * 6) + 1; // Random 1-6
    document.getElementById("result").textContent = result;
}
```

### How It Works

- `Math.random()` gives a number between 0 (inclusive) and 1 (exclusive).
- `Math.floor(Math.random() * 6)` gives 0–5, so `+1` makes it 1–6.
- `document.getElementById("result")` finds the `<span>` and updates its text with `.textContent`.
- The button’s `onclick="rollDice()"` calls the function on click.

### Try It

1. Save the files in a folder (e.g., `dice-roller`).
2. Open `index.html` in a browser.
3. Click the button to roll—see the number change!
4. Play: Add emoji dice faces (e.g., ⚀ for 1) using an array and `if` statements.

:::tip Level Up
Store the last 5 rolls in an array and display them below the result!
:::

## Project 2: Random Joke Generator 😂

Click a button to get a random joke from a list. Great for practicing arrays and functions!

### What You’ll Learn

- Store data in arrays and pick random items.
- Use functions to organize code.
- Update the DOM dynamically.

### The Code

Create `index.html`, `style.css`, `joke.js`.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Random Joke Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>😂 Random Joke Generator</h1>
    <p id="joke">Click for a laugh!</p>
    <button onclick="tellJoke()">Get Joke</button>
    <script src="joke.js"></script>
</ Saul
</body>
</html>
```

**style.css**:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
}
#joke {
    font-size: 20px;
    margin: 20px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #1976D2;
}
```

**joke.js**:

```javascript
const jokes = [
    "Why did the scarecrow become a coder? He was outstanding in his field! 🌾",
    "What do you call a dinosaur that codes? A Code-a-saurus! 🦖",
    "Why don’t programmers prefer dark mode? The light attracts bugs. 🐛",
    "What’s a coder’s favorite game? Among Us—ejecting bugs from the codebase! 🚀",
    "Why was the JavaScript code sad? It had too many undefined feelings. 😢"
];

function tellJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").textContent = jokes[index];
}
```

### How It Works

- `jokes` is an array of funny strings.
- `Math.random() * jokes.length` picks a random index (0 to length-1).
- `document.getElementById("joke")` updates the `<p>` with the chosen joke.
- Button click triggers `tellJoke()`.

### Try It

1. Save files in a folder (e.g., `joke-generator`).
2. Open `index.html` in a browser.
3. Click for random jokes—laugh away!
4. Play: Add a “Next Joke” button or style jokes differently based on length.

:::tip Level Up
Use an object for each joke with `setup` and `punchline`, showing them separately with a delay!
:::

## Project 3: Simple Calculator 🧮

A basic calculator for addition and subtraction with user input. Perfect for combining inputs, functions, and DOM.

### What You’ll Learn

- Handle user input from forms.
- Use objects to organize operations.
- Update the DOM with results.

### The Code

Create `index.html`, `style.css`, `calc.js`.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🧮 Simple Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number">
    <select id="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
    </select>
    <input type="number" id="num2" placeholder="Enter second number">
    <button onclick="calculate()">Calculate</button>
    <p>Result: <span id="result">0</span></p>
    <script src="calc.js"></script>
</body>
</html>
```

**style.css**:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
}
input, select {
    padding: 8px;
    margin: 5px;
    font-size: 16px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #FF9800;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #F57C00;
}
#result {
    font-size: 24px;
    color: #388E3C;
}
```

**calc.js**:

```javascript
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const op = document.getElementById("operation").value;
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Enter valid numbers!";
        return;
    }
    const result = operations[op](num1, num2);
    document.getElementById("result").textContent = result;
}
```

### How It Works

- `<input type="number">` ensures number inputs.
- `operations` object maps operation names to arrow functions.
- `Number()` converts input strings to numbers.
- Checks for `isNaN` to avoid invalid inputs.
- Updates `<span id="result">` with the answer.

### Try It

1. Save files in a folder (e.g., `calculator`).
2. Open `index.html` in a browser.
3. Enterterasect numbers, pick an operation, calculate!
4. Play: Add multiplication or division to `operations`.

:::tip Level Up
Add error styling (red for invalid inputs) or a history of calculations!
:::

:::warning Input Safety
Always validate inputs (e.g., `isNaN`) to prevent crashes.
:::

Questions? Join our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
