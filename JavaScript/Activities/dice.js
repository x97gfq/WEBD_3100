
/**
 * dice.js — Dice Roller (NdM)
 * Run: node dice.js
 *
 * Concepts: parsing strings ("2d6"), random integers, loops, array reduce, validation.
 * 
 * 1d6 = roll one six-sided die (like a standard board game die).
 * 2d8 = roll two eight-sided dice and sum the results.
 * 3d20 = roll three twenty-sided dice (common in RPGs).
*/

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(spec = '1d6') {
  const parts = spec.toLowerCase().split('d');
  if (parts.length !== 2) {
    console.log("Use format NdM, e.g., 2d6 or 1d20.");
    return;
  }
  const count = Number(parts[0]);
  const sides = Number(parts[1]);
  if (!Number.isInteger(count) || !Number.isInteger(sides) || count < 1 || sides < 2) {
    console.log("Invalid spec. N>=1 and M>=2, e.g., 2d6.");
    return;
  }
  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(randInt(1, sides));
  }
  const total = rolls.reduce((a, b) => a + b, 0);
  console.log(`${spec}:`, rolls, 'total =', total);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🎲 Dice Roller — enter NdM (e.g., 1d6, 2d8). Type 'q' to quit.");

function prompt() {
  rl.question('Roll: ', (line) => {
    const s = line.trim();
    if (s.toLowerCase() === 'q') { rl.close(); return; }
    roll(s || '1d6');
    prompt();
  });
}

prompt();

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Allow a suffix like '+3' (e.g., 2d6+3) and add it to the total.
 * 2) // TODO: Roll multiple specs separated by commas: "1d6,2d6,1d20".
 * 3) // TODO: Track statistics over 100 rolls of 2d6: min, max, average.
 */
