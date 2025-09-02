---
title: Box Model
sidebar_position: 3
---

# Box Model

Every HTML element is a box! The box model is the secret to spacing, borders, and layout.

## Parts of the Box Model
- **Content**: The actual text or image
- **Padding**: Space inside the box, around the content
- **Border**: The edge of the box
- **Margin**: Space outside the box, separating it from others

Example:
```css
div {
  margin: 20px;
  border: 2px solid #333;
  padding: 10px;
}
```

## Display Property
- `block`: Starts on a new line, takes full width (e.g., `<div>`, `<h1>`)
- `inline`: Flows with text (e.g., `<span>`, `<a>`)
- `flex`, `grid`: Modern layouts

Example:
```css
span {
  display: inline;
}
div {
  display: block;
}
```

## What's Next?

Let’s learn layout techniques: [Layout Techniques](./layout-techniques.md).
