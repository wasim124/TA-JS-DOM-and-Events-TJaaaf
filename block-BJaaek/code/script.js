let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

function generateColor() {
  let hexChar = [
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
    let randomNum = Math.floor(Math.random() * 4);
    color = color + hexChar[randomNum];
  }

  return color;
}

function boxClick(){
    let randomColor =generateColor();

    firstBox.style.backgroundColor = randomColor;
}

function boxMove(){
    let randomColor =generateColor();

    secondBox.style.backgroundColor = randomColor;
}

firstBox.addEventListener("click", boxClick);

secondBox.addEventListener("mousemove", boxMove);

