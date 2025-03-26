/**
 * JSON (JavaScript Object Notation)
 * JSON is a lightweight data format used for storing and transferring data between systems/Servers.
 * JSON looks similar to JavaScript objects but has some key differences:=
 * Keys must be strings (double quotes required).
 * Values can be numbers, strings, arrays, objects, booleans, or null.
 * Functions are not allowed.
 */

const user = {
  Id: 4882,
  Name: "SHIVA WEBDEV",
  Age: 21,
  Email: "pshiva6174@gmail.com",
  Country: "India",
};

console.log(user);

//* JSON.stringify(): Converts a JavaScript object into a JSON string.

const books = {
  ID: 25639,
  Name: "Harry Potter The Dark World!",
  Size: "850cm * 2563 cm",
  Cost: "$569k",
};
const jsonString = JSON.stringify(books);
console.log(jsonString);

//* JSON.parse(): Converts a JSON string back into a JavaScript object.

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
