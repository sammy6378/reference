---
sidebar_position: 4
title: Control Structures
---


You've mastered operators, so now let's give your programs a brain—control structures! These are like choose-your-own-adventure books for code: they let your script make decisions based on conditions. No more straight-line code; now it can branch out, skip parts, or choose paths.

Imagine you're at an ice cream shop: "If it's hot, get chocolate; else if it's cold, get vanilla; otherwise, skip dessert." That's control flow! We'll cover if-else for simple choices, switch for multiple options, and the ternary operator for quick one-liners. It's decision-making time—let's make your code smart and sassy! 🤓

## If, Else If, Else: The Decision Makers 🛤️

The `if` statement checks a condition (true/false) and runs code if true. Add `else if` for more checks, and `else` as a fallback.

Basic structure:

```javascript
if (condition) {
    // Code if true
} else if (anotherCondition) {
    // Code if first false but this true
} else {
    // Code if all false
}
```

Example: Weather app vibes!

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("It's scorching! Grab ice cream 🍦");
} else if (temperature > 20) {
    console.log("Nice day for a walk 🌞");
} else {
    console.log("Brr, stay inside with hot cocoa ☕");
}
// Output: Nice day for a walk 🌞
```

- Conditions use comparisons/logicals (e.g., `age >= 18 && isMember`).
- Curly braces `{}` group code—use them always for clarity!
- No condition for `else`—it's the "catch-all."

Nested ifs (if inside if) work too, but keep it simple to avoid spaghetti code. 🍝

:::tip Pro Tip
Always plan your conditions from specific to general. Like checking for "exactly 18" before "over 18."
:::

:::warning Common Mistake
Use === for equality, not =. Single = assigns; double/triple compare!
:::

## Switch Statements: The Multi-Choice Menu 📋

`switch` is perfect when you have one value with many possible matches—like a vending machine selector. Cleaner than a bunch of else-ifs!

Structure:

```javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Like else
}
```

Example: Fruit picker!

```javascript
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Goes great in smoothies 🍌");
        break;
    case "apple":
        console.log("An apple a day... 🍎");
        break;
    case "orange":
        console.log("Vitamin C boost! 🍊");
        break;
    default:
        console.log("Unknown fruit—try again! ❓");
}
// Output: An apple a day... 🍎
```

- `break;` stops it from running the next cases (fall-through—useful sometimes, but rare).
- `default` handles no matches.
- Works with strings, numbers—strict equality (===).

When to use? For 3+ options on one variable. Else, stick to if-else.

:::info Fall-Through Fun
Omit break to run multiple cases: case "monday": case "tuesday": console.log("Weekday"); break;
:::

## Ternary Operator: The Quick Picker ❓

The ternary (three-part) operator is shorthand for if-else. Great for simple assignments—keeps code concise!

Structure: `condition ? trueValue : falseValue;`

Example:

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes, go vote! 🗳️" : "Not yet—study up! 📚";
console.log(canVote); // Yes, go vote! 🗳️
```

Like a mini if-else:

- ? is "then"
- : is "else"

Nest them for more, but don't overdo—readability first!

```javascript
let status = age < 13 ? "Kid" : age < 18 ? "Teen" : "Adult";
```

:::tip When to Ternary?
For one-line decisions, like assigning variables or in templates: `${isSunny ? "🌞" : "☔"}`
:::

:::warning Readability Alert
Ternaries are cool, but if nested or complex, use full if-else. Code is read more than written!
:::

## Practice Time! 🛠️

Fire up your console and try:

```javascript
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "Keep practicing!";
}
console.log(`Your grade: ${grade}`); // B

// Switch it up
switch (grade) {
    case "A":
        console.log("Awesome! 🎉");
        break;
    case "B":
        console.log("Good job! 👍");
        break;
    default:
        console.log("You got this next time! 💪");
}

// Ternary twist
let message = score > 70 ? "Pass!" : "Try again.";
console.log(message);
```

Tweak the score and see changes. What happens with score=95?

Questions buzzing? Visit our [GitHub Discussions](https://github.com/sammy6378/reference/discussions).
