---
title: Layout Techniques
sidebar_position: 4
---

# Layout Techniques

CSS gives you powerful tools to arrange elements on the page.

## Flexbox
- Align, justify, and wrap items easily

Example:
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

## Grid
- Create rows, columns, and areas

Example:
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
```

## Positioning
- `relative`, `absolute`, `fixed`, `sticky`

Example:
```css
.sticky {
  position: sticky;
  top: 0;
}
```

## What's Next?

Let’s style your site: [Styling](./styling.md).
