/// Initial welcome message prompt
welcomeMessage();

/// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let userResponse = prompt("Welcome to Our Website! Input your name:");

    /// If user cancels or inputs empty string, default to "Guest"
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    /// Display personalized welcome message on the webpage
    document.getElementById("welcome-speech").innerHTML = "Hello, " + userResponse + "! Welcome to Our Website!";
}

document.getElementById('btn-submit').addEventListener('click', function () {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.querySelector('textarea[name="input[message]"]').value.trim();
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10,15}$/;
    
    if (name === '') {
        alert('Name is required!');
        return;
    }
    if (email === '') {
        alert('Email is required!');
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Email is not valid!");
        return;
    }
    
    if (subject === '') {
        alert('Subject is required!');
        return;
    }
    if (phone === '') {
        alert('Phone is required!');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone is not valid!");
        return;
    }

    if (message === '') {
        alert('Message is required!');
        return;
    }

    alert(
        "Your Data:" + "\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + subject + "\n" +
        "Phone: " + phone + "\n" +
        "Message: " + message
    );

    document.getElementById('value-name').textContent = name;
    document.getElementById('value-email').textContent = email;
    document.getElementById('value-subject').textContent = subject;
    document.getElementById('value-phone').textContent = phone;
    document.getElementById('value-message').textContent = message;
});

