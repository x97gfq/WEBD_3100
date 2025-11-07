document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate username
        if (usernameInput.value.trim() === '') {
            isValid = false;
            alert('Username is required.');
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            isValid = false;
            alert('Password is required.');
        } else if (passwordInput.value.length < 6) {
            isValid = false;
            alert('Password must be at least 6 characters long.');
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
