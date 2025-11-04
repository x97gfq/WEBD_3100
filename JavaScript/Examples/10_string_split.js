
/**
 * 10_string_split.js
 * ----------------------------------------
 * Run: node 10_string_split.js
 *
 * Demonstrates splitting a string into an array using String.prototype.split().
 */

const csv = 'red,green,blue,orange';
console.log('Original string:', csv);

// Split on comma to get an array of color names
const colors = csv.split(',');
console.log('After split by comma:', colors);

// You can split on spaces or other delimiters
const sentence = 'JavaScript makes string operations friendly';
console.log('Sentence:', sentence);
console.log('Words (split by space):', sentence.split(' '));

// Limiting splits (second argument)
console.log('First two words only:', sentence.split(' ', 2));

// Splitting into characters
console.log('Characters:', 'ABC'.split(''));

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Given ' last, first ', trim whitespace and split into [first, last].
 * 2) // TODO: Split 'one  two   three' on ANY whitespace using a regex: str.split(/\s+/).
 * 3) // TODO: Given a filename like 'photo.archive.tar.gz', split on '.' and log the extension.
 * 4) // TODO: Join the colors array back into a string with semicolons.
 */
