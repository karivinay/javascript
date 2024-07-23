// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Get form values
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     // Simple validation
//     if (password !== confirmPassword) {
//         setMessage("Passwords do not match", 'red');
//         return;
//     }

//     // If all validations pass, display success message
//     setMessage("Registration successful! Welcome " + username, 'green');
//     // You can also submit the form here if needed
// });

// function setMessage(message, color) {
//     var messageElement = document.getElementById("message");
//     messageElement.style.color = color;
//     messageElement.textContent = message;
// }



function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetching values from inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple validation
    if (username.trim() === '' || password.trim() === '') {
      document.getElementById('error-msg').textContent = 'Username and password are required.';
      return;
    }
  
    // If validation passes, you can proceed with form submission or other actions
    // For demonstration purposes, simply log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Optional: Redirect to another page or perform further actions
  }