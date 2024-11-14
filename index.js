// Function to handle sign-up
function signUp() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (username && password) {
        // Save credentials in localStorage
        localStorage.setItem(username, password);
        document.getElementById("message").textContent = "Sign up successful!, Redirecting to the Login ";

        document.getElementById("message").style.color = "green";
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
        
    } else {
        document.getElementById("message").textContent = "Please enter both username and password.";
        document.getElementById("message").style.color = "red";
    }
}

// Function to handle login
function login() {
    const username = document.getElementById("login-username").value;
    // const username = document.querySelector("#login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieve credentials from localStorage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById("message").textContent = "Login successful! Redirecting to homepage...";
        document.getElementById("message").style.color = "green";
        // Redirect to homepage or grant access
        setTimeout(() => {
            window.location.href = "welcome.html"; // Replace with actual homepage
        }, 1500);
    } else {
        document.getElementById("message").textContent = "Login failed. Incorrect username or password.";
        document.getElementById("message").style.color = "red";
    }
}