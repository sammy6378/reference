---
sidebar_position: 12
title: ES6+ Features
---


You’re rocking the DOM and advanced functions—now it’s time to embrace the sleek, modern vibes of **ES6+** (ECMAScript 2015 and later). These features, introduced starting in 2015, make JavaScript more powerful and fun to write. Think of them as upgrades to your coding spaceship: faster, smoother, and packed with cool tricks.

In this section, we’ll explore **destructuring** to unpack arrays and objects, dive deeper into **template literals** for dynamic strings, use **optional chaining (`?.`)** to avoid errors, and leverage **nullish coalescing (`??`)** for smart defaults. These tools will make your code cleaner and more professional. Let’s blast off into modern JS! 🪐

## Destructuring: Unpack Like a Pro 🎒

Destructuring lets you extract values from arrays or objects into variables in one go—like unpacking a suitcase straight to the right drawers. It’s concise and readable!

### Array Destructuring

Pull values from arrays by position.

Example:

```javascript
let colors = ["red", "blue", "green"];
let [first, second] = colors;
console.log(first, second); // red blue
```

Skip items with commas:

```javascript
let [, , third] = colors;
console.log(third); // green
```

Rest operator for the rest:

```javascript
let [primary, ...others] = colors;
console.log(primary, others); // red ["blue", "green"]
```

Swap values easily:

```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### Object Destructuring

Extract properties by key, with optional renaming.

Example:

```javascript
let pet = { name: "Buddy", type: "dog", age: 3 };
let { name, age } = pet;
console.log(name, age); // Buddy 3
```

Rename variables:

```javascript
let { name: petName, age: petAge } = pet;
console.log(petName, petAge); // Buddy 3
```

Defaults and rest:

```javascript
let { name, color = "brown", ...rest } = pet;
console.log(color, rest); // brown { type: "dog", age: 3 }
```

Nested destructuring:

```javascript
let owner = { name: "Alex", pet: { name: "Buddy" } };
let { pet: { name: petName } } = owner;
console.log(petName); // Buddy
```

Use in functions:

```javascript
function describe({ name, type }) {
    return `${name} is a ${type}.`;
}
console.log(describe(pet)); // Buddy is a dog.
```

:::tip Why Destructure?
Cuts boilerplate (no `pet.name` repetition) and makes function parameters cleaner. Use it everywhere!
:::

:::warning Missing Properties
Object destructuring with non-existent keys gives `undefined` unless you set defaults. Check your data first!
:::

## Template Literals: String Superpowers (Deep Dive) ✨

You met template literals in the beginner section (`` ` `` for strings with `${}`), but let’s unlock their full potential. They’re not just for variables—they handle multi-line strings, expressions, and tagged templates.

### Multi-Line Strings

Write strings across lines without `\n`.

Example:

```javascript
let poem = `
Roses are red,
Violets are blue,
JS is awesome,
And so are you! 🌹
`;
console.log(poem);
// Roses are red,
// Violets are blue,
// JS is awesome,
// And so are you! 🌹
```

### Expressions and Logic

Embed any JS expression in `${}`.

Example:

```javascript
let score = 85;
let status = `You ${score >= 80 ? "passed" : "need practice"} with ${score}%!`;
console.log(status); // You passed with 85%!
```

### Tagged Templates

Pass a template to a function for custom processing. The function gets the strings and values separately.

Example: Custom formatter

```javascript
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let val = values[i] ? `<strong>${values[i]}</strong>` : "";
        return result + str + val;
    }, "");
}
let name = "Luna";
let msg = highlight`Hello, ${name}! Welcome to ${"JS"}!`;
console.log(msg); // Hello, <strong>Luna</strong>! Welcome to <strong>JS</strong>!
```

Use in DOM:

```html
<div id="output"></div>
```

```javascript
document.getElementById("output").innerHTML = msg;
```

:::tip Template Power
Use template literals for all strings—they’re clearer than concatenation (`"Hi " + name`) and handle complex formatting like a breeze.
:::

:::warning Sanitize Inputs
If using template literals with user input for `innerHTML`, sanitize to avoid XSS attacks (e.g., use a library like DOMPurify).
:::

## Optional Chaining (`?.`): Safe Property Access 🛡️

Optional chaining lets you access nested properties without crashing if something’s missing. If a property is `null` or `undefined`, it returns `undefined` instead of throwing an error.

Example:

```javascript
let user = {
    profile: {
        name: "Alex",
        address: { city: "New York" }
    }
};
console.log(user.profile.address.city); // New York
console.log(user.profile?.address?.city); // New York
console.log(user.settings?.theme); // undefined (no error!)
```

Without `?.`, you’d need clunky checks:

```javascript
let theme = user.settings && user.settings.theme ? user.settings.theme : undefined;
```

Use with methods or arrays:

```javascript
console.log(user.profile?.getName?.()); // undefined if getName doesn’t exist
console.log(user.friends?.[0]); // undefined if friends is missing
```

:::tip When to Use
Perfect for APIs or objects with uncertain structures (e.g., fetched data). Saves you from `if` guards everywhere!
:::

:::warning Browser Support
Supported in modern browsers (post-2020). For old browsers, transpile with Babel.
:::

## Nullish Coalescing (`??`): Smarter Defaults 🎯

The nullish coalescing operator (`??`) provides a default value only if the left side is `null` or `undefined`. Unlike `||` (which treats `0`, `""`, or `false` as falsy), `??` is stricter.

Example:

```javascript
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest

let score = 0;
console.log(score ?? 100); // 0 (score isn’t null/undefined)
console.log(score || 100); // 100 (score is falsy, so || picks default)
```

Combine with optional chaining:

```javascript
let theme = user.settings?.theme ?? "light";
console.log(theme); // light (if settings or theme is missing)
```

:::tip Why Nullish?
Use `??` when `0`, `""`, or `false` are valid values but you still need a default for `null`/undefined.
:::

:::warning Precedence
`??` has lower precedence than `||`. Use parentheses if mixing: `(a ?? b) || c`.
:::

## Practice Time! 🛠️

Try this mini-project to combine ES6+ features with DOM:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Profile Card</title>
    <style>
        .card { padding: 20px; border: 1px solid #ccc; margin: 10px; }
        .theme-dark { background: #333; color: white; }
    </style>
</head>
<body>
    <h1>Profile Card 🌟</h1>
    <input id="nameInput" placeholder="Enter name">
    <button id="updateBtn">Update</button>
    <div id="card" class="card"></div>
    <script>
        let user = {
            profile: { name: "Guest", age: 25 },
            settings: null
        };

        function updateCard({ profile: { name, age }, settings } = user) {
            let theme = settings?.theme ?? "light";
            let card = document.getElementById("card");
            card.className = `card theme-${theme}`;
            card.innerHTML = `
                <h2>${name}</h2>
                <p>Age: ${age}</p>
                <p>Theme: ${theme.toUpperCase()}</p>
            `;
        }

        document.getElementById("updateBtn").addEventListener("click", () => {
            let name = document.getElementById("nameInput").value || "Guest";
            user.profile.name = name;
            updateCard(user);
        });

        updateCard(); // Initial render
    </script>
</body>
</html>
```

- Enter a name, click Update—see the card change!
- Uses destructuring, optional chaining, nullish coalescing, and template literals.
- Play: Add a theme toggle or age input.

Questions? Hit up our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
