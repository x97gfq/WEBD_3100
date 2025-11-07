document.getElementById('myForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    if (name === '') {
      alert('Name cannot be empty');
      event.preventDefault();
    } else {
        alert('Hello, ' + name);
    }
  });