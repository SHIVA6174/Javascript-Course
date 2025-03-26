// Definition of Set in JavaScript
// A Set in JavaScript is a collection of unique values, meaning it does not allow duplicate elements.
// Key Features of a Set:
// Stores only unique values (no duplicates).
// Values can be of any type (numbers, strings, objects, etc.).
// Insertion order is preserved (values appear in the order they were added).
// Provides useful methods for adding, deleting, and checking values.

// Create a Set

const coders = new Set([
  "Shiva",
  "Vandana",
  "Radha",
  "Krishna",
  "Chandra Mohana",
  "Vijay",
  "Aravind",
]);

console.log(coders);
console.log(`The length of coders: ${coders.size}`);

const langauges = new Set();
langauges.add("Javascript");
langauges.add("Java");
langauges.add("Python");
langauges.add("Mojo");

console.log(langauges);

// Listing the Elements

for (const programer of coders) {
  console.log(programer);
}

// Sets are Objects
console.log(typeof coders); // object

// Methods: GDC HS KEV --> get(),delete(),clear(),has(),sisze,keys(),values(),entries(),forEach() | new Set(),add()

const letters = new Set(["a", "b", "c", "d"]);
console.log(letters);
// letters.clear();
letters.delete("c");
console.log(letters.has("a")); // true
console.log(letters.size); // 4
console.log(letters);

for (let key of letters.keys()) {
  console.log(key);
}

for (let value of letters.values()) {
  console.log(value);
}

for (let [index, item] of letters.entries()) {
  console.log(`Index: ${index} Value: ${item}`);
}

for (let item of letters.entries()) {
  console.log(item);
}

coders.forEach((c) => {
  console.log(c);
});
