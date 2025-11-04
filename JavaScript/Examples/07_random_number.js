
/**
 * 07_random_number.js
 * ----------------------------------------
 * Run: node 07_random_number.js
 *
 * Demonstrates generating random numbers using Math.random().
 * Math.random() returns a floating-point number in [0, 1).
 */

// A single random float between 0 (inclusive) and 1 (exclusive)
const r = Math.random();
console.log('Random float [0,1):', r);

// Helper: integer in a given inclusive range [min, max]
function getRandomIntInclusive(min, max) {
  // Ensure integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // The +1 makes the upper bound inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Random int [1, 6] (like a die roll):', getRandomIntInclusive(1, 6));
console.log('Random int [10, 20]:', getRandomIntInclusive(10, 20));

// Note: For cryptographically secure random numbers in Node.js,
// use: const { randomInt } = require('crypto'); randomInt(min, max);

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Create a function rollDie() that returns a random int 1..6; call it 5 times.
 * 2) // TODO: Pick a random element from an array of student names.
 * 3) // TODO: Simulate 100 coin flips and count how many heads you get.
 * 4) // TODO: (Advanced) Use Node's crypto.randomInt to roll a die; compare with Math.random().
 */
