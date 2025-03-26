//  JavaScript Statements: A computer program is a list of "instructions" to be "executed" by a computer.
// In a programming language, these programming instructions are called statements.

let id = 1729;
let coder = "Vandana";
console.log(`ID: ${id} Name: ${coder}`);

//  This is a single line comments.
/* This is a Multiple comments */

//^ variables: var,let,const

//! let: Block Scope,must be Declared before use,cannot be Redeclared in the same scope

let age = 30;
console.log(age); // Output: 30

age = 35; // Reassignment allowed
console.log(age); // Output: 35

if (true) {
  let age = 40; // Block-scoped
  console.log(age); // Output: 40 (inside block)
}
console.log(age); // Output: 35 (outside block)

// Hoisting Behavior

// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
console.log(b);

//! var:

var name = "Alice";
console.log(name); // Output: Alice

var name = "Bob"; // Redeclaration allowed
console.log(name); // Output: Bob

function testVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable (not block-scoped)
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20 (No block scope)
}
testVar();

// Hoisting Behavior:

console.log(gamer); // undefined
var gamer = "MunnaBhai Gaming Yt";
console.log(gamer);

//!  const (Block-Scoped, Immutable): Cannot be redeclared or reassigned,Must be initialized at declaration.

const PI = 3.1416;
console.log(PI); // Output: 3.1416

// PI = 3.14; // Error: Assignment to constant variable

if (true) {
  const PI = 3.14; // Allowed (separate block scope)
  console.log(PI); // Output: 3.14
}
console.log(PI); // Output: 3.1416

// Mutable Objects with const

const person = { name: "Alice", age: 25 };
person.age = 26; // Allowed
console.log(person.age); // Output: 26

// person = { name: "Bob" }; // Error: Assignment to constant variable

// Short Notes:
/*

Feature                	var             	let	                const

Scope	             Function-scoped	  Block-scoped	      Block-scoped
Redeclaration       	Allowed	Not       allowed	          Not allowed
Reassignment	          Allowed	         Allowed	         Not allowed
Hoisting	          Hoisted with      Hoisted,but in 	      Hoisted, but in 
                     undefined      "temporal dead zone"    "temporal dead zone"

* Best Practices for Variables:

✅ Use const by default, only use let if reassignment is needed.
❌ Avoid var due to scoping issues.
✅ Use meaningful variable names.
✅ Use camelCase for naming: userAge, totalAmount.

*/

//  Localscope/Functions scope: Variables declared inside a function are only accessible within that function.

function localScope() {
  let localVar = "I am local";
  console.log(localVar); // ✅ Accessible inside function
}

localScope();
// console.log(localVar); // ❌ ReferenceError: localVar is not defined

// Nested Function Scope: Inner functions can access variables from their parent functions (lexical scope).

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // ✅ Accessible inside inner function
  }

  inner();
}

outer();

// Block scope: (let & const) : variables only accessible inside the block {} where they are defined.

{
  let blockVar = "I am block-scoped";
  console.log(blockVar); // ✅ Accessible inside block
}

// console.log(blockVar); // ❌ ReferenceError: blockVar is not defined

// Global scope: A global variable is accessible anywhere in the script. Variables declared outside of any function or block are global.

var globalVar = "I am global"; // Global variable

function showGlobal() {
  console.log(globalVar); // ✅ Accessible inside function
}

showGlobal();
console.log(globalVar); // ✅ Accessible outside function

// Implicit Global Variables

function test() {
  implicitGlobal = "I'm global without declaration!";
}

test();
console.log(implicitGlobal); // ✅ Accessible globally (BAD PRACTICE)
