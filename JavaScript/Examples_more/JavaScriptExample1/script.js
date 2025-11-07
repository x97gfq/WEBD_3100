document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Simple validation
    if (input1 === '' || input2 === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else {
        errorMessage.textContent = 'Form submitted successfully!';
        // Here you can add code to handle the form submission, e.g., sending data to a server
    }
});
