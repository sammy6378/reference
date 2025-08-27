---
sidebar_position: 2
title: JS Asynchronous Operations
---

# JavaScript Asynchronous Operations

Time to peek behind the curtain! ⏰ You've learned about callbacks, but how does JavaScript actually handle asynchronous operations? Let's explore timers, events, and the magical event loop that makes it all work. Understanding this will make you a better async programmer!

## The Single-Threaded Reality 🧵

JavaScript is **single-threaded**, meaning it can only do one thing at a time. But wait—how can it handle user clicks, timers, and network requests simultaneously? The secret is the **event loop** and **Web APIs**!

```javascript
console.log("1: Start");

setTimeout(() => {
    console.log("2: Timer callback");
}, 0); // Even with 0ms delay!

console.log("3: End");

// Output:
// 1: Start
// 3: End
// 2: Timer callback
```

Even with a 0ms delay, the timer callback runs after the synchronous code. Why? Let's find out!

## The Event Loop Explained 🔄

The event loop is JavaScript's traffic controller. Here's how it works:

1. **Call Stack**: Where functions execute (LIFO - Last In, First Out)
2. **Web APIs**: Browser features like timers, events, HTTP requests
3. **Callback Queue**: Where completed async callbacks wait
4. **Event Loop**: Moves callbacks from queue to stack when stack is empty

### Visual Example

```javascript
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    setTimeout(() => {
        console.log("Timer in second");
    }, 0);
    third();
}

function third() {
    console.log("Third function");
}

first();

// Output:
// First function
// Second function  
// Third function
// Timer in second
```

**What happens:**

1. `first()` → Call Stack
2. `second()` → Call Stack
3. `setTimeout()` → Web API (timer starts)
4. `third()` → Call Stack
5. Functions finish, stack empties
6. Event loop moves timer callback to stack
7. Timer callback executes

## Timers and Delays ⏱️

### setTimeout: Run Once After Delay

```javascript
// Basic usage
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// With parameters
function greet(name, emoji) {
    console.log(`Hello ${name}! ${emoji}`);
}

setTimeout(greet, 1000, "Alice", "👋");

// Storing timer reference
const timerId = setTimeout(() => {
    console.log("This might not run");
}, 5000);

// Cancel the timer
clearTimeout(timerId);
console.log("Timer canceled!");
```

### setInterval: Run Repeatedly

```javascript
// Basic interval
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Count: ${counter}`);
    
    if (counter >= 5) {
        clearInterval(intervalId);
        console.log("Interval stopped!");
    }
}, 1000);

// Output every second:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
// Interval stopped!
```

### Common Timer Patterns

#### Delayed Execution Chain

```javascript
function delayedChain() {
    console.log("Step 1");
    
    setTimeout(() => {
        console.log("Step 2 (after 1s)");
        
        setTimeout(() => {
            console.log("Step 3 (after 2s total)");
        }, 1000);
    }, 1000);
}

delayedChain();
```

#### Self-Canceling Timer

```javascript
function createCountdown(seconds, callback) {
    let remaining = seconds;
    
    const timer = setInterval(() => {
        console.log(`${remaining} seconds remaining...`);
        remaining--;
        
        if (remaining < 0) {
            clearInterval(timer);
            console.log("Time's up! ⏰");
            callback && callback();
        }
    }, 1000);
    
    return timer; // Return timer ID for manual cancellation
}

createCountdown(3, () => {
    console.log("Countdown completed!");
});
```

## Event-Driven Programming 🎯

JavaScript is fundamentally event-driven. User interactions, network responses, and timers all generate events that your code can respond to.

### DOM Events (Review)

```javascript
// Click events
document.getElementById('myButton').addEventListener('click', (event) => {
    console.log('Button clicked!', event.target);
});

// Multiple event types
const input = document.getElementById('myInput');
input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
input.addEventListener('input', (e) => console.log('Value:', e.target.value));
```

### Custom Events

```javascript
// Create custom event
const customEvent = new CustomEvent('userLoggedIn', {
    detail: { username: 'alice', timestamp: Date.now() }
});

// Listen for custom event
document.addEventListener('userLoggedIn', (event) => {
    console.log(`User ${event.detail.username} logged in at ${new Date(event.detail.timestamp)}`);
});

// Trigger the event
document.dispatchEvent(customEvent);
```

### Event Emitter Pattern (Node.js Style)

```javascript
class SimpleEventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Usage
const emitter = new SimpleEventEmitter();

emitter.on('dataReceived', (data) => {
    console.log('Received:', data);
});

emitter.on('dataReceived', (data) => {
    console.log('Also handling:', data);
});

emitter.emit('dataReceived', { message: 'Hello World!' });
// Output:
// Received: { message: 'Hello World!' }
// Also handling: { message: 'Hello World!' }
```

## Advanced Timing Concepts 🔄

### requestAnimationFrame: Smooth Animations

For animations, use `requestAnimationFrame` instead of `setInterval`:

```javascript
function animateBox() {
    const box = document.getElementById('animatedBox');
    let position = 0;
    
    function frame() {
        position += 2;
        box.style.left = position + 'px';
        
        if (position < 400) {
            requestAnimationFrame(frame); // Continue animation
        }
    }
    
    requestAnimationFrame(frame); // Start animation
}

