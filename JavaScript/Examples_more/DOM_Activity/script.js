const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const guess = parseInt(document.getElementById('guessInput').value);
    const result = document.getElementById('result');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        result.className = 'text-danger';
    } else if (guess < randomNumber) {
        result.textContent = 'Too low! Try again.';
        result.className = 'text-warning';
    } else if (guess > randomNumber) {
        result.textContent = 'Too high! Try again.';
        result.className = 'text-warning';
    } else {
        result.textContent = 'Congratulations! You guessed the correct number!';
        result.className = 'text-success';
    }
});
