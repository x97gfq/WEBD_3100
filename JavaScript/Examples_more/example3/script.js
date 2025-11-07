document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const toastElement = document.getElementById('validationToast');
    const toast = new bootstrap.Toast(toastElement, { delay: 10000 }); // Set delay to 10000 milliseconds (10 seconds)
    const toastBody = document.querySelector('.toast-body');

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';

        // Reset previous validation states
        usernameInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        // Validate username
        if (usernameInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Username is required.<br>';
            usernameInput.classList.add('is-invalid');
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Password is required.<br>';
            passwordInput.classList.add('is-invalid');
        } else if (passwordInput.value.length < 6) {
            isValid = false;
            errorMessage += 'Password must be at least 6 characters long.<br>';
            passwordInput.classList.add('is-invalid');
        }

        // Show toast if validation fails
        if (!isValid) {
            event.preventDefault();
            toastBody.innerHTML = errorMessage;
            toast.show();
        }
    });
});
