const inputEmail = document.getElementById("email");
const spanEmail = document.getElementById("error_email");
console.log(inputEmail);

function verifyEmail(email) {
  const emailRegExp = new RegExp(`^[a-zA-Z0-9._-]+@[a-z._-]+\\.[a-z._-]+$`);
  let testEmail = emailRegExp.test(email.target.value);
  console.log(testEmail);

  if (testEmail) {
    spanEmail.innerHTML = "";
  } else {
    spanEmail.innerHTML = "Please enter a valid email";
    spanEmail.style.color = "red";
  }
}

inputEmail.addEventListener("input", verifyEmail);
