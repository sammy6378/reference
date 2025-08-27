---
sidebar_position: 3
title: JS Promises
---

# JavaScript Promises

Welcome to the Promise land! 🌟 After wrestling with callback hell, Promises are like a breath of fresh air. They represent a value that might be available now, later, or never. Think of a Promise as a receipt for your coffee order—it's either fulfilled (coffee ready!), rejected (sorry, we're out!), or still pending (brewing...).

## Understanding Promises 🎯

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. Instead of passing callbacks around, you get a Promise object that you can attach callbacks to.

### Promise States

Every Promise has one of three states:

- **Pending** 🔄: Initial state, not fulfilled or rejected yet
- **Fulfilled** ✅: Operation completed successfully  
- **Rejected** ❌: Operation failed

```javascript
// Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation successful! 🎉");
        } else {
            reject(new Error("Something went wrong! 💥"));
        }
    }, 1000);
});

console.log(myPromise); // Promise { <pending> }
```

Once a Promise is settled (fulfilled or rejected), it cannot change states. This immutability is one of Promise's key features!

## Creating Promises 🏗️

### Basic Promise Construction

```javascript
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Alice", email: "alice@example.com" },
                2: { id: 2, name: "Bob", email: "bob@example.com" }
            };
            
            const user = users[userId];
            if (user) {
                resolve(user); // Success!
            } else {
                reject(new Error(`User ${userId} not found`)); // Failure!
            }
        }, 1000);
    });
}

// Promise is created but not yet executed
const userPromise = fetchUserData(1);
console.log("Promise created, fetching user...");
```

### Immediately Resolved/Rejected Promises

```javascript
// Already resolved
const resolvedPromise = Promise.resolve("Instant success! ⚡");

// Already rejected  
const rejectedPromise = Promise.reject(new Error("Instant failure! 💥"));

// Converting values to Promises
const numberPromise = Promise.resolve(42);
const arrayPromise = Promise.resolve([1, 2, 3]);
```

## Consuming Promises 🍽️

### .then() - Handling Success

```javascript
fetchUserData(1)
    .then(user => {
        console.log("User found:", user.name);
        return user.email; // Return value becomes next then's input
    })
    .then(email => {
        console.log("User email:", email);
        return `Welcome, ${email}!`;
    })
    .then(message => {
        console.log(message);
    });

// Output:
// User found: Alice
// User email: alice@example.com  
// Welcome, alice@example.com!
```

### .catch() - Handling Errors

```javascript
fetchUserData(999) // Non-existent user
    .then(user => {
        console.log("This won't run");
        return user.email;
    })
    .catch(error => {
        console.error("Error occurred:", error.message);
        return "default@example.com"; // Provide fallback
    })
    .then(email => {
        console.log("Using email:", email); // Uses fallback
    });

// Output:
// Error occurred: User 999 not found
// Using email: default@example.com
```

### .finally() - Cleanup Code

```javascript
function fetchWithLoader(userId) {
    showLoader(); // Show loading spinner
    
    return fetchUserData(userId)
        .then(user => {
            displayUser(user);
            return user;
        })
        .catch(error => {
            showError(error.message);
            throw error; // Re-throw to maintain error state
        })
        .finally(() => {
            hideLoader(); // Always hide loader
            console.log("Fetch operation completed");
        });
}

function showLoader() { console.log("🔄 Loading..."); }
function hideLoader() { console.log("✅ Loading complete"); }
function displayUser(user) { console.log(`👤 ${user.name}`); }
function showError(msg) { console.log(`❌ ${msg}`); }
```

## Promise Chaining 🔗

Promises shine when you need to perform sequential async operations:

### Sequential Operations

```javascript
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: `User${id}` }), 500);
    });
}

function getUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            `Post 1 by User${userId}`,
            `Post 2 by User${userId}`
        ]), 300);
    });
}

function getPostComments(post) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            `Comment 1 on ${post}`,
            `Comment 2 on ${post}`
        ]), 200);
    });
}

// Chain them together
getUser(1)
    .then(user => {
        console.log("Got user:", user.name);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Got posts:", posts);
        return getPostComments(posts[0]); // Get comments for first post
    })
    .then(comments => {
        console.log("Got comments:", comments);
    })
    .catch(error => {
        console.error("Something failed:", error);
    });
```

### Transforming Data in Chains

```javascript
function processUserData(userId) {
    return fetchUserData(userId)
        .then(user => {
            // Transform user data
            return {
                ...user,
                displayName: user.name.toUpperCase(),
                emailDomain: user.email.split('@')[1]
            };
        })
        .then(enrichedUser => {
            // Add more data
            return {
                ...enrichedUser,
                joinDate: new Date().toISOString(),
                isActive: true
            };
        })
        .then(finalUser => {
            console.log("Processed user:", finalUser);
            return finalUser;
        });
}

processUserData(1);
// Output: Processed user: { id: 1, name: "Alice", displayName: "ALICE", ... }
```

