---
sidebar_position: 13
title: Error Handling
---

You’re fetching data and manipulating the DOM like a champ, but sometimes things go wrong—invalid inputs, network failures, or pesky bugs. That’s where **error handling** comes in, saving your app from crashing and keeping users happy. Think of it as your code’s safety net, catching problems before they spiral out of control.

In this section, we’ll master **try...catch** for handling errors, **throwing errors** to flag issues, **custom errors** for tailored messages, and some slick **console tricks** to debug like a detective. By the end, your code will be tough as nails. Let’s dive in! 🔍

## try...catch: Your Safety Net 🪢

The `try...catch` block lets you test code (`try`) and handle any errors that pop up (`catch`) without crashing your app. It’s perfect for risky operations like JSON parsing, API calls, or DOM access.

### Basic Structure

```javascript
try {
    // Code that might fail
} catch (error) {
    // Handle the error
} finally {
    // Always runs, error or not (optional)
}
```

Example: JSON parsing

```javascript
let badJson = '{ "name": "Luna"'; // Missing closing }
try {
    let user = JSON.parse(badJson);
    console.log(user);
} catch (error) {
    console.error("Oops:", error.message); // SyntaxError: Unexpected end of JSON input
} finally {
    console.log("Parsing attempt done!");
}
```

### With Async/Await

Works great with `async` functions for API calls.

```javascript
async function fetchUser(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        let user = await response.json();
        console.log(user.name);
    } catch (error) {
        console.error("Fetch failed:", error.message);
    }
}
fetchUser(999); // Fetch failed: HTTP error: 404
```

:::tip When to Use
Wrap risky code (JSON, API, DOM, file ops) in `try...catch` to avoid crashes and show user-friendly messages.
:::

:::warning Catch Specificity
`error` in `catch` is an object with `name` (e.g., "SyntaxError") and `message`. Log both for clarity!
:::

## Throwing Errors: Raise the Alarm 🚨

You can **throw** errors to signal problems in your code, using `throw` with a string, object, or `Error` instance. This lets you control what goes wrong and why.

Example: Validate input

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message); // Division by zero is not allowed!
}
```

Throw anything:

```javascript
throw "Something broke!"; // Works, but Error objects are better
throw { code: 400, message: "Bad input" };
```

:::tip Why Throw?
Throw errors to stop execution early and provide clear reasons for failures, especially in functions or APIs.
:::

## Custom Errors: Tailored Alerts 📢

Create your own error types by extending the `Error` class for specific cases, like validation or authentication errors.

Example:

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function checkAge(age) {
    if (typeof age !== "number" || age < 0) {
        throw new ValidationError("Age must be a positive number!");
    }
    return `Age is ${age}`;
}

try {
    console.log(checkAge(-5));
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation failed:", error.message);
    } else {
        console.error("Other error:", error.message);
    }
}
// Validation failed: Age must be a positive number!
```

:::tip Custom Power
Use custom errors to differentiate between types of issues (e.g., network vs. input errors) for better debugging and user messages.
:::

:::warning Instance Check
Use `instanceof` to check error types in `catch`—helps handle specific errors differently.
:::

## Console Tricks: Debug Like a Pro 🕵️‍♀️

The `console` object is your debugging sidekick, with more than just `console.log`. Here are some tricks to level up your debugging game!

### console.table: Pretty Tables

Display arrays or objects as tables for clarity.

```javascript
let users = [
    { id: 1, name: "Luna", age: 25 },
    { id: 2, name: "Max", age: 30 }
];
console.table(users);
// ┌─────────┬────┬───────┬─────┐
// │ (index) │ id │ name  │ age │
// ├─────────┼────┼───────┼─────┤
// │ 0       │ 1  │ Luna  │ 25  │
// │ 1       │ 2  │ Max   │ 30  │
// └─────────┴────┴───────┴─────┘
```

### console.time: Measure Speed

Time how long code takes to run.

```javascript
console.time("loop");
for (let i = 0; i < 1000; i++) {
    // Simulate work
}
console.timeEnd("loop"); // loop: 0.123ms (time varies)
```

### console.warn: Yellow Alerts

Show warnings in yellow for attention.

```javascript
console.warn("This API is deprecated—update soon!"); // Yellow warning in console
```

Other tricks:

- `console.error("Red alert!")`: Red error message.
- `console.group("My Logs")`: Group logs for clarity, end with `console.groupEnd()`.
- `console.clear()`: Clear the console.

:::tip Console Power
Use `console.table` for data inspection, `console.time` for performance, and `console.warn` for non-critical issues.
:::

:::warning Overlogging
Too many console logs slow down your app in production. Remove or comment them out before deploying!
:::

## Practice Time! 🛠️

Try this mini-project to combine error handling with a DOM-based API fetcher:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Error-Proof User Fetcher</title>
    <style>
        .card { padding: 20px; border: 1px solid #ccc; margin: 10px; }
        .error { color: red; }
        button { padding: 10px; background: #4CAF50; color: white; border: none; }
        input { padding: 8px; }
    </style>
</head>
<body>
    <h1>Error-Proof User Fetcher 🌟</h1>
    <input id="userId" type="number" placeholder="Enter user ID (1-10)">
    <button id="fetchBtn">Fetch User</button>
    <div id="output" class="card"></div>
    <script>
        class ApiError extends Error {
            constructor(message, status) {
                super(message);
                this.name = "ApiError";
                this.status = status;
            }
        }

        async function fetchUser(id) {
            if (!Number.isInteger(id) || id < 1) {
                throw new ValidationError("ID must be a positive integer!");
            }
            console.time("fetchUser");
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.timeEnd("fetchUser");
            if (!response.ok) {
                throw new ApiError(`Failed to fetch user! Status: ${response.status}`, response.status);
            }
            return await response.json();
        }

        document.getElementById("fetchBtn").addEventListener("click", async () => {
            let output = document.getElementById("output");
            let id = Number(document.getElementById("userId").value);
            output.textContent = "Loading...";
            try {
                let user = await fetchUser(id);
                console.table(user); // Pretty table
                output.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address?.city ?? "Unknown"}</p>
                `;
                output.classList.remove("error");
            } catch (error) {
                output.textContent = `${error.name}: ${error.message}`;
                output.classList.add("error");
                if (error instanceof ApiError) {
                    console.warn(`API issue - Status: ${error.status}`);
                } else {
                    console.error("Error:", error.message);
                }
            }
        });
    </script>
</body>
</html>
```

- Enter a user ID (1–10), click Fetch—see the user or an error message!
- Uses `try...catch`, custom errors (`ApiError`, `ValidationError`), and console tricks (`table`, `time`, `warn`).
- Play: Add a retry button for failed API calls or log errors in a table.

Questions? Join our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
