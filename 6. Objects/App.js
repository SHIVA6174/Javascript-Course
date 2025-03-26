//  1. Object Creation & Basics
let person = { name: "Alice", age: 25 };
let newPerson = Object.assign({}, person, { city: "New York" });
console.log(newPerson); // { name: 'Alice', age: 25, city: 'New York' }

//  2. Object Properties & Keys
let user = { name: "John", age: 30 };
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['John', 30]
console.log(Object.entries(user)); // [['name', 'John'], ['age', 30]]
console.log(Object.hasOwn(user, "name")); // true

//  3. Property Descriptors & Sealing
let person2 = { name: "Alice", age: 30 };
Object.freeze(person2);
person2.age = 35; // No effect
console.log(person2.age); // 30

// 4. Object Comparison & Cloning
let obj1 = { a: 1 };
let obj2 = obj1;
console.log(Object.is(obj1, obj2)); // true

let deepClone = structuredClone(obj1);
console.log(deepClone); // { a: 1 }

// 5. Object Inheritance & Prototypes
let parent = {
  greet() {
    return "Hello";
  },
};
let child = Object.create(parent);
console.log(child.greet()); // "Hello"

//  6. Object Conversion
let obj3 = { name: "Test" };
console.log(obj3.toString()); // "[object Object]"

// 7. Object Iteration
let car = { brand: "Toyota", year: 2022 };
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
