---
sidebar_position: 5
title: Loops
---


You've got decisions down pat—now let's add repetition to the mix. Loops are like your code's treadmill: they run the same block over and over until a condition says "stop!" Why? To handle lists, count things, or repeat actions without copying code a zillion times. Imagine printing "Hello" 100 times manually—boring! Loops make it effortless.

In JS, we've got classic loops like for, while, and do-while for general repeating. Then, special ones like for...of and for...in for cruising through collections. We'll keep it fun with examples you can try right away. No infinite loops here (well, maybe one warning about them). Let's spin into action! 🌀

## For Loop: The Countdown Classic ⏰

The `for` loop is your go-to for a known number of repeats. It's like saying, "Do this 10 times."

Structure:

```javascript
for (initializer; condition; increment) {
    // Code to repeat
}
```

- Initializer: Set up (e.g., let i = 0)
- Condition: Keep going while true (e.g., i &lt; 10)
- Increment: Update after each loop (e.g., i++)

Example: Blast off!

```javascript
for (let i = 5; i > 0; i--) {
    console.log(i + "...");
}
console.log("Liftoff! 🚀");
// Output: 5... 4... 3... 2... 1... Liftoff! 🚀
```

Nested loops? Sure—for grids or multiplication tables.

```javascript
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += "* ";
    }
    console.log(line); // Prints a 3x3 star grid!
}
```

:::tip When to For?
Use for when you know the repeat count upfront, like arrays or ranges.
:::

:::warning Infinite Loop Alert
If condition never falses (e.g., `for(;;){}`), your code hangs! Always update towards the exit.
:::

## While Loop: Keep Going Until... 🏃‍♀️

`while` loops run as long as a condition is true. Great when the end depends on something changing inside.

Structure:

```javascript
while (condition) {
    // Code
    // Update something!
}
```

Example: Guessing game tease!

```javascript
let guess = 0;
while (guess < 5) {
    console.log("Too low!");
    guess++; // Don't forget this!
}
console.log("You got it! 🎯");
// Output: Too low! (5 times) then You got it!
```

Simpler than for, but watch that update—easy to forget and loop forever!

## Do...While Loop: At Least Once Guarantee 🔂

Like while, but checks condition AFTER running. So, it always executes at least once—even if condition starts false.

Structure:

```javascript
do {
    // Code first!
} while (condition);
```

Example: Persistent prompt!

```javascript
let count = 0;
do {
    console.log("Looping! Count: " + count);
    count++;
} while (count < 3);
// Output: Looping! Count: 0 / 1 / 2 (runs 3 times)
```

Even if count started at 3:

```javascript
let count = 3;
do {
    console.log("Still runs once!");
} while (count < 3); // Outputs once, even though false
```

:::tip Do-While Niche
Use for user input: Ask first, then check if valid.
:::

:::info Break and Continue
In any loop: `break;` exits early. `continue;` skips to next iteration.
Example: `for(let i=0; i<5; i++){ if(i===3) continue; console.log(i); }` // Skips 3
:::

## For...Of and For...In: Collection Cruisers 🗺️

These are modern (ES6) loops for iterating over stuff like arrays or objects. No manual indexing!

### For...Of: Values from Iterables 🔑

Loops over values in arrays, strings, maps, etc. Super clean!

Example: Array adventure!

```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color + " is awesome! 🌈");
}
// Output: red is awesome! etc.
```

Works on strings too:

```javascript
let word = "hello";
for (let char of word) {
    console.log(char); // h e l l o
}
```

Can't access index easily—use .entries() if needed.

### For...In: Keys from Objects 🏷️

Loops over property names (keys) in objects. Also works on arrays (keys are indices).

Example: Object inspector!

```javascript
let person = { name: "Alex", age: 28, job: "Coder" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: name: Alex / age: 28 / job: Coder
```

For arrays:

```javascript
let nums = [10, 20, 30];
for (let index in nums) {
    console.log("Index " + index + ": " + nums[index]);
}
// Output: Index 0: 10 etc.
```

:::tip Of vs. In
For...of for values (arrays/strings). For...in for keys (objects/arrays). Avoid for...in on arrays if order matters—it might not preserve it!
:::

:::warning Prototype Pitfall
For...in includes inherited properties. Use hasOwnProperty: `if (person.hasOwnProperty(key)) { ... }`
:::

## Practice Time! 🛠️

Loop it up in your console:

```javascript
// For loop: Sum 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum: " + sum); // 55

// While: Countdown
let timer = 3;
while (timer > 0) {
    console.log(timer--);
}
console.log("Go!");

// Do-while: At least one
let tries = 0;
do {
    console.log("Trying...");
    tries++;
} while (tries < 2); // Tries twice

// For-of: Greet friends
let friends = ["Sam", "Pat", "Lee"];
for (let friend of friends) {
    console.log("Hi, " + friend + "!");
}

// For-in: Pet details
let pet = { type: "dog", name: "Buddy", age: 5 };
for (let prop in pet) {
    console.log(prop + ": " + pet[prop]);
}
```

Mix and match—what if you break early in the sum loop?

Stuck in a loop? Head to our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
