---
sidebar_position: 17
title: Async-Await
---

`async/await` (ES2017) builds on Promises, making async code look synchronous and super readable. It’s like writing a story instead of juggling callbacks or `.then` chains.

### How It Works

- **async**: Marks a function as returning a Promise.
- **await**: Pauses until a Promise resolves (only inside async functions).

Example: Clean user fetch

```javascript
async function fetchUser(id) {
    try {
        let user = await getUser(id); // Waits for Promise
        console.log(user);
        let user2 = await getUser(id + 1);
        console.log(user2);
    } catch (err) {
        console.error(err.message);
    }
}
fetchUser(1);
// Output: { id: 1, name: "User1" }, { id: 2, name: "User2" }
```

### With DOM

```html
<button id="fetchBtn">Fetch User</button>
<div id="output"></div>
```

```javascript
async function displayUser() {
    let output = document.getElementById("output");
    output.textContent = "Loading...";
    try {
        let user = await getUser(1);
        output.textContent = `User: ${user.name}`;
    } catch (err) {
        output.textContent = `Error: ${err.message}`;
    }
}
document.getElementById("fetchBtn").addEventListener("click", displayUser);
```

- `try/catch`: Handles errors like `.catch`.
- `await` only works in `async` functions.
- Combine with `Promise.all` for parallel tasks:

  ```javascript
  let [user1, user2] = await Promise.all([getUser(1), getUser(2)]);
  ```

:::tip Why async/await?
It reads like regular code, reduces nesting, and makes error handling intuitive with `try/catch`.
:::

:::warning Await Scope
`await` must be inside an `async` function. Use IIFEs for top-level awaits in older environments: `(async () => { await ... })();`.
:::

## Practice Time! 🛠️

Try this mini-project to combine async concepts:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Async User Loader</title>
    <style>
        .card { padding: 20px; border: 1px solid #ccc; margin: 10px; }
        .error { color: red; }
    </style>
</head>
<body>
    <h1>Async User Loader 🌐</h1>
    <input id="userId" type="number" placeholder="Enter user ID">
    <button id="loadBtn">Load User</button>
    <div id="output" class="card"></div>
    <script>
        function getUser(id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (id > 0 && id <= 3) {
                        resolve({ id, name: `User${id}` });
                    } else {
                        reject(new Error("Invalid user ID"));
                    }
                }, 1000);
            });
        }

        async function loadUser() {
            let output = document.getElementById("output");
            let id = Number(document.getElementById("userId").value);
            output.textContent = "Loading...";
            try {
                let user = await getUser(id);
                output.textContent = `User: ${user.name}`;
                output.classList.remove("error");
            } catch (err) {
                output.textContent = err.message;
                output.classList.add("error");
            }
        }

        document.getElementById("loadBtn").addEventListener("click", loadUser);
    </script>
</body>
</html>
```

- Enter an ID (1–3), click Load—see the user or an error!
- Uses Promises, async/await, DOM, and error handling.
- Play: Add a “Load All Users” button with `Promise.all`.

Questions? Check out our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
