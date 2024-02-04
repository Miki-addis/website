// script.js

function submitForm(event) {
    event.preventDefault();

    // Placeholder function for handling form submission
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    // Display a confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `Thank you for your RSVP! Email: ${email}, Attendance: ${attendance}`;
}
