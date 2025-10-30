---
sidebar_position: 18
title: JSON and APIs 
---


You’ve mastered async JavaScript, so now it’s time to talk to the world using **JSON and APIs**. JSON (JavaScript Object Notation) is like a universal language for data—lightweight, readable, and used everywhere from apps to servers. APIs (Application Programming Interfaces) are like doorways to fetch or send that data, letting your app grab jokes, weather, or user info from the internet.

In this section, we’ll learn how to **parse and stringify JSON** to work with data and use the **Fetch API** to connect to real APIs. By the end, you’ll be fetching data like a pro, ready to build dynamic, data-driven apps. Let’s dive into the data stream! 📦

## Parsing and Stringifying JSON: Data Translator 📜

JSON is a text format that looks like JavaScript objects or arrays, used to send data between systems. It’s super simple but strict: keys must be quoted, and only basic types (strings, numbers, booleans, arrays, objects, null) are allowed—no functions or undefined.

### Parsing JSON

Use `JSON.parse()` to convert a JSON string into a JavaScript object or array.

Example:

```javascript
let jsonString = '{"name": "Luna", "age": 25, "hobbies": ["coding", "gaming"]}';
let user = JSON.parse(jsonString);
console.log(user.name); // Luna
console.log(user.hobbies[0]); // coding
```

### Stringifying JSON

Use `JSON.stringify()` to turn a JavaScript object/array into a JSON string for storage or sending.

Example:

```javascript
let pet = { name: "Buddy", type: "dog", age: 3 };
let jsonPet = JSON.stringify(pet);
console.log(jsonPet); // {"name":"Buddy","type":"dog","age":3}
```

Pretty-print with spacing:

```javascript
let prettyJson = JSON.stringify(pet, null, 2);
console.log(prettyJson);
// {
//   "name": "Buddy",
//   "type": "dog",
//   "age": 3
// }
```

### Filtering with Stringify

Use the second argument to filter properties:

```javascript
let jsonNameOnly = JSON.stringify(pet, ["name"]);
console.log(jsonNameOnly); // {"name":"Buddy"}
```

### Error Handling

JSON is picky—invalid JSON throws errors.

```javascript
try {
    let badJson = '{name: "Buddy"}'; // Missing quotes on key
    JSON.parse(badJson); // Throws SyntaxError
} catch (err) {
    console.error("JSON error:", err.message);
}
```

:::tip Why JSON?
JSON is universal—APIs, local storage, and configs love it. It’s like the postcard of data: small, clear, and gets the job done.
:::

:::warning Validate JSON
Always use `try/catch` with `JSON.parse()`—bad JSON (like missing commas) crashes your code!
:::

## Fetch API Basics: Talking to the Web 🌐

The **Fetch API** is JavaScript’s modern way to make HTTP requests (e.g., GET, POST) to APIs or servers. It returns Promises, so it pairs perfectly with async/await for fetching data like user profiles, images, or random facts.

### Basic GET Request

Use `fetch(url)` to get data. It returns a Promise that resolves to a Response object.

Example: Fetch a random dog image

```javascript
async function getDogImage() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await response.json(); // Parse JSON from response
        console.log(data); // { status: "success", message: "https://images.dogapi.com/..." }
    } catch (err) {
        console.error("Fetch error:", err.message);
    }
}
getDogImage();
```

### Checking Response Status

Always check if the response is okay (status 200–299).

```javascript
async function getDogImage() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data.message); // URL of dog image
}
```

### Displaying in the DOM

```html
<img id="dogPic" alt="Random Dog">
<button id="fetchBtn">New Dog!</button>
```

```javascript
async function showDogImage() {
    let img = document.getElementById("dogPic");
    img.alt = "Loading...";
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) throw new Error("Failed to fetch dog!");
        let data = await response.json();
        img.src = data.message;
        img.alt = "Random Dog";
    } catch (err) {
        img.alt = err.message;
    }
}
document.getElementById("fetchBtn").addEventListener("click", showDogImage);
```

### POST Request

Send data to an API with `fetch(url, options)`.

Example: Fake API post

```javascript
async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "My Post", body: "Hello!", userId: 1 })
        });
        if (!response.ok) throw new Error("Post failed!");
        let post = await response.json();
        console.log(post); // { title: "My Post", body: "Hello!", userId: 1, id: 101 }
    } catch (err) {
        console.error("Post error:", err.message);
    }
}
createPost();
```

### Fetch Options

- `method`: GET, POST, PUT, DELETE, etc.
- `headers`: Set content type (e.g., `"application/json"`) or auth tokens.
- `body`: Data to send (stringify for JSON).
- Example:

  ```javascript
  fetch(url, { method: "GET", headers: { Authorization: "Bearer token" } });
  ```

:::tip Why Fetch?
Fetch is built-in, Promise-based, and simpler than older `XMLHttpRequest`. Use it for all HTTP requests!
:::

:::warning Error Handling
Fetch only rejects on network errors—check `response.ok` for HTTP errors (like 404 or 500).
:::

## Practice Time! 🛠️

Try this mini-project to fetch and display user data:

```html
<!DOCTYPE html>
<html>
<head>
    <title>User Fetcher</title>
    <style>
        .card { padding: 20px; border: 1px solid #ccc; margin: 10px; }
        .error { color: red; }
        button { padding: 10px; background: #4CAF50; color: white; border: none; }
    </style>
</head>
<body>
    <h1>User Fetcher 🌟</h1>
    <input id="userId" type="number" placeholder="Enter user ID (1-10)">
    <button id="fetchBtn">Fetch User</button>
    <div id="output" class="card"></div>
    <script>
        async function fetchUser() {
            let output = document.getElementById("output");
            let id = Number(document.getElementById("userId").value);
            output.textContent = "Loading...";
            try {
                let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) throw new Error(`User not found! Status: ${response.status}`);
                let user = await response.json();
                output.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address?.city ?? "Unknown"}</p>
                `;
                output.classList.remove("error");
            } catch (err) {
                output.textContent = err.message;
                output.classList.add("error");
            }
        }
        document.getElementById("fetchBtn").addEventListener("click", fetchUser);
    </script>
</body>
</html>
```

- Enter a user ID (1–10), click Fetch—see their name, email, and city!
- Uses JSON parsing, Fetch, async/await, optional chaining, and nullish coalescing.
- Play: Add a “Fetch All Users” button using `Promise.all`.

Questions? Join our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
