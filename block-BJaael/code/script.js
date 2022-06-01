let h1 = document.querySelector("h1");
let allbox = document.querySelector(".allbox");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max); 
}
function getRandomColor() {
  let hexChar= [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(16);
    color = color + hexChar[randomNumber];
  }
  return color;
}

for (let i = 1; i <= 500; i++) {
  let boxes = document.createElement("div");
  boxes.classList.add("box");
  let h3 = document.createElement("h1");
  let randomNo = getRandomNumber(500);
  h3.innerText = randomNo;
 boxes.append(h3);
  allbox.append(boxes);
}
let boxes = document.querySelectorAll(".box");
function colorBox() {
  boxes.forEach((elm) => {
    elm.style.backgroundColor = getRandomColor();

    elm.children[0].innerText = getRandomNumber(500);
  });
}

allbox.addEventListener("mousemove", colorBox);
