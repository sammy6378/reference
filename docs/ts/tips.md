# TypeScript Tips & Best Practices

## Generic Types

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic class
class DataStore<T> {
  private data: T[] = [];
  
  add(item: T): void {
    this.data.push(item);
  }
  
  getAll(): T[] {
    return this.data;
  }
}
```

## Utility Types

```typescript
// Pick - Select specific properties
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - Exclude specific properties
type CreateUser = Omit<User, 'id'>;

// Partial - Make all properties optional
type UpdateUser = Partial<User>;

// Required - Make all properties required
type CompleteUser = Required<User>;
```

## Type Guards

```typescript
// Type guard function
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Using type guards
function processValue(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value.toFixed(2);
  }
}
```

## Advanced Patterns

```typescript
// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Template literal types
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvents = EventName<'click' | 'hover'>; // "onClick" | "onHover"
```
