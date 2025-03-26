// Loops in JavaScript 🔄
// Loops allow us to execute a block of code multiple times.
// JavaScript provides different types of loops to iterate over data structures like arrays, objects, and ranges.

/*

1. for Loop

Syntax:

for (initialization; condition; update) {
  Code to execute
}
*/

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

/*
2. while Loop

while (condition) {
  Code to execute
}
*/

let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}

/*
3. do...while Loop

do {
  Code to execute
} while (condition);
*/

let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 3);

/*
4. for...of Loop (for Arrays & Strings)

for (let item of iterable) {
  Code to execute
}
*/

// Arrays:

let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color);
}

// Strings

let word = "SHIVA";
for (let letter of word) {
  console.log(letter);
}

/*
for...in Loop (for Objects) 

for (let key in object) {
  Code to execute
}
*/

let person = { name: "VANDANA", age: 22, city: "New York" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// break and continue in Loops:

// break → Exits the loop immediately.
// continue → Skips the current iteration and moves to the next one

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Stops when i = 3
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skips when i = 3
  console.log(i);
}
