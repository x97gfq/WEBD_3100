
/**
 * convert.js — Temperature Converter (C ↔ F)
 * Run: node convert.js
 *
 * Concepts: functions with return values, parsing, rounding, validation.
 */

function cToF(c) { return (c * 9/5) + 32; }
function fToC(f) { return (f - 32) * 5/9; }

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🌡️ Enter conversions like 'C 23' or 'F 72'. Type 'q' to quit.");

function ask() {
  rl.question('Convert: ', (line) => {
    const t = line.trim();
    if (t.toLowerCase() === 'q') { rl.close(); return; }
    const [unitRaw, valueRaw] = t.split(/\s+/);
    const unit = (unitRaw || '').toUpperCase();
    const value = Number(valueRaw);
    if (!['C', 'F'].includes(unit) || Number.isNaN(value)) {
      console.log("Try 'C 23' (to F) or 'F 72' (to C).");
      return ask();
    }
    if (unit === 'C') {
      console.log(`${value.toFixed(1)}°C = ${cToF(value).toFixed(1)}°F`);
    } else {
      console.log(`${value.toFixed(1)}°F = ${fToC(value).toFixed(1)}°C`);
    }
    ask();
  });
}

ask();

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Accept inputs like '23C' or '72F' (no space) and parse them.
 * 2) // TODO: Round results to N decimals (ask the user for N first).
 * 3) // TODO: Warn if the temperature is below absolute zero (‑273.15°C / ‑459.67°F).
 * 4) // TODO: Add Kelvin support (K) for both directions.
 */
