
// Real-Time form validation function
let formValidation = (function() {
  let form = document.querySelector('.contact-form');
  let nameInput = document.querySelector('#contact-name');
  let emailInput = document.querySelector('#contact-email');
  let messageInput = document.querySelector('#user-message');

  function showErrorMessage(input, message) {
    // Selects div class="form-group"
    let container = input.parentElement;

    // Removes an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    // adds error if message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  // Validates email input and email
  function validateEmail() {
    let value = emailInput.value;
    // verifies a email has been entered
    if (!value) {
      showErrorMessage(emailInput,'Email is a required field');
      return false;
    }
    // verifies email has @ sign
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  // Validates name has been inputed
  function validateName() {
    let value = nameInput.value;
    // verifies a name has been entered
    if (!value) {
      showErrorMessage(nameInput,'Your name is required.');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  // Validates message has been inputed
  function validateMessage() {
    let value = messageInput.value;
    // verifies a message has been entered
    if (!value) {
      showErrorMessage(messageInput,'A message is required.');
      return false;
    }
    showErrorMessage(messageInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidName = validateName();
    let isValidMessage = validateMessage();
    return isValidEmail && isValidName && isValidMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  nameInput.addEventListener('input', validateName);
  messageInput.addEventListener('input', validateMessage);

})();

formValidation;
