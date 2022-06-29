let form = document.querySelector("form");

let userInfo = {};

let errorMsg = {};

function diplayError(name) {
  form.elements[name].nextElementSibling.innerText = errorMsg[name];
  form.elements[name].parentElement.classList.add("error");
}

function diplaySuccess(name) {
  form.elements[name].nextElementSibling.innerText = "";
  errorMsg[name] = "";
  form.elements[name].parentElement.classList.remove("error");
  form.elements[name].parentElement.classList.add("success");
}

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  const username = elements.username.value;
  const name = elements.name.value;
  const email = elements.email.value;
  const phone = elements.phone.value;
  const password = elements.password.value;
  const passwordCheck = elements["password-check"].value;

  // 1. Username can't be less than 4 characters
  if (username.length < 4) {
    errorMsg.username = "Username can't be less than 4 characters";
    diplayError("username");
  } else {
    diplaySuccess("username");
  }

  // 2. Name can't be numbers

  if (!isNaN(name)) {
    errorMsg.name = "Name can't be numbers";
    diplayError("name");
  } else {
    diplaySuccess("name");
  }

  // 3. Email must contain the symbol `@`
  // 4. Email must be at least 6 characters

  if (!email.includes("@")) {
    errorMsg.email = "Email must contain the symbol `@`";
    diplayError("email");
  } else if (email.length < 6) {
    errorMsg.email = "Email must be at least 6 characters";
    diplayError("email");
  } else {
    diplaySuccess("email");
  }

  // 5. Phone numbers can only be a number
  // 6. Length of phone number can't be less than 7

  if (isNaN(phone)) {
    errorMsg.phone = "Phone numbers can only be a number";
    diplayError("phone");
  } else if (phone.length < 7) {
    errorMsg.phone = " Length of phone number can't be less than 7";
    diplayError("phone");
  }else {
    diplaySuccess("phone");
  }


  // 8. Password and confirm password must be same.

  if (password !== passwordCheck) {
    errorMsg.password = "Password and confirm password must be same";
    errorMsg["password-check"] = "Password and confirm password must be same";
    diplayError("password");
    diplayError("password-check");
  } 
  else {
    diplaySuccess("password");
    diplaySuccess("password-check");
  }

}

form.addEventListener("submit", handleSubmit);
