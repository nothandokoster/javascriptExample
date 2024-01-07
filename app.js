const formInput = document.querySelector('.input-email');
const formInputPassword = document.querySelector('.input-password');
const message = document.querySelector('.error-message');
const messagePassword = document.querySelector('.error-message-password');
const Btn = document.querySelector('.submit-btn');

Btn.addEventListener('click', function (event) {
    event.preventDefault();

    const enteredEmail = formInput.value.trim();
    const enteredPassword = formInputPassword.value.trim();

    // Clear any previous error messages (if applicable)
    message.textContent = "";
    messagePassword.textContent = "";

    // Check for empty email
    if (enteredEmail === "") {
        message.textContent = 'Email cannot be empty';
        formInput.style.borderColor = "red";
    }

    // Check for empty password
    if (enteredPassword === "") {  // Use 'if' here, not 'else if'
        messagePassword.textContent = 'Password cannot be empty';
        formInputPassword.style.borderColor = "red";
    }

});
