document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.btn-group .btn');
    const resultElement = document.getElementById('result');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const userChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        });
    });

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(userChoice, computerChoice, result) {
        resultElement.innerHTML = `
            You chose: <strong>${userChoice}</strong><br>
            Computer chose: <strong>${computerChoice}</strong><br>
            <strong>${result}</strong>
        `;
    }
});
