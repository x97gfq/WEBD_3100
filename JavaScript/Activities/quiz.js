
/**
 * quiz.js — Tiny Quiz
 * Run: node quiz.js
 *
 * Concepts: arrays of objects, loops, scoring, case‑insensitive comparison.
 */

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const questions = [
  { q: 'What does HTML stand for?', a: 'hypertext markup language' },
  { q: 'Which language styles web pages?', a: 'css' },
  { q: 'What language adds interactivity in the browser?', a: 'javascript' },
];

let score = 0; let index = 0;
console.log("📝 Tiny Quiz — type your answer (or 'q' to quit)");

function askNext() {
  if (index >= questions.length) {
    console.log(`Done! Score: ${score}/${questions.length}`);
    rl.close();
    return;
  }
  const { q, a } = questions[index];
  rl.question(`Q${index+1}: ${q} `, (ans) => {
    const t = ans.trim();
    if (t.toLowerCase() === 'q') { console.log('Quit.'); rl.close(); return; }
    if (t.toLowerCase() === a.toLowerCase()) {
      console.log('✅ Correct!');
      score++;
    } else {
      console.log(`❌ Incorrect. Correct answer: ${a}`);
    }
    index++;
    askNext();
  });
}

askNext();

/*
  * ==========================
  * Starter Exercises
  * ==========================
  * 1) // TODO: Accept multiple correct answers using an array (e.g., ['js','javascript']).
  * 2) // TODO: Ignore punctuation/spaces in answers (normalize input before compare).
  * 3) // TODO: Add a timer: if no answer in N seconds, mark incorrect and continue.
  * 4) // TODO: Add a final percentage and letter grade.
  */
