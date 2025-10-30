---
sidebar_position: 3
title: TypeScript Basics
---

# TypeScript Basics

TypeScript builds on JavaScript, introducing static types and robust tooling. Here’s what you need to know to get started mastering the basics.

## Types & Type Annotations

TypeScript adds **types** to JavaScript. You can annotate types explicitly:

```ts
let name: string = 'Alice';
let age: number = 25;
let isActive: boolean = true;
```

Common types:

- `string`, `number`, `boolean`, `null`, `undefined`, `any`, `unknown`, `never`.
- For arrays: `string[]` or `Array<string>`
- For objects, you define shapes with interfaces or type aliases.

## Type Inference

TypeScript usually infers types, so you don’t always need to write them:

```ts
let city = 'Nairobi'; // inferred as string
let scores = [90, 85, 70]; // inferred as number[]
```

## Variables

You can use `let`, `const`, or (rarely) `var` (avoid using `var`):

```ts
const pi: number = 3.1416;
let counter: number = 0;
```

## Functions

Function parameters and return types can have annotations:

```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

- Functions can have optional (`param?: type`) and default parameters.
- Use arrow functions for concise syntax:

```ts
const add = (a: number, b: number): number => a + b;
```

## Objects & Interfaces

Interfaces or type aliases describe object shapes:

```ts
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // optional
}

const user: User = {
    name: 'Jane',
    age: 22
};
```

## Arrays

TypeScript supports both syntaxes:

```ts
const users: User[] = [user];
const numbers: Array<number> = [1, 2, 3];
```

## Enums

Use enums to define a set of named values:

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
```

## Summary Table

| Concept       | Example                          |
| ------------- | -------------------------------- |
| Basic Type    | `let x: number = 5;`             |
| Array Type    | `let arr: string[] = ['a', 'b']` |
| Object Type   | `let obj: {a: number} = {a: 1}`  |
| Interface     | `interface Car {model: string}`  |
| Enum          | `enum Color {Red, Blue}`         |
| Function Type | `function f(a: number): void {}` |

For more examples, see the [official handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).
