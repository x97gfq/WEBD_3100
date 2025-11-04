
/**
 * guessing.js — Number Guessing (High/Low)
 * Run: node guessing.js
 *
 * Concepts: random number, input parsing, comparison, attempts, replay.
 */

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let secret = randInt(1, 100);
let attempts = 0;

console.log("🔢 I'm thinking of a number between 1 and 100. Type 'q' to quit.");

function ask() {
  rl.question('Your guess: ', (g) => {
    const t = g.trim().toLowerCase();
    if (t === 'q') { console.log('Bye!'); rl.close(); return; }
    const num = Number(t);
    if (!Number.isInteger(num) || num < 1 || num > 100) {
      console.log('Enter an integer from 1 to 100.');
      return ask();
    }
    attempts++;
    if (num === secret) {
      console.log(`✅ Correct! The number was ${secret}. Attempts: ${attempts}`);
      // Ask to play again
      rl.question('Play again? (y/n): ', (ans) => {
        if (ans.trim().toLowerCase().startsWith('y')) {
          secret = randInt(1, 100);
          attempts = 0;
          console.log('New game! I picked a new number.');
          ask();
        } else {
          console.log('Good game!');
          rl.close();
        }
      });
      return;
    }
    console.log(num < secret ? 'Higher ⬆️' : 'Lower ⬇️');
    ask();
  });
}

ask();

/*
  * ==========================
  * Starter Exercises
  * ==========================
  * 1) // TODO: Limit to max 10 attempts; if exceeded, reveal the number and offer replay.
  * 2) // TODO: Track best score (fewest attempts) across games and display it.
  * 3) // TODO: Add a difficulty mode: easy(1..50), normal(1..100), hard(1..500).
  */
