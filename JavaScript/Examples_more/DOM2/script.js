let counter = 0;

document.getElementById('incrementBtn').addEventListener('click', function() {
    counter++;
    document.getElementById('counterValue').textContent = counter;
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    counter--;
    document.getElementById('counterValue').textContent = counter;
});
