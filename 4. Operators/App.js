// Arthematic operators:

let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(a ** b); // 1000 (2³)

// Assignment Operators

let x = 10;
x += 5; // x = x + 5 → 15
x *= 2; // x = x * 2 → 30
console.log(x);

// Comparison Operators

console.log(5 == "5"); // true (loose comparison)
console.log(5 === "5"); // false (strict comparison)
console.log(10 > 5); // true
console.log(10 <= 5); // false

// Logical Operators

console.log(5 > 3 && 10 > 5); // true (Both conditions are true)
console.log(5 > 10 || 10 > 5); // true (One condition is true)
console.log(!(5 > 3)); // false (Negates true)

//  Bitwise Operators

let m = 5; //  0101 (binary)
let n = 3; //  0011 (binary)
let result = m & n; // 0001 (binary) = 1
console.log(result); // ✅ Output: 1

// Ternary Operator

let age = 20;
let result2 = age >= 18 ? "Adult" : "Minor";
console.log(result2); // "Adult"

//  Type Operators

console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log([1, 2, 3] instanceof Array); // true

//  Nullish Coalescing

let user = null;
console.log(user ?? "Guest"); // "Guest" (user is null)
