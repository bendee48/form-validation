const email = document.querySelector('input[name="email"]');
const emailErrors = document.querySelector('.errors-email');


email.addEventListener('focusout', validateEmail);

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let errorText = '';

  if (!email.value) {
    errorText += 'This field is required';
    email.className = 'invalid';
    emailErrors.textContent = errorText;
    return false;
  };
  if (!emailRegex.test(email.value)) {
    errorText += 'Not a valid email address';
    email.className = 'invalid';
    emailErrors.textContent = errorText;
    return false;
  };

  email.className = 'valid';
  emailErrors.textContent = '';
  return true;
}