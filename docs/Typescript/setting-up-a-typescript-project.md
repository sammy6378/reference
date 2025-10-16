---
sidebar_position: 2
title: TypeScript Project Setup
---

# TypeScript Project Setup

TypeScript can be set up for applications of any size, from simple scripts to large-scale applications. Here’s a complete, modern walkthrough for starting a new TypeScript project in 2025.

## Prerequisites

- [Node.js](https://nodejs.org/) (Recommended: latest LTS)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- Code Editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

## 1. Initialize the Project

```sh
mkdir my-typescript-app
cd my-typescript-app
npm init -y
```

## 2. Install TypeScript

```sh
npm install --save-dev typescript
```

## 3. Create a TypeScript Configuration File

```sh
npx tsc --init
```

This creates a `tsconfig.json` file. Tweak options as needed. For beginners, the default config is fine. Key options to consider:

- `target` (e.g., "ES2022")
- `module` (e.g., "commonjs", "esnext")
- `outDir` (e.g., "dist")
- `rootDir` (e.g., "src")
- `strict` (set to `true` for best practices)

## Sample `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## 4. Create Your Folder Structure

A common structure:

```text
my-typescript-app/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

## 5. Write Your First TypeScript File

Create `src/index.ts`:

```ts
const message: string = 'Hello, TypeScript!';
console.log(message);
```

## 6. Compile TypeScript to JavaScript

```sh
npx tsc
```

This outputs JS files to the `dist/` directory.

## 7. Run the Compiled Code

```sh
node dist/index.js
```

## 8. Best Practices

- Turn on all strict flags in `tsconfig.json` (`strict: true`).
- Use `src` for sources, `dist` for output.
- Add a `.gitignore` file:

  ```text
  node_modules/
  dist/
  ```

- Install [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality:

  ```sh
  npm install --save-dev eslint prettier
  ```

- Use a linter config compatible with TypeScript, e.g., `@typescript-eslint`.

## 9. Using Type Declarations

Install types for external libraries:

```sh
npm install --save-dev @types/node
```

## 10. Modern Project Templates

You can bootstrap projects fast with project generators:

```sh
npx create-ts-app
```

Or with a framework scaffold:

- React: `npx create-react-app my-app --template typescript`
- Next.js: `npx create-next-app@latest -ts`

## References

- [Official TypeScript Handbook - Project Configuration](https://www.typescriptlang.org/tsconfig)
