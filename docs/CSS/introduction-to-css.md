---
title: Introduction to CSS
sidebar_position: 1
---

# Introduction to CSS

Welcome, style wizard! 🎨 Now that you know HTML, it’s time to make your web pages beautiful with CSS (Cascading Style Sheets). If HTML is the structure of your house, CSS is the paint, wallpaper, and decorations that make it shine.

## What is CSS?
CSS controls colors, fonts, spacing, layout, and more. It separates content (HTML) from presentation (styles).

- **Inline styles**: Directly on an element (not recommended for big projects)
- **Internal styles**: In a `<style>` tag in the HTML `<head>`
- **External styles**: In a separate `.css` file (best for most projects)

Example (inline):
```html
<p style="color: red;">This is red text.</p>
```
Example (internal):
```html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
```
Example (external):
```html
<link rel="stylesheet" href="styles.css" />
```

## What's Next?

Ready to learn how to target elements? Next up: [Selectors & Properties](./selectors-and-properties.md). Let’s style like a pro!
