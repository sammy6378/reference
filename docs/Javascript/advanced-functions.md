---
sidebar_position: 10
title: Advanced Functions
---


 You’ve conquered the basics—variables, loops, arrays, objects, and functions—and now it’s time to supercharge your functions with some intermediate magic. Functions are the heart of JavaScript, and these advanced techniques will make them more powerful, flexible, and fun to use. Think of this as upgrading your coding toolbox with shiny new gadgets!

In this section, we’ll explore **default parameters** for smarter function inputs, **rest and spread operators** for handling lists like a pro, **callback functions** to make your code interactive, and **higher-order functions** (like `map`, `filter`, and `reduce`) to transform data with ease. Get ready to write cleaner, cooler code—let’s dive in! 🛠️

## Default Parameters: Smarter Inputs 🧠

Default parameters let you set fallback values for function parameters, so your code doesn’t break if something’s missing. You touched on this briefly in the beginner section, but let’s go deeper!

### How They Work

If a parameter isn’t provided (or is `undefined`), the default kicks in. You can use any expression, even other parameters!

Example: Friendly greeter

```javascript
function greet(name = "friend", greeting = "Hi") {
    return `${greeting}, ${name}! 😊`;
}
console.log(greet()); // Hi, friend! 😊
console.log(greet("Luna")); // Hi, Luna! 😊
console.log(greet("Max", "Yo")); // Yo, Max! 😊
```

Advanced trick: Use a function as a default!

```javascript
function getDefaultMood(isHappy = true) {
    return isHappy ? "😄" : "😢";
}
function welcome(user = "Guest", mood = getDefaultMood()) {
    return `Welcome, ${user} ${mood}`;
}
console.log(welcome()); // Welcome, Guest 😄
console.log(welcome("Zoe", getDefaultMood(false))); // Welcome, Zoe 😢
```

### Why Use Them?

- Prevent errors from missing arguments.
- Make functions more flexible for users.
- Keep code concise by handling defaults upfront.

:::tip Pro Tip
Default parameters are evaluated when the function runs, not when defined. Great for dynamic defaults like `today = new Date()`.
:::

:::warning Watch Out
Avoid complex defaults that rely on earlier parameters (e.g., `x = y + 1, y = 0`)—`y` might be undefined when `x` is set!
:::

## Rest & Spread Operators: List Superpowers 🌟

The `...` (three dots) operator is a game-changer, doing two jobs: **rest** (collects arguments) and **spread** (expands arrays/objects). It’s like a Swiss Army knife for lists!

### Rest Parameters

Collects all remaining arguments into an array. Perfect for flexible functions.

Example: Sum any number of inputs

```javascript
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
```

Combine with regular parameters:

```javascript
function describePet(name, ...traits) {
    return `${name} is ${traits.join(" and ")}.`;
}
console.log(describePet("Buddy", "fluffy", "loyal", "playful")); // Buddy is fluffy and loyal and playful.
```

### Spread Operator

Spreads an array or object into individual elements. Great for copying or combining.

Example: Copy and combine arrays

```javascript
let fruits = ["apple", "banana"];
let moreFruits = ["orange", ...fruits, "mango"];
console.log(moreFruits); // ["orange", "apple", "banana", "mango"]

let nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3 (spreads array into arguments)
```

Object spread:

```javascript
let pet = { name: "Buddy", type: "dog" };
let updatedPet = { ...pet, age: 3 };
console.log(updatedPet); // { name: "Buddy", type: "dog", age: 3 }
```

### Why Use Rest/Spread?

- Rest: Handle unlimited inputs without predefined parameters.
- Spread: Clone arrays/objects or pass them as arguments easily.

:::tip Rest vs. Spread
Rest collects into an array; spread expands an array/object. Both use `...`, but context matters!
:::

:::warning Shallow Copy
Spread copies top-level properties only. Nested objects are still linked—use deep cloning for those (later topic!).
:::

## Callback Functions: Code That Calls Back 📞

A callback is a function passed as an argument to another function, which calls it later. It’s like giving your friend instructions to run when they’re ready.

Example: Delayed greeting

```javascript
function sayHi(name, callback) {
    console.log(`Processing ${name}...`);
    callback(name);
}
function cheer(name) {
    console.log(`Yay, ${name}! 🎉`);
}
sayHi("Luna", cheer);
// Output:
// Processing Luna...
// Yay, Luna! 🎉
```

Often used with events:

```javascript
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked! 🖱️");
});
```

Callbacks make code asynchronous—great for timers, events, or fetching data (more on async later!).

:::tip Anonymous Callbacks
You can pass unnamed functions directly: `sayHi("Max", name => console.log(name + " rocks!"));`
:::

:::warning Callback Hell
Nesting too many callbacks (e.g., callback in callback in callback) gets messy. We’ll fix this with promises later!
:::

## Higher-Order Functions: Array Transformers 🦋

Higher-order functions take functions as arguments or return them. `map`, `filter`, and `reduce` are array superstars that make data manipulation a breeze.

### map: Transform Each Item

Creates a new array by applying a function to every element.

Example: Double numbers

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original unchanged)
```

Use for conversions, like formatting:

```javascript
let names = ["alice", "bob"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["ALICE", "BOB"]
```

### filter: Keep What Matches

Creates a new array with elements that pass a test (return `true`).

Example: Even numbers

```javascript
let scores = [85, 92, 78, 90];
let passing = scores.filter(score => score >= 80);
console.log(passing); // [85, 92, 90]
```

### reduce: Boil Down to One Value

Combines array into a single result using a reducer function.

Example: Sum an array

```javascript
let prices = [10, 20, 30];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
```

- `sum` is the accumulator (starts at 0, the second argument).
- `price` is the current item.
- Can build objects, strings, etc.: `reduce((obj, item) => ({ ...obj, [item]: true }), {})`

Example: Count occurrences

```javascript
let fruits = ["apple", "banana", "apple"];
let count = fruits.reduce((obj, fruit) => {
    obj[fruit] = (obj[fruit] || 0) + 1;
    return obj;
}, {});
console.log(count); // { apple: 2, banana: 1 }
```

:::tip Why Higher-Order?
`map`, `filter`, `reduce` are readable and don’t mutate the original array. Chain them for power: `numbers.map(x => x * 2).filter(x => x > 5)`.
:::

:::warning Start Value in Reduce
Always set an initial value (e.g., 0 for sums, {} for objects) to avoid errors on empty arrays.
:::

## Practice Time! 🛠️

Try these in your console:

```javascript
// Default parameters
function partyInvite(guest = "friend", time = "7pm") {
    return `${guest}, come at ${time}! 🎈`;
}
console.log(partyInvite()); // friend, come at 7pm! 🎈

// Rest
function listHobbies(...hobbies) {
    return `I love: ${hobbies.join(", ")}`;
}
console.log(listHobbies("coding", "gaming", "reading")); // I love: coding, gaming, reading

// Spread
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Callback
function processData(data, action) {
    return action(data);
}
console.log(processData(5, x => x * x)); // 25

// Higher-order
let nums = [1, 2, 3, 4, 5];
let squares = nums.map(n => n ** 2);
let evens = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(squares, evens, sum); // [1, 4, 9, 16, 25], [2, 4], 15
```

Play: Chain `map` and `filter` to get squares of even numbers!

Questions? Swing by our [GitHub Discussions](https://github.com/sammy6378/reference/discussions). Code on! ✨
