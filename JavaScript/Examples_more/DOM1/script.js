document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input value
    const newItem = document.getElementById('newItem').value;

    // Check if the input is not empty
    if (newItem.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = newItem;
        li.className = 'list-group-item';

        // Add the new list item to the list
        document.getElementById('todoList').appendChild(li);

        // Clear the input field
        document.getElementById('newItem').value = '';
    }
});
