---
sidebar_position: 7
title: Arrays
---

You've got functions nailed, so now let’s dive into arrays—your go-to tool for storing lists of stuff.

Arrays are your data superstars—lists made easy! Next, we'll tackle objects to store key-value data like a pro. Hop to [Objects](./objects.md) and keep the vibe going.

## Creating Arrays: Your List Builder 📋

Arrays are ordered lists where each item has an index (starting at 0). You can store anything—numbers, strings, booleans, even mixed types!

### Ways to Create Arrays

1. **Array Literal (Simplest)**: Use square brackets `[]`.

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   console.log(fruits); // ["apple", "banana", "orange"]
   console.log(fruits[0]); // apple (index 0)
   console.log(fruits[2]); // orange (index 2)
   ```

2. **Array Constructor**: Less common but works.

   ```javascript
   let numbers = new Array(1, 2, 3);
   console.log(numbers); // [1, 2, 3]
   ```

3. **Empty Array**: Start empty, fill later.

   ```javascript
   let tasks = [];
   tasks[0] = "Learn JS";
   console.log(tasks); // ["Learn JS"]
   ```

- Access items with `array[index]`.
- Get length with `array.length` (e.g., `fruits.length` is 3).
- Mix types? No problem: `let mix = [1, "hi", true];`

:::tip Pro Tip
Stick to `[]` for creating arrays—it’s shorter and clearer. Use `new Array()` only for special cases (like pre-sized arrays).
:::

:::warning Index Out of Bounds
`fruits[10]` gives `undefined` if the index doesn’t exist. Check `length` to stay safe!
:::

## Common Array Methods: Your Toolkit 🛠️

Arrays come with built-in methods to add, remove, or find items. Here are the must-knows for beginners!

### push: Add to End

Adds one or more items to the array’s end. Grows the array!

```javascript
let pets = ["dog", "cat"];
pets.push("goldfish");
console.log(pets); // ["dog", "cat", "goldfish"]
pets.push("bird", "hamster"); // Add multiple
console.log(pets); // ["dog", "cat", "goldfish", "bird", "hamster"]
```

### pop: Remove from End

Removes (and returns) the last item. Shrinks the array!

```javascript
let last = pets.pop();
console.log(last); // "hamster"
console.log(pets); // ["dog", "cat", "goldfish", "bird"]
```

### shift: Remove from Start

Removes (and returns) the first item. Everything slides left.

```javascript
let first = pets.shift();
console.log(first); // "dog"
console.log(pets); // ["cat", "goldfish", "bird"]
```

### unshift: Add to Start

Adds one or more items to the start. Everything slides right.

```javascript
pets.unshift("turtle");
console.log(pets); // ["turtle", "cat", "goldfish", "bird"]
```

### indexOf: Find an Item

Returns the index of the first match, or -1 if not found.

```javascript
let index = pets.indexOf("cat");
console.log(index); // 1
console.log(pets.indexOf("dragon")); // -1 (not there!)
```

:::info More Methods
Want to explore? Try `slice`, `splice`, or `includes`. We’ll cover them later, but `pets.includes("cat")` checks if it’s there (true/false).
:::

:::warning Case-Sensitive
`indexOf("Cat")` won’t find "cat". JS is picky—match exactly!
:::

## Iterating Arrays: Loop the Loop 🔄

To work with each item, loop through the array. We’ll use `for` (classic) and `forEach` (modern and clean).

### For Loop: Full Control

Use when you need the index or want to customize.

```javascript
let scores = [85, 90, 95];
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}: ${scores[i]}`);
}
// Output:
// Score 1: 85
// Score 2: 90
// Score 3: 95
```

Great for skipping items or breaking early.

### forEach: Clean and Simple

Runs a function for each item. No manual index management!

```javascript
scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});
// Same output as above
```

- `score` is the item, `index` is optional.
- Can’t `break` or `continue`—runs fully.

Example: Emoji party!

```javascript
let emojis = ["😺", "🐶", "🐟"];
emojis.forEach(emoji => console.log(emoji + " is cute!"));
// 😺 is cute!
// 🐶 is cute!
// 🐟 is cute!
```

:::tip For vs. forEach
Use `for` for control (skip, break). Use `forEach` for simplicity when you just want to do something with each item.
:::

:::info For...Of Bonus
From last section: `for (let emoji of emojis) { ... }` works too! No index, just values.
:::

## Practice Time! 🛠️

Fire up your console and try:

```javascript
// Create and modify
let groceries = ["milk", "bread"];
groceries.push("eggs");
groceries.unshift("butter");
console.log(groceries); // ["butter", "milk", "bread", "eggs"]

// Pop and shift
let last = groceries.pop();
let first = groceries.shift();
console.log(last, first); // "eggs" "butter"

// Find index
console.log(groceries.indexOf("milk")); // 0

// Loop it
groceries.forEach(item => console.log(`Buy ${item}`));

// For loop with condition
for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === "bread") {
        console.log("Found bread at index " + i);
    }
}
```

Play: Add more items, find one that’s not there, or skip an item in the loop.

Got questions? Swing by our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