// Better than setInterval for smooth 60fps animations
```

### Throttling and Debouncing

Control how often functions execute:

#### Throttling: Limit execution rate

```javascript
function throttle(func, delay) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Usage: Limit scroll handler to run at most once every 100ms
const throttledScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);
```

#### Debouncing: Delay execution until activity stops

```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage: Search only after user stops typing for 300ms
const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
    // Perform search...
}, 300);

document.getElementById('searchInput').addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

## Practical Example: Real-Time Clock 🕒

Let's build a real-time clock that demonstrates multiple async concepts:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Async Clock Demo</title>
    <style>
        .clock-container {
            font-family: 'Courier New', monospace;
            font-size: 2em;
            text-align: center;
            margin: 50px;
        }
        .clock {
            background: #000;
            color: #0f0;
            padding: 20px;
            border-radius: 10px;
            display: inline-block;
        }
        .controls {
            margin: 20px;
        }
        button {
            margin: 5px;
            padding: 10px 20px;
            font-size: 1em;
        }
        .alarm {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="clock-container">
        <div id="clock" class="clock">00:00:00</div>
        <div class="controls">
            <button id="startBtn">Start Clock</button>
            <button id="stopBtn">Stop Clock</button>
            <button id="alarmBtn">Set 5s Alarm</button>
            <div id="status"></div>
        </div>
    </div>

    <script>
        class DigitalClock {
            constructor(displayElement, statusElement) {
                this.display = displayElement;
                this.status = statusElement;
                this.isRunning = false;
                this.intervalId = null;
                this.alarmTimeout = null;
            }
            
            start() {
                if (this.isRunning) return;
                
                this.isRunning = true;
                this.status.textContent = "Clock running...";
                
                // Update immediately, then every second
                this.updateTime();
                this.intervalId = setInterval(() => {
                    this.updateTime();
                }, 1000);
            }
            
            stop() {
                if (!this.isRunning) return;
                
                this.isRunning = false;
                clearInterval(this.intervalId);
                this.status.textContent = "Clock stopped.";
            }
            
            updateTime() {
                const now = new Date();
                const timeString = now.toLocaleTimeString();
                this.display.textContent = timeString;
            }
            
            setAlarm(seconds) {
                if (this.alarmTimeout) {
                    clearTimeout(this.alarmTimeout);
                }
                
                this.status.textContent = `Alarm set for ${seconds} seconds...`;
                
                this.alarmTimeout = setTimeout(() => {
                    this.status.innerHTML = '<span class="alarm">⏰ ALARM! Time\'s up!</span>';
                    
                    // Clear alarm message after 3 seconds
                    setTimeout(() => {
                        this.status.textContent = this.isRunning ? "Clock running..." : "Clock stopped.";
                    }, 3000);
                }, seconds * 1000);
            }
        }

        // Initialize clock
        const clockDisplay = document.getElementById('clock');
        const statusDisplay = document.getElementById('status');
        const clock = new DigitalClock(clockDisplay, statusDisplay);

        // Event listeners
        document.getElementById('startBtn').addEventListener('click', () => {
            clock.start();
        });

        document.getElementById('stopBtn').addEventListener('click', () => {
            clock.stop();
        });

        document.getElementById('alarmBtn').addEventListener('click', () => {
            clock.setAlarm(5);
        });

        // Start clock automatically
        clock.start();
    </script>
</body>
</html>
```

This example demonstrates:

- `setInterval` for repeating updates
- `setTimeout` for delayed actions
- Event listeners for user interaction
- Proper cleanup with `clearInterval` and `clearTimeout`
- State management in async context

## Key Takeaways 🎯

1. **JavaScript is single-threaded** but uses the event loop to handle async operations
2. **Web APIs** handle timers, events, and other async tasks outside the main thread
3. **setTimeout/setInterval** are your basic timing tools
4. **Event-driven programming** is fundamental to JavaScript
5. **Throttling and debouncing** help control function execution rates
6. **Always clean up** timers and event listeners to prevent memory leaks

## What's Next? 🚀

You now understand how JavaScript handles asynchronous operations under the hood! This knowledge will make the next concepts much clearer. Let's move on to [Promises](./promises.md), which provide a much cleaner way to handle async operations than callbacks.

Ready to escape callback hell? Let's dive into [Promises](./promises.md)! 🎯

:::tip Performance Tip
Use `requestAnimationFrame` for animations, `setTimeout` for delays, and `setInterval` sparingly. Always clear timers when done to prevent memory leaks! 🧹
:::

:::warning Event Loop Gotcha
Even `setTimeout(fn, 0)` doesn't run immediately—it waits for the current execution to finish. Understanding this helps debug timing issues! 🐛
:::
