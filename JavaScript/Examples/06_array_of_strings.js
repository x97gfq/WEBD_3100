
/**
 * 06_array_of_strings.js
 * ----------------------------------------
 * Run: node 06_array_of_strings.js
 *
 * Demonstrates creating and using an array of strings.
 */

const languages = ['HTML', 'CSS', 'JavaScript'];

console.log('Initial array:', languages);
console.log('Length:', languages.length);
console.log('First item (index 0):', languages[0]);

// Add an item to the end
languages.push('Node.js');
console.log('After push:', languages);

// Loop over the array
console.log('Loop with for...of:');
for (const lang of languages) {
  console.log('-', lang);
}

// You can also transform arrays with map/filter (more advanced)
const uppercased = languages.map((x) => x.toUpperCase());
console.log('Uppercased copy (via map):', uppercased);

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Remove the last item using pop() and log the result.
 * 2) // TODO: Add 'TypeScript' to the beginning using unshift().
 * 3) // TODO: Find the index of 'CSS' with indexOf() and replace it with 'Cascading Style Sheets'.
 * 4) // TODO: Turn the array into a comma-separated string with join(',').
 */
