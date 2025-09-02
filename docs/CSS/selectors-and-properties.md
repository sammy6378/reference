---
title: Selectors & Properties
sidebar_position: 2
---

# Selectors & Properties

Selectors are how you target HTML elements to style them. Properties are what you change (like color, font, size).

## Basic Selectors
- `element` (e.g., `h1`, `p`): All elements of that type
- `.class`: Elements with a specific class
- `#id`: A unique element with an ID
- `*`: Everything

Example:
```css
.highlight {
  background: yellow;
}
#main-title {
  font-size: 2em;
}
```

## Pseudo-classes
- `:hover`, `:nth-child(2)`, etc.

Example:
```css
a:hover {
  color: red;
}
li:nth-child(2) {
  font-weight: bold;
}
```

## Pseudo-elements
- `::before`, `::after`, etc.

Example:
```css
p::before {
  content: "★ ";
}
```

## What's Next?

Let’s understand the box model: [Box Model](./box-model.md).
