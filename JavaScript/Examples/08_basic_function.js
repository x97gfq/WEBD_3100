
/**
 * 08_basic_function.js
 * ----------------------------------------
 * Run: node 08_basic_function.js
 *
 * Demonstrates defining a basic function and calling it.
 * In JavaScript, functions are values — you can store them in variables,
 * pass them around, and call them.
 */

// Function declaration (hoisted): can be called after its definition is parsed
function greet() {
  console.log('Hello from a basic function!');
}

// Call (aka invoke) the function
console.log('Calling greet():');
greet();

// You can also assign a function expression to a variable
const sayThanks = function () {
  console.log('Thanks for running this file.');
};

console.log('Calling sayThanks():');
sayThanks();

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Write a function sayHello(name) that logs a personalized greeting; call it with your name.
 * 2) // TODO: Convert greet() to an arrow function and call it.
 * 3) // TODO: Create a function that logs the current time using new Date().
 * 4) // TODO: Store a function in an array and call it via the array index.
 */
