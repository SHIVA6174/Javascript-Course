// Method-1
const coders = ["Vandana", "Shiva", "Chandra Mohan", "Vijay Kumar", "Aravind"];
console.log(coders); // [ 'Vandana', 'Shiva', 'Chandra Mohan', 'Vijay Kumar', 'Aravind' ]
console.log(coders.length); // 5

// Method-2

const Users = new Array();
Users.push("Vandana");
Users.push("Shiva");
Users.push("Krishna");
Users.push("Radha");
console.log(Users); // [ 'Vandana', 'Shiva', 'Krishna', 'Radha' ]
console.log(Users.length); // 4

// Converting an Array to a String
console.log(Users.toString()); // Vandana,Shiva,Krishna,Radha

// Looping Array Elements

for (let user of coders) {
  console.log(user);
}

// Vandana
// Shiva
// Chandra Mohan
// Vijay Kumar
// Aravind

//  1. Adding & Removing Elements
let arr = [10, 20, 30];
arr.push(40); // [10, 20, 30, 40]
arr.pop(); // [10, 20, 30]
arr.unshift(0); // [0, 10, 20, 30]
arr.shift(); // [10, 20, 30]

// 2. Searching & Finding
let numbers = [10, 20, 30, 40];
console.log(numbers.includes(20)); // true
console.log(numbers.find((num) => num > 25)); // 30
console.log(numbers.findIndex((num) => num > 25)); // 2

//  3. Modifying & Copying Arrays
let letters = ["a", "b", "c", "d"];
console.log(letters.slice(1, 3)); // ['b', 'c']
letters.splice(2, 1, "X"); // ['a', 'b', 'X', 'd']
console.log(letters);
console.log(
  [
    [1, 2],
    [3, 4],
  ].flat()
); // [1, 2, 3, 4]

// 4. Iteration & Transformation
let nums = [1, 2, 3, 4];
console.log(nums.map((x) => x * 2)); // [2, 4, 6, 8]
console.log(nums.filter((x) => x > 2)); // [3, 4]
console.log(nums.reduce((sum, num) => sum + num, 0)); // 10

// 5. Sorting & Reversing
let nums2 = [40, 10, 20, 30];
console.log(nums2.sort((a, b) => a - b)); // [10, 20, 30, 40]
console.log(nums2.reverse()); // [40, 30, 20, 10]

// 6. Joining & Splitting
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

//  7. Checking Conditions
let checkArr = [2, 4, 6];
console.log(checkArr.every((num) => num % 2 === 0)); // true
console.log(checkArr.some((num) => num > 5)); // true
