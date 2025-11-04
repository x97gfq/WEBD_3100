
/**
 * 04_for_loop.js
 * ----------------------------------------
 * Run: node 04_for_loop.js
 *
 * Demonstrates a classic for loop with three parts:
 *  1) initialization (let i = 1)
 *  2) condition (i <= 5)
 *  3) final expression (i++)
 *
 * We also accumulate a running sum.
 */

let sum = 0;

for (let i = 1; i <= 5; i++) {
  console.log('i =', i);
  sum += i; // same as: sum = sum + i
}

console.log('Sum of 1..5 =', sum);

// Tip: Other useful loops include `for...of` (arrays/iterables) and `for...in` (object keys).

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Change the loop to sum only even numbers from 1..10.
 * 2) // TODO: Compute factorial of 5 using a for loop (result should be 120).
 * 3) // TODO: Use `continue` to skip logging when i is 3, but still compute the sum.
 * 4) // TODO: Create an array of names and loop with `for...of` to log each one.
 */
