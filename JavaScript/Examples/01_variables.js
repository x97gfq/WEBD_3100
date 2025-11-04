
/**
 * 01_variables.js
 * ----------------------------------------
 * Run: node 01_variables.js
 *
 * Demonstrates declaring variables with let/const and assigning
 * several **data types**. Prints the value and `typeof` for each.
 */

// Prefer `const` when the binding won't change; use `let` when it will.
// (Avoid `var` in modern JS — it is function-scoped and can cause surprises.)

const aNumber = 42;                 // Number (integer)
const aFloat = 3.14159;             // Number (floating point)
const aString = 'Hello, WEBD 1000'; // String (single or double quotes both work)
const aBoolean = true;              // Boolean (true/false)
const aNull = null;                 // null (intentional "no value")
let anUndefined;                    // undefined (declared but not assigned)
const aBigInt = 12345678901234567890n; // BigInt (use trailing `n`)
const aSymbol = Symbol('id');       // Symbol (unique identifier)

// Objects and arrays are foundational reference types:
const anObject = { course: 'WEBD 1000', term: 'Fall' };
const anArray = [1, 2, 3];

// A function is also a value in JS:
const aFunction = function (name) {
  return `Hi, ${name}!`;
};

// Helper to log value and its typeof
function logType(label, value) {
  console.log(`${label}:`, value, '=> typeof =', typeof value);
}

logType('aNumber', aNumber);
logType('aFloat', aFloat);
logType('aString', aString);
logType('aBoolean', aBoolean);
logType('aNull', aNull); // historical quirk: typeof null === 'object'
logType('anUndefined', anUndefined);
logType('aBigInt', aBigInt);
logType('aSymbol', aSymbol);
logType('anObject', anObject);
logType('anArray', anArray); // arrays are objects; use Array.isArray
console.log('Array.isArray(anArray):', Array.isArray(anArray));
logType('aFunction', aFunction);
console.log('aFunction("Jamie") =>', aFunction('Jamie'));

// Reassigning a `let` works; reassigning a `const` throws an error.
anUndefined = 'Now I have a value!';
console.log('After assignment, anUndefined =', anUndefined);

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Create your own object with nested properties (e.g., student.name.first) and log it.
 * 2) // TODO: Change aString to use a template literal (backticks) that includes aNumber.
 * 3) // TODO: Convert the string '123' to a number two ways (Number('123'), parseInt('123', 10)) and log typeof.
 * 4) // TODO: Reassign a new value to `anUndefined` and explain in a comment how `let` allows this.
 * 5) // TODO: Create a new array of 3 course codes and log `Array.isArray()` and `typeof`.
 */
