/*
📌 JavaScript Type Conversion – Implicit & Explicit
JavaScript provides two types of type conversion:
1️⃣ Implicit Conversion (Type Coercion) – Done automatically by JS.
2️⃣ Explicit Conversion (Type Casting) – Done manually using functions.

🚀 Key Takeaways: 
✅ Implicit conversion happens automatically (e.g., "5" + 2 = "52").
✅ Explicit conversion is done using methods like Number(), String(), Boolean().
✅ Falsy values (0, "", null, undefined, NaN, false) convert to false in boolean context.

*/
// Implicit Conversion

console.log("10" + 5); // ✅ "105" (String)
console.log("10" - 5); // ✅ 5 (Number)
console.log(true + 3); // ✅ 4 (true → 1)
console.log(null + 4); // ✅ 4 (null → 0)
console.log(undefined + 4); // ✅ NaN (undefined → NaN)

// Explicit Conversion

// To Number
console.log(Number("42")); // ✅ 42
console.log(parseInt("42.99")); // ✅ 42
console.log(parseFloat("42.99")); // ✅ 42.99

// To String
console.log(String(42)); // ✅ "42"
console.log((42).toString()); // ✅ "42"

// To Boolean
console.log(Boolean(0)); // ✅ false
console.log(Boolean(1)); // ✅ true
console.log(Boolean("hello")); // ✅ true

// To Fixed Decimal Places
console.log((5.678).toFixed(2)); // ✅ "5.68"
