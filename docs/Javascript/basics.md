# JavaScript Basics

## Introduction

JavaScript is a versatile programming language that runs in browsers and Node.js environments.

## Variables

```javascript
// Modern variable declarations
const name = "John"; // Cannot be reassigned
let age = 25; // Can be reassigned
var city = "NYC"; // Avoid using var
```

## Functions

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;

// Usage
console.log(greet("World"));
```

## Arrays and Objects

```javascript
// Arrays
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");

// Objects
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

## Next Steps

- Learn about [Advanced JavaScript](./advanced)
- Explore [TypeScript](../ts/intro)
