
/**
 * 02_if_statement.js
 * ----------------------------------------
 * Run: node 02_if_statement.js
 *
 * Demonstrates a basic if / else-if / else chain.
 * We map a numeric score to a letter grade.
 */

const score = 84; // Try changing this to 92, 67, 40, etc.
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log(`Score: ${score} => Grade: ${grade}`);

// Tip: In JS, conditions evaluate to true/false. Be careful with truthy/falsy values.
// Examples of falsy: false, 0, NaN, '', null, undefined.

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Add A+, A, A- grading (and so on) by using more precise ranges.
 * 2) // TODO: Wrap the grading logic in a function `letterGrade(score)` and call it with a few values.
 * 3) // TODO: Use a ternary expression to set a variable `passOrFail` (e.g., score >= 60 ? 'Pass' : 'Fail').
 * 4) // TODO: Try setting score to a string like '85' — what happens? Add input validation.
 */
