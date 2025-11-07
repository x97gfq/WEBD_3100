
// Function to get a random number between 1 and 6 inclusive
function getDiceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

// Function to roll two dice and update the page
function rollDice() {
  // Generate random numbers between 1 and 6 for each die
  const die1 = getDiceRoll();
  const die2 = getDiceRoll();

  // Update the dice display on the page
  document.getElementById('dice1').textContent = `Dice 1: ${die1}`;
  document.getElementById('dice2').textContent = `Dice 2: ${die2}`;

  // Check if the dice match and display a message
  const message = (die1 === die2)
    ? "🎉 It's a match!"
    : "❌ No match. Try again!";

  document.getElementById('message').textContent = message;
}

// Add an event listener to the play button to trigger the dice roll
document.getElementById('play').addEventListener('click', rollDice);
