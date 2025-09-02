---
title: CSS Selectors
sidebar_position: 2
---

# CSS Selectors

Great start! Now, let’s learn how to target specific HTML elements with selectors. Selectors are like magic wands—you point at what you want to style.

## What is a Selector?

A selector tells CSS which element(s) to style.

Example:

```css
p {
  color: green;
}
```

This makes all `<p>` elements green.

## Common Selectors

- `element` (e.g., `h1`, `p`): Targets all elements of that type
- `.class`: Targets elements with a specific class
- `#id`: Targets a unique element with an ID
- `*`: Targets everything

Example:

```css
.highlight {
  background: yellow;
}
#main-title {
  font-size: 2em;
}
```

:::info
You can combine selectors for more power: `div p` targets all `<p>` inside `<div>`.
:::

## What's Next?

Let’s dive into how elements are sized and spaced: [CSS Box Model](./box-model.md).
