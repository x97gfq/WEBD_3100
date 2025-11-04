
/**
 * rps.js — Rock–Paper–Scissors
 * Run: node rps.js
 *
 * Concepts: input normalization, conditional logic/switch, simple scoring.
 */

const choices = ['rock', 'paper', 'scissors'];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function winner(user, comp) {
  if (user === comp) return 'draw';
  if ((user === 'rock' && comp === 'scissors') ||
      (user === 'paper' && comp === 'rock') ||
      (user === 'scissors' && comp === 'paper')) return 'user';
  return 'comp';
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("✊ ✋ ✌️ Rock–Paper–Scissors. Type rock/paper/scissors, or 'q' to quit.");
let scores = { user: 0, comp: 0, draw: 0 };

function round() {
  rl.question('Your move: ', (ans) => {
    const user = ans.trim().toLowerCase();
    if (user === 'q') { 
      console.log(`Final scores => You: ${scores.user}, Computer: ${scores.comp}, Draws: ${scores.draw}`);
      rl.close();
      return;
    }
    if (!choices.includes(user)) {
      console.log("Please type 'rock', 'paper', or 'scissors'.");
      return round();
    }
    const comp = pickRandom(choices);
    const w = winner(user, comp);
    scores[w]++;
    console.log(`You: ${user} | Computer: ${comp} => ${w === 'draw' ? 'Draw' : w === 'user' ? 'You win!' : 'Computer wins!'}`);
    round();
  });
}

round();

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Add best‑of‑3 mode; first to 2 wins ends the session and prints the champion.
 * 2) // TODO: Keep a history of rounds (user vs comp) and print it on quit.
 * 3) // TODO: Add 'lizard' and 'spock' options and update the rules accordingly.
 * 4) // TODO: Validate inputs more flexibly (e.g., accept 'r', 'p', 's').
 */
