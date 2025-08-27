---
sidebar_position: 2
title: Variables and Data Types
---

# Variables & Data Types

Hello again, aspiring JavaScript wizard! 🌟 If you've made it here from the basics, pat yourself on the back—you're already writing code that runs in the browser. Now, let's level up by learning how to store and work with information in JS. Think of this as packing your backpack for a coding adventure: variables are your bags, and data types are the stuff you put inside.

Variables let you save data (like numbers or text) so you can use it later. Data types tell JS what kind of data it is, which affects how you can play with it. Don't worry if it sounds fancy—we'll break it down with fun examples and zero jargon overload. Ready? Let's go! 🎒

## Declaring Variables: var, let, const

In JS, you "declare" a variable to create it. It's like naming a pet—you give it a name and decide what it holds. There are three ways: `var`, `let`, and `const`. But spoiler: `var` is old-school and tricky, so we mostly use `let` and `const` these days.

### The Old Timer: var 🦖

`var` was the original way to declare variables, but it's like a dinosaur—cool in history books, but not great for modern code. Why? It has "function scope" (confusing boundaries) and allows re-declaring the same variable, which leads to bugs.

Example:

```javascript
var age = 10;
var age = 20; // Oops, re-declared! No error, but confusing.
console.log(age); // 20
```

Avoid `var` unless you're time-traveling to 2010. It's still around for backward compatibility, but we're evolving! 🧬

### The Flexible Friend: let

`let` is your go-to for variables that might change. It has "block scope" (stays within curly braces `{}`), which keeps things tidy and prevents accidents.

Example:

```javascript
let score = 0;
score = 100; // Change it—no problem!
console.log(score); // 100
```

You can't re-declare it in the same scope:

```javascript
let score = 50; // Error if you try this again in the same block!
```

Perfect for loops or temporary values.

### The Reliable Constant: const

`const` is for values that shouldn't change—like a promise you can't break! It's also block-scoped and must be assigned a value right away.

Example:

```javascript
const pi = 3.14159;
console.log(pi); // 3.14159
pi = 3.14; // Error! Can't change a const.
```

Great for constants like colors, API keys, or math values. Note: For objects or arrays, `const` locks the reference, but you can still tweak insides (more on that later!).

:::tip When to Choose?

- Use `let` if the value might update (e.g., a counter).
- Use `const` for everything else—it's safer and signals "don't touch!"
- Ditch `var` to avoid headaches. Modern JS loves `let` and `const` (introduced in ES6, 2015).
:::

:::warning Naming Rules
Variable names must start with a letter, _, or $. No spaces or numbers first! Be descriptive: `userAge` > `x`. Case-sensitive: `Age` ≠ `age`.
:::

## Data Types: The Building Blocks

JS has "primitive" data types (simple values) and more complex ones (like objects—we'll cover those next). Let's meet the basics!

### Strings: Text Adventures 📝

Strings are text, wrapped in quotes (`'single'`, `"double"`, or ``backticks`` for templates—more soon!).

Example:

```javascript
let greeting = "Hello, World!";
console.log(greeting); // Hello, World!
console.log(greeting.length); // 13 (counts characters)
console.log(greeting.toUpperCase()); // HELLO, WORLD!
```

Fun: Combine with `+` (concatenation):

```javascript
let name = "Alice";
console.log("Hi, " + name + "!"); // Hi, Alice!
```

### Numbers: Crunching Digits 🔢

Numbers are... numbers! No quotes needed. JS handles integers (whole) and floats (decimals) the same.

Example:

```javascript
let age = 25;
let price = 9.99;
console.log(age + price); // 34.99 (math works!)
console.log(Math.round(price)); // 10 (built-in Math object for fun stuff)
```

Watch out: `Infinity` (huge numbers) or `NaN` (Not a Number, like `"apple" / 2`).

### Booleans: True or False? ✅❌

Booleans are yes/no values: `true` or `false`. Great for decisions.

Example:

```javascript
let isFun = true;
let isRaining = false;
console.log(isFun && !isRaining); // true (&& is AND, ! is NOT)
```

Used in if-statements (coming soon!).

### null and undefined: The Empty Spots 🕳️

- `null`: Intentionally empty. You set it, like "nothing here on purpose."

```javascript
let favoritePet = null;
```

- `undefined`: JS's way of saying "not set yet." Happens if you declare but don't assign.

```javascript
let mystery;
console.log(mystery); // undefined
```

Tip: Use `null` when you mean "empty," and check for both in code to avoid surprises.

:::info Primitive vs. Reference
Primitives (like these) are copied by value. Objects (next section) are by reference—changing one affects others!
:::

## Template Literals: Fancy Strings with Superpowers ✨

Template literals are strings on steroids, using backticks `` ` ``. They let you embed variables and multi-line text easily—no more clunky `+`!

Example:

```javascript
let name = "Bob";
let age = 30;
console.log(`Hi, ${name}! You're ${age} years old.`); // Hi, Bob! You're 30 years old.
```

The `${expression}` inserts anything—even math:

```javascript
console.log(`Half of ${age} is ${age / 2}.`); // Half of 30 is 15.
```

Multi-line magic:

```javascript
let poem = `
Roses are red,
Violets are blue,
JS is fun,
And so are you! 🌹
`;
console.log(poem);
```

Way better than old-school strings for readability!

:::tip Pro Tip
Always use template literals for dynamic text. They're modern, clean, and save time. Introduced in ES6—thank you, progress!
:::

:::warning Escape Quotes
If you need quotes inside, use \' or \" in regular strings. Templates handle it easier!
:::

## Practice Time! 🛠️

Open your editor and try this:

```javascript
const hero = "SuperCoder";
let powerLevel = 9001;
console.log(`Behold, ${hero}! Your power is over ${powerLevel}. Is that awesome? ${powerLevel > 9000}`);
```

Run it in the browser console—what do you get? Experiment and log results!

## What's Next?

You've got the basics of storing data—awesome job! Next, we'll explore operators, conditionals, and making decisions in code. Jump to [Operators and Conditionals](./operators.md) to keep the adventure rolling. You're building real skills now—keep it up! 🚀

Questions? Swing by our [GitHub Discussions](https://github.com/sammy6378/reference/discussions). Happy coding!
