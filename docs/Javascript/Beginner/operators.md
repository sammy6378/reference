---
sidebar_position: 3
title: Operators in JavaScript
---

# Operators in JavaScript

Hey, code explorer! 🌍 You've got variables and data types under your belt—now it's time to make them dance with operators. Operators are like the tools in your coding toolbox: they let you add, compare, and combine things in fun ways. Think of them as math symbols on steroids, but for all kinds of data.

If math class made you yawn, don't worry—this is way more exciting because you'll see instant results in your console. We'll cover the main types: arithmetic (math stuff), assignment (saving results), comparison (checking equality), and logical (decision helpers). Plus, we'll chat about precedence, so your code doesn't get confused about what to do first. Let's operator-ate! 🛠️😄

## Arithmetic Operators: Math Magic 🔢

These are your basic calculators for numbers. JS handles addition, subtraction, and more with ease.

- **Addition (+)**: Adds numbers or joins strings (concatenation!).

  ```javascript
  let sum = 5 + 3; // 8
  let message = "High" + " five!"; // "High five!"
  console.log(sum); // 8
  ```

- **Subtraction (-)**: Subtracts numbers.

  ```javascript
  let difference = 10 - 4; // 6
  ```

- **Multiplication (*)**: Multiplies.

  ```javascript
  let product = 2 * 3; // 6
  ```

- **Division (/)**: Divides (gives floats if needed).

  ```javascript
  let quotient = 10 / 2; // 5
  let floaty = 10 / 3; // 3.333...
  ```

- **Modulus (%)**: Remainder after division (great for even/odd checks).

  ```javascript
  let remainder = 10 % 3; // 1 (10 divided by 3 is 3 with 1 left over)
  ```

- **Exponentiation (**)**: Powers (2** 3 = 8).

  ```javascript
  let power = 2 ** 4; // 16
  ```

Bonus: Increment (++ ) and decrement (-- ) for quick +1 or -1.

```javascript
let count = 5;
count++; // Now 6
count--; // Back to 5
```

:::tip Fun Fact

- works on strings too, but watch out: "2" + 2 = "22" (string first converts the number!).
To fix: Use Number("2") + 2 = 4.
:::

:::warning Division by Zero
10 / 0 = Infinity (not an error, but weird). Always check denominators!
:::

## Assignment Operators: Shortcuts for Saving 📥

Assignment (=) sets a value, but these combos do math and assign in one go. Lazy coder's dream!

- **Basic (=)**: `let x = 10;`
- **+=**: Add and assign. `x += 5;` (x now 15)
- **-=**: Subtract and assign. `x -= 3;` (x now 12)
- ***=**: Multiply. `x *= 2;` (x now 24)
- **/=**: Divide. `x /= 4;` (x now 6)
- **%=**: Modulus. `x %= 5;` (x now 1)
- ****=**: Exponent. `x **= 2;` (x now 1, since 1**2=1)

Example:

```javascript
let score = 100;
score += 50; // 150
console.log(score);
```

Saves typing—your fingers will thank you! ✌️

## Comparison Operators: Checking Things Out 👀

These compare values and return true/false (booleans). Essential for decisions!

- **Equal (==)**: Checks value (loose—converts types).

  ```javascript
  5 == "5"; // true (number vs string, but values match)
  ```

- **Strict Equal (===)**: Checks value AND type.

  ```javascript
  5 === "5"; // false (different types!)
  ```

- **Not Equal (!=)**: Loose not equal.

  ```javascript
  5 != "5"; // false
  ```

- **Strict Not Equal (!==)**: Strict version.

  ```javascript
  5 !== "5"; // true
  ```

- **Greater Than (&gt;)**: `10 > 5; // true`
- **Less Than (&lt;)**: `10 < 5; // false`
- **Greater or Equal (&gt;=)**: `5 >= 5; // true`
- **Less or Equal (&lt;=)**: `5 <= 10; // true`

:::tip Always Use ===
Stick to === and !== to avoid type surprises. It's safer and more predictable!
:::

## Logical Operators: Combining Ideas 🤝

Logical operators work on booleans for complex checks. Like gates in a logic puzzle!

- **AND (&&)**: True if BOTH are true.

  ```javascript
  true && true; // true
  true && false; // false
  ```

- **OR (||)**: True if AT LEAST ONE is true.

  ```javascript
  true || false; // true
  false || false; // false
  ```

- **NOT (!)**: Flips true to false (and vice versa).

  ```javascript
  !true; // false
  ```

Example: Check if age is teen.

```javascript
let age = 15;
let isTeen = (age >= 13) && (age <= 19); // true
console.log(isTeen);
```

They "short-circuit": && stops if first is false; || stops if first is true. Useful for defaults:

```javascript
let username = "" || "Guest"; // "Guest" (empty string is falsy)
```

## Operator Precedence: Who Goes First? 🏃‍♂️

JS has rules for order, like PEMDAS in math (Parentheses, Exponents, Multiply/Divide, Add/Subtract). But with more operators!

Key order (higher first):

1. Parentheses `()`
2. Exponents `**`
3. Multiply/Divide/Modulus `* / %`
4. Add/Subtract `+ -`
5. Comparisons `< > <= >=`
6. Equality `== === != !==`
7. Logical AND `&&`
8. Logical OR `||`
9. Assignment `= +=` etc.

Example:

```javascript
let result = 5 + 3 * 2; // 11 (multiply first: 3*2=6, then +5)
let withParens = (5 + 3) * 2; // 16 (add first)
```

:::tip Pro Tip
When in doubt, use parentheses! It makes code clearer and avoids precedence pitfalls.
:::

:::info Full List
Google "JavaScript operator precedence" for the complete table—it's your cheat sheet!
:::

## Practice Time! 🛠️

Try this in your console:

```javascript
let a = 10;
let b = 3;
console.log(a + b * 2); // What’s the result? Why?
console.log((a > b) && (a % b === 1)); // true?
let c = a;
c *= 2;
console.log(c); // 20
```

Play around—change values and predict outcomes!

## What's Next?

Operators unlocked—now your code can calculate, compare, and decide! Up next: Conditionals to make your programs smart. Head to [Control Structures](./control-structures.md) for if-statements and more. You're crushing this—keep the energy high! ⚡

Got questions? Check our [GitHub Discussions](https://github.com/sammy6378/reference/discussions). Code on!
