// 1. String Length & Access
let str = "Hello";
console.log(str.length); // 5
console.log(str.charAt(1)); // 'e'
console.log(str.charCodeAt(0)); // 72
console.log(str.at(-1)); // 'o'

//  2. Searching & Finding
let text = "Hello, JavaScript!";
console.log(text.indexOf("Java")); // 7
console.log(text.lastIndexOf("o")); // 4
console.log(text.includes("Script")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("!")); // true

// 3. Extracting Substrings
let word = "JavaScript";
console.log(word.slice(0, 4)); // 'Java'
console.log(word.substring(4, 10)); // 'Script'
console.log(word.slice(-6, -3)); // 'Scr'

// 4. Modifying Strings
let message = "   JavaScript is fun!   ";
console.log(message.trim()); // "JavaScript is fun!"
console.log("5".padStart(4, "0")); // "0005"
console.log("Hi ".repeat(3)); // "Hi Hi Hi "

//  5. Replacing & Manipulating
let sentence = "I love JavaScript!";
console.log(sentence.replace("JavaScript", "coding")); // "I love coding!"
console.log("banana".replaceAll("a", "o")); // "bonono"
console.log("apple,banana,grape".split(",")); // ['apple', 'banana', 'grape']

//  6. String Matching (Regular Expressions)

let str1 = "Hello 123, world 456!";
console.log(str1.match(/\d+/g)); // ['123', '456']
console.log(str1.search(/\d/)); // 6
