const email = document.querySelector('input[name="email"]');
const emailErrors = document.querySelector('.errors-email');
const country = document.querySelector('input[name="country"]');
const countryErrors = document.querySelector('.errors-country');
email.addEventListener('focusout', validateEmail);
country.addEventListener('focusout', validateCountry);

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let errorText = '';

  if (!inputIsPresent(email, errorText, emailErrors)) {
    return false;
  }

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

function validateCountry() {
  let errorText = '';

  if (!inputIsPresent(country, errorText, countryErrors)) {
    return false;
  }

  if (country.value.length > 30) {
    errorText += 'Must be shorter than 30 chars';
    country.className = 'invalid';
    countryErrors.textContent = errorText;
    return false;
  }

  if (/\d/.test(country.value)) {
    errorText += 'Country shouldn\'t contain any numbers';
    country.className = 'invalid';
    countryErrors.textContent = errorText;
    return false;
  }

  country.className = 'valid';
  countryErrors.textContent = '';
  return true;
}

function inputIsPresent(inputElement, errorText, errorContainer) {
  if (!inputElement.value) {
    errorText += 'This field is required';
    inputElement.className = 'invalid';
    errorContainer.textContent = errorText;
    return false;
  }
  return true;
}