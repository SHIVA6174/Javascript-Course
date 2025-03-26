/**
 * JavaScript has two categories of data types:
 * Primitive Data Types (Immutable, stored by value) [Numbers,strings,boolean,null,undefined]
 * Reference (Non-Primitive) Data Types (Mutable, stored by reference) [Objects, Arrays,functions..etc]
 */

//* Primitive Data Types:

//  Numbers: Represents both integers and floating-point numbers.

let age = 25; // Integer
let price = 99.99; // Floating point
let bigNum = 9007199254740991n; // BigInt (large number)
console.log(typeof age); // Output: number

// strings: Represents text, enclosed in single ('), double (") or backticks (`).

let name = "Alice";
let message = "Hello, World!";
let templateLiteral = `Hello, ${name}!`; // Template literals
console.log(typeof name); // Output: string

// Booleans: Represents true or false.

let isLoggedIn = true;
let hasPermission = false;
console.log(typeof isLoggedIn); // Output: boolean

// Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: undefined

// Null: Represents an intentional absence of value.

let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (JavaScript bug!)

// Symbol: Unique and immutable value, often used as object keys.

const id = Symbol("id");
console.log(id); // Output: Symbol(id)
console.log(typeof id); // Output: symbol

// BigInt: For very large integers beyond Number.MAX_SAFE_INTEGER. --> BigInt()

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber); // Output: bigint

//* Reference (Non-Primitive) Data Types:

// Objects: A collection of key-value pairs.

let person = { name: "Alice", age: 25 };
console.log(person.name); // Output: Alice
console.log(typeof person); // Output: object

// Arrays: Ordered collection of elements (indexed).

let numbers = [10, 20, 30, 40];
console.log(numbers[1]); // Output: 20
console.log(typeof numbers); // Output: object (arrays are special objects)

// Functions: A block of reusable code.

function info(name, age) {
  console.log(`Hi There, I'm ${name} & I'm ${age} Years old!`);
}

info("Vandana", 21);

// Dates: Represents a date and time.

let now = new Date();
console.log(now); // Output: Current date and time
console.log(typeof now); // Output: object
