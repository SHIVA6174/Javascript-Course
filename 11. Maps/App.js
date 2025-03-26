// Maps in JavaScript 🗺️
// A Map in JavaScript is a collection of key-value pairs, similar to an object, but with some key differences:
// ✅ Keys can be of any type (Objects, Numbers, Strings, etc.)
// ✅ Preserves insertion order (Unlike Objects)
// ✅ Easier size retrieval (map.size instead of Object.keys(obj).length)

const coders = new Map();

coders.set(1, "Vandana");
coders.set(2, "Shiva");
coders.set(3, "Chandra Mohan");
coders.set(4, "Vijay Kumar");
coders.set(5, "Aravind");

console.log(coders);
// console.log(coders.size);

const langauges = new Map([
  [4881, "Python"],
  [4882, "Javascript"],
  [4883, "Mojo"],
  [4884, "Julia"],
]);

console.log(langauges);

// Methods: GDC HS KEV --> get(),delete(),clear(),has(),sisze,keys(),values(),entries(),forEach() | new Map(),set()

console.log(coders.get(1));
console.log(coders.delete(2));
console.log(coders.has(1));
console.log(coders.size);
console.log(coders);
// langauges.clear();
console.log(langauges);

for (let key of coders.keys()) {
  console.log(key);
}

for (let value of coders.values()) {
  console.log(value);
}

for (let [key, value] of coders.entries()) {
  console.log(`Key: ${key} Value: ${value}`);
}

coders.forEach((programmer) => console.log(programmer.toUpperCase()));
