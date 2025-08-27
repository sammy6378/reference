---
sidebar_position: 1
title: JS Callbacks
---

# JavaScript Callbacks

Welcome to the world of callbacks! 📞 You've actually used these before in our advanced functions section, but now we're diving deeper into their async superpowers. Callbacks are the OG way to handle tasks that take time—they're functions passed to other functions to run when something finishes (or fails).

## What Are Callbacks? 🤔

A callback is simply a function passed as an argument to another function, to be called later when some operation completes. Think of it like giving someone your phone number and saying "call me when you're done."

### Basic Callback Structure

```javascript
function doSomething(callback) {
    // Do some work
    let result = "Work complete!";
    callback(result); // Call the callback with the result
}

function handleResult(message) {
    console.log(`Received: ${message}`);
}

doSomething(handleResult);
// Output: Received: Work complete!
```

## Async Callbacks in Action 🎬

Here's where callbacks really shine—handling operations that take time:

### Simple Timer Example

```javascript
function delayedGreeting(name, callback) {
    console.log(`Starting greeting for ${name}...`);
    setTimeout(() => {
        callback(`Hello, ${name}! 🎉`);
    }, 2000); // Wait 2 seconds
}

delayedGreeting("Luna", message => {
    console.log(message);
});

console.log("This runs immediately!");
// Output:
// Starting greeting for Luna...
// This runs immediately!
// Hello, Luna! 🎉 (after 2 seconds)
```

### Real-World Example: Data Fetching

```javascript
function fetchUserData(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    
    // Simulate network delay
    setTimeout(() => {
        const users = {
            1: { id: 1, name: "Alice", email: "alice@example.com" },
            2: { id: 2, name: "Bob", email: "bob@example.com" }
        };
        
        const user = users[userId];
        if (user) {
            callback(null, user); // Success: error = null, data = user
        } else {
            callback(new Error("User not found"), null); // Error
        }
    }, 1500);
}

// Using the function
fetchUserData(1, (error, user) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.log(`Found user: ${user.name} (${user.email})`);
    }
});
// Output: Found user: Alice (alice@example.com)
```

## Error-First Callbacks 🚨

The Node.js community established a convention called "error-first callbacks" where the first parameter is always an error (or null if no error occurred):

```javascript
function riskyOperation(callback) {
    const success = Math.random() > 0.5; // 50% chance of success
    
    setTimeout(() => {
        if (success) {
            callback(null, "Operation succeeded! 🎉");
        } else {
            callback(new Error("Something went wrong! 💥"));
        }
    }, 1000);
}

riskyOperation((err, result) => {
    if (err) {
        console.error(`Failed: ${err.message}`);
    } else {
        console.log(`Success: ${result}`);
    }
});
```

## The Dark Side: Callback Hell 🌋

When you need to chain multiple async operations, callbacks can create deeply nested, pyramid-shaped code:

```javascript
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback(null, "data1");
    }, 1000);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback(null, data + " + data2");
    }, 1000);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback(null, data + " + data3");
    }, 1000);
}

// The dreaded pyramid of doom!
step1((err1, result1) => {
    if (err1) return console.error(err1);
    
    step2(result1, (err2, result2) => {
        if (err2) return console.error(err2);
        
        step3(result2, (err3, result3) => {
            if (err3) return console.error(err3);
            
            console.log("Final result:", result3);
        });
    });
});
```

This nested structure is hard to read, debug, and maintain. That's why Promises and async/await were invented!

## Callback Best Practices 📋

### 1. Keep It Simple
```javascript
// Good: Simple, focused callback
function processData(data, onComplete) {
    const result = data.map(item => item * 2);
    onComplete(result);
}

// Avoid: Complex logic in callbacks
function fetchAndProcess(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Don't put lots of logic here
            const processed = data.filter(item => item.active)
                                 .map(item => ({ ...item, processed: true }))
                                 .sort((a, b) => a.name.localeCompare(b.name));
            callback(null, processed);
        })
        .catch(err => callback(err));
}
```

### 2. Handle Errors Consistently
```javascript
function safeOperation(callback) {
    try {
        // Your operation here
        const result = performOperation();
        callback(null, result);
    } catch (error) {
        callback(error);
    }
}
```

### 3. Use Named Functions for Complex Logic
```javascript
// Instead of long anonymous functions
function handleUserData(err, user) {
    if (err) {
        console.error("Failed to fetch user:", err.message);
        return;
    }
    
    console.log(`Welcome, ${user.name}!`);
    updateUI(user);
    logActivity(user.id);
}

fetchUserData(1, handleUserData);
```

## Interactive Example 🛠️

Try this hands-on example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Callback Demo</title>
    <style>
        .container { max-width: 600px; margin: 20px; }
        .result { padding: 10px; margin: 10px 0; border-radius: 5px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
        .loading { background: #fff3cd; color: #856404; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Callback Demo 📞</h1>
        <button id="fetchBtn">Fetch Random User</button>
        <div id="result"></div>
    </div>

    <script>
        function fetchRandomUser(callback) {
            const users = [
                { id: 1, name: "Alice", hobby: "Photography" },
                { id: 2, name: "Bob", hobby: "Gaming" },
                { id: 3, name: "Charlie", hobby: "Cooking" },
                { id: 4, name: "Diana", hobby: "Reading" }
            ];
            
            // Simulate network delay
            setTimeout(() => {
                const randomUser = users[Math.floor(Math.random() * users.length)];
                const shouldFail = Math.random() < 0.2; // 20% chance of failure
                
                if (shouldFail) {
                    callback(new Error("Network error! Try again."));
                } else {
                    callback(null, randomUser);
                }
            }, Math.random() * 2000 + 500); // 0.5-2.5 second delay
        }

        function displayResult(err, user) {
            const resultDiv = document.getElementById('result');
            
            if (err) {
                resultDiv.className = 'result error';
                resultDiv.textContent = `Error: ${err.message}`;
            } else {
                resultDiv.className = 'result success';
                resultDiv.innerHTML = `
                    <strong>${user.name}</strong><br>
                    Hobby: ${user.hobby}<br>
                    ID: ${user.id}
                `;
            }
        }

        document.getElementById('fetchBtn').addEventListener('click', () => {
            const resultDiv = document.getElementById('result');
            resultDiv.className = 'result loading';
            resultDiv.textContent = 'Fetching user data...';
            
            fetchRandomUser(displayResult);
        });
    </script>
</body>
</html>
```

## What's Next? 🚀

You've mastered callbacks—the foundation of async JavaScript! But callbacks have limitations (hello, callback hell!). Next, we'll explore [Asynchronous Operations](./asynchronous-operations.md) to understand how JavaScript handles timing and events under the hood.

Understanding callbacks is crucial because:
- Many older APIs still use them
- They help you understand how JavaScript async works
- Promises and async/await build on these concepts

Ready to dive deeper? Let's explore [Asynchronous Operations](./asynchronous-operations.md) next! 🎯

:::tip Remember
Callbacks are just functions—don't overthink them! The key is understanding when they run (after something completes) and how to handle both success and error cases properly.
:::

:::warning Avoid Deep Nesting
If you find yourself nesting more than 2-3 callbacks, consider using Promises or async/await instead. Your future self will thank you! 🙏
:::
