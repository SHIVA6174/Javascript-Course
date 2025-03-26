// Exception handling in JavaScript helps manage errors in a controlled way without crashing the program.
// It ensures smooth execution by "catching" errors and providing fallback mechanisms.

// without Error handling:
// console.log(100 / a); // ReferenceError: a is not defined

// 1. Basic Try-Catch Block
try {
  // let a = 200;
  console.log(6174 / a);
} catch (error) {
  console.log(error.message); // a is not defined
  // console.log(error); // ReferenceError: a is not defined
}

// 2. Using finally
try {
  console.log("Execution started.....");
  let num = 5 / 0; // Division by zero (not an error in JS but can be caught)
  console.log(num);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This always run!");
  console.log("Execution completed......");
}

// 3. Throwing Custom Errors

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  return "Access granted!";
}

try {
  console.log(checkAge(14));
} catch (error) {
  console.log("Caught an error:", error.message);
}

//  4. Handling Asynchronous Errors

async function fetchData() {
  try {
    let response = await fetch("invalid-url"); // Fetch will fail
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

fetchData();

// 5. Error Types in JavaScript
