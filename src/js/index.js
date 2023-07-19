const botaoInscricao = document.getElementById("btn-subscribe");
const botaoDismiss = document.getElementById("btn-dismiss");
const newlestter = document.getElementById("newlestter");
const newlestterSuccess = document.getElementById("newlestter-success");
const emailInput = document.getElementById("email");
const emailValidationMessage = document.getElementById("email-validation");

botaoInscricao.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;

  if (isValidEmail(email)) {
    newlestter.classList.add("hide");
    newlestterSuccess.classList.remove("hide");
    emailValidationMessage.classList.add("hide");
    emailInput.classList.remove("error-border-email");
  } else {
    emailValidationMessage.textContent = "Valid email required";
    emailValidationMessage.classList.remove("hide");
    emailInput.classList.add("error-border-email");
  }
});

botaoDismiss.addEventListener("click", () => {
  newlestter.classList.remove("hide");
  newlestterSuccess.classList.add("hide");
  emailValidationMessage.classList.add("hide");
  emailInput.classList.remove("error-border-email");
});

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("error-border-email");
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
