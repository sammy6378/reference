---
title: CSS Layout
sidebar_position: 4
---

# CSS Layout

You’re doing great! Now, let’s arrange elements on the page. CSS layout is how you build headers, sidebars, footers, and more.

## Common Layout Techniques

- **Block & Inline**: Block elements (like `<div>`) stack; inline elements (like `<span>`) flow in a line.
- **Float**: Old-school way to move elements left or right.
- **Flexbox**: Modern, easy way to align and distribute space.
- **Grid**: Powerful for two-dimensional layouts.

Example (Flexbox):

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Example (Grid):

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

:::info
Flexbox is great for navbars; Grid is perfect for page layouts.
:::

## What's Next?

Time to practice! Try a mini project: [CSS Projects](./projects.md).
