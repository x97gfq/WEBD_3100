
/**
 * 05_while_loop.js
 * ----------------------------------------
 * Run: node 05_while_loop.js
 *
 * Demonstrates a while loop by counting down from N to 0.
 *
 * Be careful to change the loop variable inside the loop — otherwise
 * you get an infinite loop!
 */

let n = 5; // Try changing this value

while (n >= 0) {
  console.log('n =', n);
  n--; // Move toward the stopping condition
}

console.log('Lift-off!');

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Rewrite this as a do...while loop and compare the output.
 * 2) // TODO: Write a while loop that counts UP from 1 to 5.
 * 3) // TODO: Simulate rolling a die until you roll a 6; count how many rolls it took.
 * 4) // TODO: Add a safety limit (e.g., max 100 iterations) to prevent an infinite loop.
 */
