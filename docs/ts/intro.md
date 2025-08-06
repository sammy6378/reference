# TypeScript Introduction

## What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing and other features to help you write more maintainable code.

## Basic Types

```typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let items: string[] = ["apple", "banana"];

// Union types
let id: string | number = 123;

// Object type
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

const user: User = {
  name: "John Doe",
  age: 30
};
```

## Functions

```typescript
// Function with types
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function with types
const multiply = (x: number, y: number): number => x * y;

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}
```

## Interfaces and Types

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

type Status = "pending" | "approved" | "rejected";

interface Order {
  id: string;
  products: Product[];
  status: Status;
  createdAt: Date;
}
```
