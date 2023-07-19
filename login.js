document.getElementById('login-form').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Collect the data from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object to hold the data
    const data = {
        email: email,
        password: password
    };

    // Send the data to the server
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
});
