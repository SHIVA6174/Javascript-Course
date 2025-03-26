//  Number Properties:

// Maximum & Minimum Values
console.log(Number.MAX_VALUE); // ✅ 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // ✅ 5e-324
console.log(Number.MAX_VALUE * 2); // ✅ Infinity (Exceeds the limit)
console.log(Number.MIN_VALUE / 2); // ✅ 0 (Too small to be represented)
console.log(Number.EPSILON); // ✅ 2.220446049250313e-16

//  Infinity & NaN
console.log(Number.POSITIVE_INFINITY); // ✅ Infinity
console.log(Number.NEGATIVE_INFINITY); // ✅ -Infinity

//  Safe Integer Range
console.log(Number.MAX_SAFE_INTEGER); // ✅ 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // ✅ -9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // ✅ 9007199254740992 (But may cause precision issues)

//  Precision Handling with EPSILON
let a = 0.1 + 0.2; // Floating-point precision issue
console.log(a === 0.3); // ❌ false (Expected: true)

let isEqual = Math.abs(a - 0.3) < Number.EPSILON;
console.log(isEqual); // ✅ true (Correct way to compare floating points)

//  Convert Values to Numbers
console.log(Number("42")); // ✅ 42
console.log(parseInt("42px")); // ✅ 42
console.log(parseFloat("42.5px")); // ✅ 42.5

// Formatting Numbers
let num = 123.456;
console.log(num.toFixed(2)); // ✅ "123.46" (Rounds to 2 decimal places)
console.log(num.toPrecision(4)); // ✅ "123.5" (Rounds to 4 significant figures)
console.log(num.toExponential(3)); // ✅ "1.235e+2"

//  Rounding Numbers
console.log(Math.round(4.7)); // ✅ 5
console.log(Math.ceil(4.3)); // ✅ 5
console.log(Math.floor(4.9)); // ✅ 4
console.log(Math.trunc(4.9)); // ✅ 4

//  Random Number Between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // ✅ Random number between 1-10

// Handling Infinity & NaN

console.log(isNaN("hello")); // ✅ true (Not-a-Number)
console.log(isFinite(100)); // ✅ true (100 is a finite number)
console.log(1 / 0); // ✅ Infinity
console.log(-1 / 0); // ✅ -Infinity

/*
### 📌 JavaScript `Number` Methods – Summary Table  
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Method Type             | Common Methods                                                                                                            |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Number Properties       | `Number.MAX_VALUE`, `Number.MIN_VALUE`, `Number.POSITIVE_INFINITY`, `Number.NEGATIVE_INFINITY`, `Number.NaN`              |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Conversion Methods      | `Number()`, `parseInt()`, `parseFloat()`, `toString()`, `toFixed()`, `toExponential()`, `toPrecision()`, `valueOf()`      |
|-------------------------|---------------------------------------------------------------------------------------------------------------------- ----|
| Math Methods            | `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.trunc()`, `Math.abs()`, `Math.pow()`, `Math.sqrt()`, `Math.cbrt()`,  |
|                         |   Math.random()`, `Math.min()`, `Math.max()`                                                                              |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Infinity & NaN Handling | `isNaN()`, `isFinite()`                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
*/
