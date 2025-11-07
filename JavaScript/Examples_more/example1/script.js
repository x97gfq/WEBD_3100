document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Name is required.');
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            isValid = false;
            alert('Email is required.');
        } else if (!validateEmail(emailInput.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Message is required.');
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
