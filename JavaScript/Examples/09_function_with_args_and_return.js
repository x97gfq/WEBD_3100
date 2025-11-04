
/**
 * 09_function_with_args_and_return.js
 * ----------------------------------------
 * Run: node 09_function_with_args_and_return.js
 *
 * Demonstrates a function that takes arguments and returns a value.
 */

// Adds two numbers and returns the result
function add(a, b) {
  // Guarding against non-number inputs (simple demo)
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Warning: add(a, b) expects numbers.');
  }
  return a + b; // `return` sends a value back to the caller
}

const x = 10;
const y = 7;
const sum = add(x, y);

console.log(`add(${x}, ${y}) =>`, sum);

// Arrow function variant (ES6+) that multiplies two numbers
const multiply = (m, n) => m * n;
console.log('multiply(3, 4) =>', multiply(3, 4));

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Add default parameters to add(a=0, b=0) and test calling with one or zero args.
 * 2) // TODO: Create a function sumAll(...nums) that returns the sum of any number of arguments.
 * 3) // TODO: Write divide(a, b) that guards against division by zero and returns a useful message.
 * 4) // TODO: Write a simple assertEqual(actual, expected, label) helper and test add/multiply.
 */
