---
sidebar_position: 6
title: Functions
---

# Functions

Hey, code ninja! 🥷 You're looping like a champ—now let's talk functions, the superheroes of reusable code. Functions let you bu#### WFunctions are your code's superpowers—reusable and awesome! Next, we'll tackle arrays to store lists of data. Dash to [Arrays](./arrays.md) to keep rocking it. You're coding like a pro—keep shining! 💥at's Next?

Functions are your code's superpowers—reusable and awesome! Next, we'll tackle arrays to store lists of data. Dash to [Arrays](./arrays.md) to keep rocking it. You're coding like a pro—keep shining! 💥at's Next?

Functions are your code's superpowers—reusable and awesome! Next, we'll tackle arrays to store lists of data. Dash to [Arrays](./arrays.md) to keep rocking it. You're coding like a pro—keep shining! 💥e up code to run whenever you want, like a recipe you can cook up anytime. Need to greet users multiple times? Calculate scores? Functions save you from copying and pasting. They make your code DRY (Don't Repeat Yourself) and fun to work with!

We'll cover the classic function declaration, the sneaky function expression, how to pass data with parameters and get results with return values, and the sleek arrow functions that make you feel like a modern JS pro. Grab your cape, and let’s make some reusable magic! 🪄

## Function Declaration: The Classic Recipe 🍳

A function declaration is the straightforward way to define a function. It’s like naming a recipe and listing the steps.

Structure:

```javascript
function name(parameter1, parameter2) {
    // Code to run
    return result; // Optional
}
```

Example: Say hi!

```javascript
function greet(name) {
    return "Hello, " + name + "! 👋";
}
console.log(greet("Luna")); // Hello, Luna! 👋
console.log(greet("Max")); // Hello, Max! 👋
```

- **Hoisted**: You can call it before it’s defined (JS moves declarations to the top).
- Call it with `name(arguments)`—arguments are the actual values you pass.

:::tip Reuse Power
Write once, use everywhere. Functions are your shortcut to clean code!
:::

## Function Expression: The Sneaky Sidekick 🕵️‍♂️

A function expression stores a function in a variable. It’s like giving your recipe a codename.

Structure:

```javascript
const name = function(parameter1, parameter2) {
    // Code
    return result;
};
```

Example: Math helper!

```javascript
const square = function(num) {
    return num * num;
};
console.log(square(4)); // 16
console.log(square(5)); // 25
```

- **Not hoisted**: Define first, then call, or you’ll get an error.
- Useful for passing functions around (like to other functions—more later!).

Why use it? More flexible, especially in callbacks or when assigning dynamically.

:::warning Order Matters
Call a function expression after defining it: `square(3)` before `const square = ...` crashes!
:::

## Parameters & Return Values: Data In, Data Out 📦

Functions are like vending machines: put in inputs (parameters), get out results (return values).

### Parameters

- Variables listed in `()` that receive arguments when called.
- Can have none, one, or many. Optional defaults with `=`.

Example:

```javascript
function add(a, b = 0) { // b defaults to 0
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add(5)); // 5 (uses default)
```

### Return Values

- `return` sends back a result and stops the function.
- No return? Function gives `undefined`.

Example:

```javascript
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

:::tip Default Parameters
Use defaults to avoid `undefined` errors: `function sayHi(name = "friend") {...}`
:::

:::info Multiple Returns
Use `return` early to exit: `if (!num) return "Invalid";`
:::

## Arrow Functions: Sleek and Modern 🏹

Arrow functions (ES6) are a concise way to write functions, especially for short tasks. They’re like a quick text instead of a long email.

Structure:

```javascript
const name = (parameter1, parameter2) => {
    // Code
    return result;
};
```

Examples:

```javascript
// Single parameter, one-liner (implicit return, no braces needed)
const double = num => num * 2;
console.log(double(5)); // 10

// Multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// No parameters
const sayHi = () => "Hello, World!";
console.log(sayHi()); // Hello, World!
```

- **No curly braces?** Implicit return (one expression).
- **No `this` binding**: Great for callbacks, but tricky with objects (more in advanced sections).
- **Not hoisted**: Define before use, like expressions.

Example: Quick filter!

```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

:::tip Arrow Shortcuts
Single param? Skip `()`: `num => num * 2`. One-line return? Skip `return` and `{}`: `x => x + 1`.
:::

:::warning Arrow Limits
Don’t use arrows for methods in objects (e.g., `{ method: () => ... }`)—`this` behaves differently. Stick to regular functions there.
:::

## Practice Time! 🛠️

Try these in your console:

```javascript
// Declaration
function welcome(user) {
    return `Welcome, ${user}! 🌟`;
}
console.log(welcome("Zoe"));

// Expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 3));

// Arrow with default
const cheer = (name = "champ") => `Go, ${name}! 🎉`;
console.log(cheer()); // Go, champ! 🎉
console.log(cheer("Tina"));

// Combine with loops
for (let i = 1; i <= 3; i++) {
    console.log(welcome("User" + i));
}
```

Play around: Add a default to `subtract`, or make an arrow to check if a number is positive.

## What's Next?

Functions are your code’s superpowers—reusable and awesome! Next, we’ll tackle arrays to store lists of data. Dash to [Arrays](./Javascript/arrays) to keep rocking it. You’re coding like a pro—keep shining! 💥

Got questions? Pop over to our [GitHub Discussions](https://github.com/sammy6378/reference/discussions). Code away! 🚀
