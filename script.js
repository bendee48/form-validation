const email = document.querySelector('input[name="email"]');
const emailErrors = document.querySelector('.errors-email');
const country = document.querySelector('input[name="country"]');
const countryErrors = document.querySelector('.errors-country');
const postcode = document.querySelector('input[name="postcode"]');
const postcodeErrors = document.querySelector('.errors-postcode');
const password = document.querySelector('input[name="password"]');
const passwordErrors = document.querySelector('.errors-password');
email.addEventListener('focusout', validateEmail);
country.addEventListener('focusout', validateCountry);
postcode.addEventListener('focusout', validatePostcode);
password.addEventListener('focusout', validatePassword);

// Return false if any validation check fails, otherwise true fo each validate function
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

function validatePostcode() {
  let errorText = '';
  // Regex valid for UK postcodes
  const postcodeRegex = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;

  if (!inputIsPresent(postcode, errorText, postcodeErrors)) {
    return false;
  }

  if (!postcodeRegex.test(postcode.value)) {
    errorText += 'Not a valid UK postcode';
    postcode.className = 'invalid';
    postcodeErrors.textContent = errorText;
    return false;
  };

  postcode.className = 'valid';
  postcodeErrors.textContent = '';
  return true;
}

function validatePassword() {
  let errorText = '';
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!inputIsPresent(password, errorText, passwordErrors)) {
    return false;
  }

  if (password.value.length < 8) {
    errorText += 'Password should be at least 8 characters long';
    password.className = 'invalid';
    passwordErrors.textContent = errorText;
    return false;
  }

  if (!passwordRegex.test(password.value)) {
    errorText += 'Password should contain letters and numbers';
    password.className = 'invalid';
    passwordErrors.textContent = errorText;
    return false;
  }

  password.className = 'valid';
  passwordErrors.textContent = '';
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