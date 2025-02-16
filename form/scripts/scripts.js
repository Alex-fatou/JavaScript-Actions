const contactForm = document.forms["contact-form"];

contactForm.addEventListener("submit", function (submitEvent) {
  submitEvent.preventDefault();

  const username = contactForm.username;
  const email = contactForm.email;
  const emailConfirm = contactForm["email-confirm"];
  const phone = contactForm.phone;
  const message = contactForm.message;

  const emailFormatError = document.getElementById("email-format-error");
  const emailConfirmFormatError = document.getElementById("email-confirm-format-error");
  const emailMatchError = document.getElementById("email-match-error");
  const phoneError = document.getElementById("phone-error");

  let isValid = true;

  // Έλεγχος αν τα email περιέχουν '@'
  if (!email.value.includes("@")) {
    emailFormatError.classList.remove("hidden");
    isValid = false;
  } else {
    emailFormatError.classList.add("hidden");
  }

  if (!emailConfirm.value.includes("@")) {
    emailConfirmFormatError.classList.remove("hidden");
    isValid = false;
  } else {
    emailConfirmFormatError.classList.add("hidden");
  }

  //mails scheck
  if (email.value !== emailConfirm.value) {
    emailMatchError.classList.remove("hidden");
    isValid = false;
  } else {
    emailMatchError.classList.add("hidden");
  }

  // phone scheck
  const phonePattern = /^\+30\d+$/; 
  if (!phone.value.match(phonePattern)) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }
});

// mail scheck
const emailInput = contactForm.email;
const emailConfirmInput = contactForm["email-confirm"];
const phoneInput = contactForm.phone;

function validateEmailFormat() {
  const emailFormatError = document.getElementById("email-format-error");
  emailFormatError.classList.toggle("hidden", emailInput.value.includes("@"));
}

function validateEmailConfirmFormat() {
  const emailConfirmFormatError = document.getElementById("email-confirm-format-error");
  emailConfirmFormatError.classList.toggle("hidden", emailConfirmInput.value.includes("@"));
}

function validateEmailMatch() {
  const emailMatchError = document.getElementById("email-match-error");
  emailMatchError.classList.toggle("hidden", emailInput.value === emailConfirmInput.value);
}

  // phone scheck
function validatePhoneFormat() {
  const phoneError = document.getElementById("phone-error");
  const phonePattern = /^\+30\d+$/;
  phoneError.classList.toggle("hidden", phoneInput.value.match(phonePattern));
}

emailInput.addEventListener("blur", validateEmailFormat);
emailConfirmInput.addEventListener("blur", validateEmailConfirmFormat);
emailConfirmInput.addEventListener("blur", validateEmailMatch);
phoneInput.addEventListener("blur", validatePhoneFormat);


// username scheck
function validateUsername() {
  const username = contactForm.username.value.trim();

  document.getElementById("min-length-username").classList.toggle("hidden", username.length >= 5);
  document.getElementById("max-length-username").classList.toggle("hidden", username.length <= 10);
  document.getElementById("no-space-username").classList.toggle("hidden", !username.includes(" "));
}

const usernameInput = contactForm.username;
usernameInput.addEventListener("blur", validateUsername);

usernameInput.addEventListener("focus", () => {
  document.querySelectorAll(".error-message").forEach(span => span.classList.add("hidden"));
});
