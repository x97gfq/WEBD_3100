document.getElementById('submitBtn').addEventListener('click', function() {
    alert('Button clicked');
  });

document.getElementById('myForm').addEventListener('submit', function(event) {
    alert('Form submitted');
    event.preventDefault();
});

document.getElementById('name').addEventListener('mouseover', function() {
    console.log('Mouse over name field');
});

document.getElementById('name').addEventListener('mouseout', function() {
    console.log('Mouse out of name field');
});

document.getElementById('email').addEventListener('change', function() {
    console.log('Email changed');
});

document.getElementById('name').addEventListener('focus', function() {
    console.log('Name field focused');
});

document.getElementById('name').addEventListener('blur', function() {
    console.log('Name field blurred');
});

document.getElementById('name').addEventListener('keyup', function(event) {
    console.log('Key up: ' + event.key);
});

document.getElementById('name').addEventListener('keydown', function(event) {
    console.log('Key down: ' + event.key);
});