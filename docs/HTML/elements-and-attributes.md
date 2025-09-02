---
title: Elements & Attributes
sidebar_position: 2
---

# Elements & Attributes

Great job starting your HTML journey! 🏗️ Now, let’s talk about elements and attributes—the building blocks of every web page.

## Elements

An element is everything from the opening tag to the closing tag, including the content in between.

Example:
```html
<p>Hello, world!</p>
```

### Common Elements
- `<h1>` to `<h6>`: Headings
- `<p>`: Paragraph
- `<a>`: Link
- `<img>`: Image
- `<ul>`, `<ol>`, `<li>`: Lists
- `<table>`, `<tr>`, `<td>`, `<th>`: Tables

Example:
```html
<h1>My Web Page</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">Visit Example</a>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>24</td></tr>
</table>
```

## Attributes

Attributes add extra information to elements. They go inside the opening tag and usually come in name="value" pairs.

Example:
```html
<a href="https://example.com">Visit Example</a>
<img src="cat.jpg" alt="A cute cat" width="200" />
```

- `href` is the attribute for links
- `src` and `alt` for images
- `id` and `class` for styling

:::tip
Always use `alt` for images—it's good for accessibility!
:::

## What's Next?

Ready to build forms and collect user input? Next: [Forms & Input Types](./forms-and-input-types.md).
