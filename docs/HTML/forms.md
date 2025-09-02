---
title: HTML Forms
sidebar_position: 4
---

# HTML Forms

You’re doing great! Now, let’s learn how to collect information from users with forms. Forms are how websites get input—like sign-ups, searches, or feedback.

## What is a Form?

A form is an element that contains input fields, buttons, and more. It sends data to a server (or handles it in JavaScript).

Example:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <button type="submit">Submit</button>
</form>
```

- `<form>` wraps the whole form
- `<label>` describes the input
- `<input>` is where users type
- `<button>` submits the form

## Common Input Types

- `text`, `password`, `email`, `number`, `checkbox`, `radio`, `submit`

Example:

```html
<input type="email" placeholder="you@example.com" />
<input type="checkbox" /> I agree
```

:::info
Forms can be styled with CSS and made interactive with JavaScript.
:::

## What's Next?

Let’s put your skills to the test! Try a mini project: [HTML Projects](./projects.md).
