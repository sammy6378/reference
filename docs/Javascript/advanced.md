# Advanced JavaScript

## Promises and Async/Await

```javascript
// Promise example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

// Async/await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## ES6+ Features

```javascript
// Destructuring
const { name, age } = person;
const [first, second] = array;

// Spread operator
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProperty: "value" };

// Template literals
const message = `Hello ${name}, you are ${age} years old`;
```

## Modules

```javascript
// Export
export const myFunction = () => {};
export default MyClass;

// Import
import { myFunction } from './module.js';
import MyClass from './MyClass.js';
```
