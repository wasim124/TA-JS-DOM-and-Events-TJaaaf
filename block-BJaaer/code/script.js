let form = document.querySelector("form");
let modal = document.querySelector(".modal__overlay");
let formBox = document.querySelector(".formBox");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");

let userData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  userData.name = event.target.elements.name.value;
  userData.email = event.target.elements.email.value;
  userData.gender = event.target.elements.gender.value;
  userData.color = event.target.elements.color.value;
  userData.range = event.target.elements.range.value;
  userData.drone = event.target.elements.drone.value;
  userData.terms = event.target.elements.terms.checked;

  btn.onclick = function () {
    modal.style.display = "block";
  };

  close.onclick = function () {
    modal.style.display = "none";
  };

  displayInfo(userData);
});

function displayInfo(data = {}) {
  formBox.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let gender = document.createElement("p");
  gender.innerText = `You Love: ${data.gender}`;
  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;
  let range = document.createElement("p");
  range.innerText = `Rating: ${data.range}`;
  let drone = document.createElement("p");
  drone.innerText = `Book Genre: ${data.drone}`;
  let terms = document.createElement("p");
  terms.innerText = ` 👉: ${
    data.terms
      ? "You have accepted the terms & condition"
      : "You have not accepted the terms & condition"
  }`;

  formBox.append(h1, email, gender, color, range, drone, terms);
}
