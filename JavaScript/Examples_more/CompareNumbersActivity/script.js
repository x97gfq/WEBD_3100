document.getElementById('compareForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = document.getElementById('result');

    // Clear any previous result
    result.textContent = '';

    // Compare the numbers and display the result
    if (isNaN(number1) || isNaN(number2)) {
        result.textContent = 'Please enter valid numbers in both fields.';
    } else if (number1 > number2) {
        result.textContent = 'Number 1 is greater than Number 2.';
    } else if (number1 < number2) {
        result.textContent = 'Number 2 is greater than Number 1.';
    } else {
        result.textContent = 'Both numbers are equal.';
    }
});
