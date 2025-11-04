
/**
 * magic8.js — Magic‑8 Ball
 * Run: node magic8.js
 *
 * Concepts: arrays, random selection, functions, readline loop, validation.
 */

const answers = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Ask again later.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "Very doubtful."
];

function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🎱 Magic‑8 Ball — ask a yes/no question. Type 'q' to quit.");

function ask() {
  rl.question('Your question: ', (q) => {
    const text = q.trim();
    if (text.toLowerCase() === 'q') {
      console.log('Goodbye!');
      rl.close();
      return;
    }
    if (!text) {
      console.log('Please ask a non‑empty question.');
      return ask();
    }
    const answer = pickRandom(answers);
    console.log(`You asked: ${text}`);
    console.log('🎱 Answer:', answer);
    ask();
  });
}

ask();

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Ensure the question ends with '?' — if not, prompt the user to add it.
 * 2) // TODO: Keep a history array of all questions/answers. On quit, print the history.
 * 3) // TODO: Add more answers (students each contribute 2) and re‑run.
 */
