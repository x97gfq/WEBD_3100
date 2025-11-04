
/**
 * 03_switch_statement.js
 * ----------------------------------------
 * Run: node 03_switch_statement.js
 *
 * Demonstrates a switch statement. Here we convert a day number
 * (0-6) to a day name. `break` prevents fall-through.
 */

const dayNumber = 2; // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
let dayName;

switch (dayNumber) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  default:
    dayName = '(invalid day number)';
}

console.log(`Day ${dayNumber} => ${dayName}`);

// Tip: Without `break`, execution would "fall through" to the next case.
// You can use that intentionally to group cases.

/*
 * ==========================
 * Starter Exercises
 * ==========================
 * 1) // TODO: Group 0 and 6 into 'Weekend' using fall-through, and 1-5 into 'Weekday'.
 * 2) // TODO: Add input validation: if dayNumber is outside 0-6, log a helpful error message.
 * 3) // TODO: Rewrite the same logic using an object map (e.g., const days = {0:'Sun', ...}).
 * 4) // TODO: Convert this switch into an if/else chain — which version do you find clearer and why?
 */
