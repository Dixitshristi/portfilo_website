document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // You can add further functionality like sending the form data to a server here.
    } else {
        alert('Please fill out all fields.');
    }
  });
  