## Promise Static Methods 🛠️

### Promise.all() - Wait for All

All Promises must resolve, or the entire operation fails:

```javascript
const promise1 = fetchUserData(1);
const promise2 = fetchUserData(2);
const promise3 = Promise.resolve("Extra data");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All completed:");
        console.log("User 1:", results[0]);
        console.log("User 2:", results[1]);
        console.log("Extra:", results[2]);
    })
    .catch(error => {
        console.error("At least one failed:", error);
    });

// If any Promise rejects, the entire Promise.all rejects immediately
```

### Promise.allSettled() - Wait for All (Don't Fail Fast)

```javascript
const promises = [
    fetchUserData(1),     // Will succeed
    fetchUserData(999),   // Will fail
    Promise.resolve("OK") // Will succeed
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} succeeded:`, result.value);
            } else {
                console.log(`Promise ${index} failed:`, result.reason.message);
            }
        });
    });

// Output:
// Promise 0 succeeded: { id: 1, name: "Alice", email: "alice@example.com" }
// Promise 1 failed: User 999 not found
// Promise 2 succeeded: OK
```

### Promise.race() - First to Finish Wins

```javascript
function timeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout!')), ms);
    });
}

// Race between data fetch and timeout
Promise.race([
    fetchUserData(1),
    timeout(800) // 800ms timeout
])
    .then(result => {
        console.log("Got result before timeout:", result);
    })
    .catch(error => {
        console.error("Failed or timed out:", error.message);
    });
```

### Promise.any() - First Success Wins

```javascript
const promises = [
    fetchUserData(999),   // Will fail
    fetchUserData(888),   // Will fail
    fetchUserData(1),     // Will succeed
];

Promise.any(promises)
    .then(result => {
        console.log("First success:", result);
    })
    .catch(error => {
        console.error("All failed:", error);
    });
```

## Error Handling Patterns 🚨

### Try-Catch Style with .catch()

```javascript
function robustUserFetch(userId) {
    return fetchUserData(userId)
        .catch(error => {
            if (error.message.includes('not found')) {
                // Handle specific error
                console.log("Creating default user...");
                return { id: userId, name: "Guest User", email: "guest@example.com" };
            } else {
                // Re-throw unknown errors
                throw error;
            }
        });
}

robustUserFetch(999)
    .then(user => console.log("Final user:", user))
    .catch(error => console.error("Unhandled error:", error));
```

### Error Recovery Chains

```javascript
function fetchWithRetry(userId, retries = 3) {
    return fetchUserData(userId)
        .catch(error => {
            if (retries > 0) {
                console.log(`Retrying... ${retries} attempts left`);
                return fetchWithRetry(userId, retries - 1);
            } else {
                throw new Error(`Failed after all retries: ${error.message}`);
            }
        });
}

fetchWithRetry(1, 2)
    .then(user => console.log("Success:", user))
    .catch(error => console.error("Final failure:", error));
