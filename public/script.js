// Get the login form element
const loginForm = document.getElementById('login-form');

// Add an event listener to the login form submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    // Redirect to the profile page if the login is successful
    if (username === 'your_username' && password === 'your_password') {
        window.location.href = '.\profile.html';
    } else {
        alert('Invalid username or password. Please try again.'); // Show an error message
    }
});