```

## Real-World Example: Weather App 🌤️

Let's build a weather app that demonstrates Promise concepts:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Promise Weather App</title>
    <style>
        .container { max-width: 600px; margin: 20px auto; font-family: Arial, sans-serif; }
        .weather-card { background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 10px 0; }
        .loading { background: #fff3cd; color: #856404; }
        .error { background: #f8d7da; color: #721c24; }
        .success { background: #d4edda; color: #155724; }
        input, button { padding: 10px; margin: 5px; font-size: 1em; }
        .forecast { display: flex; gap: 10px; flex-wrap: wrap; }
        .day { background: white; padding: 10px; border-radius: 5px; flex: 1; min-width: 120px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌤️ Promise Weather App</h1>
        <div>
            <input id="cityInput" type="text" placeholder="Enter city name" value="London">
            <button id="fetchBtn">Get Weather</button>
        </div>
        <div id="result"></div>
    </div>

    <script>
        // Simulated weather API
        function fetchWeatherData(city) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const weatherData = {
                        'london': { city: 'London', temp: 15, condition: 'Cloudy', humidity: 80 },
                        'paris': { city: 'Paris', temp: 18, condition: 'Sunny', humidity: 65 },
                        'tokyo': { city: 'Tokyo', temp: 22, condition: 'Rainy', humidity: 90 },
                        'newyork': { city: 'New York', temp: 20, condition: 'Partly Cloudy', humidity: 70 }
                    };
                    
                    const data = weatherData[city.toLowerCase()];
                    if (data) {
                        resolve(data);
                    } else {
                        reject(new Error(`Weather data not found for ${city}`));
                    }
                }, 1000 + Math.random() * 1000); // 1-2 second delay
            });
        }

        function fetchForecast(city) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const forecasts = {
                        'london': [
                            { day: 'Tomorrow', temp: 17, condition: 'Sunny' },
                            { day: 'Day 2', temp: 14, condition: 'Rainy' },
                            { day: 'Day 3', temp: 16, condition: 'Cloudy' }
                        ],
                        'paris': [
                            { day: 'Tomorrow', temp: 20, condition: 'Sunny' },
                            { day: 'Day 2', temp: 19, condition: 'Partly Cloudy' },
                            { day: 'Day 3', temp: 22, condition: 'Sunny' }
                        ]
                    };
                    
                    const forecast = forecasts[city.toLowerCase()];
                    if (forecast) {
                        resolve(forecast);
                    } else {
                        reject(new Error(`Forecast not available for ${city}`));
                    }
                }, 800);
            });
        }

        function displayWeather(weather, forecast = null) {
            const result = document.getElementById('result');
            
            let html = `
                <div class="weather-card success">
                    <h2>🌍 ${weather.city}</h2>
                    <p><strong>Temperature:</strong> ${weather.temp}°C</p>
                    <p><strong>Condition:</strong> ${weather.condition}</p>
                    <p><strong>Humidity:</strong> ${weather.humidity}%</p>
                </div>
            `;
            
            if (forecast) {
                html += `
                    <div class="weather-card success">
                        <h3>📅 3-Day Forecast</h3>
                        <div class="forecast">
                            ${forecast.map(day => `
                                <div class="day">
                                    <strong>${day.day}</strong><br>
                                    ${day.temp}°C<br>
                                    ${day.condition}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            result.innerHTML = html;
        }

        function displayError(message) {
            const result = document.getElementById('result');
            result.innerHTML = `
                <div class="weather-card error">
                    <h2>❌ Error</h2>
                    <p>${message}</p>
                </div>
            `;
        }

        function displayLoading() {
            const result = document.getElementById('result');
            result.innerHTML = `
                <div class="weather-card loading">
                    <h2>🔄 Loading Weather Data...</h2>
                    <p>Fetching current weather and forecast...</p>
                </div>
            `;
        }

        function getWeatherWithForecast(city) {
            displayLoading();
            
            // Fetch weather and forecast in parallel
            Promise.all([
                fetchWeatherData(city),
                fetchForecast(city).catch(() => null) // Don't fail if forecast unavailable
            ])
                .then(([weather, forecast]) => {
                    displayWeather(weather, forecast);
                })
                .catch(error => {
                    // If weather fails, try without forecast
                    return fetchWeatherData(city)
                        .then(weather => displayWeather(weather))
                        .catch(() => displayError(error.message));
                });
        }

        // Event listeners
        document.getElementById('fetchBtn').addEventListener('click', () => {
            const city = document.getElementById('cityInput').value.trim();
            if (city) {
                getWeatherWithForecast(city);
            } else {
                displayError('Please enter a city name');
            }
        });

        document.getElementById('cityInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('fetchBtn').click();
            }
        });

        // Load default city on page load
        getWeatherWithForecast('London');
    </script>
</body>
</html>
```

This example demonstrates:
- Promise creation and consumption
- `Promise.all()` for parallel operations
- Error handling with `.catch()`
- Graceful degradation (forecast optional)
- Real-world async patterns

## Best Practices 📋

### 1. Always Handle Errors
```javascript
// Good
fetchData()
    .then(result => processResult(result))
    .catch(error => handleError(error));

// Bad - unhandled promise rejection
fetchData()
    .then(result => processResult(result));
```

### 2. Return Promises from Functions
```javascript
// Good - return the Promise
function getUserProfile(id) {
    return fetchUserData(id)
        .then(user => enhanceUserData(user));
}

// Bad - doesn't return Promise
function getUserProfile(id) {
    fetchUserData(id)
        .then(user => enhanceUserData(user));
}
```

### 3. Avoid the "Pyramid of Doom" 2.0
```javascript
// Bad - nested Promises (defeating the purpose!)
fetchUser(1)
    .then(user => {
        fetchPosts(user.id)
            .then(posts => {
                fetchComments(posts[0].id)
                    .then(comments => {
                        console.log(comments);
                    });
            });
    });

// Good - flat chain
fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
```

## What's Next? 🚀

Promises are powerful, but there's an even cleaner way to write async code! Next, we'll explore [Async/Await](./async-await), which makes asynchronous code look and feel like synchronous code. It's built on top of Promises, so everything you've learned here applies!

Ready to make async code even more readable? Let's dive into [Async/Await](./async-await)! 🎯

:::tip Promise Memory
Promises are "eager" - they start executing immediately when created. If you need "lazy" execution, wrap them in functions! 🏃‍♂️
:::

:::warning Common Mistake
Forgetting to `return` in Promise chains breaks the chain. Always return values or Promises from `.then()` handlers! 🔗
:::
