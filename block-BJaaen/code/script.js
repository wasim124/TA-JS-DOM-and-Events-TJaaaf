let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector("button");

let dataOfGame = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
];
let count = 0;

let userSelected = {},
  computerSelected = {};
function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerHTML = "Its A Tie";
  } else if (user.beats === computer.name) {
    result.innerHTML = " User wins";
  } else {
    result.innerHTML = "Computer Wins";
  }
}
function getRandomNumber(num = 3) {
  return Math.floor(Math.random() * num);
}

function createUserLayout() {
  userRoot.innerHTML = "";
  dataOfGame.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;

    if (userSelected.name === icon.name) {
      li.classList.add("selected");
    }

    li.addEventListener("click", () => {
      userSelected = icon;
      computerSelected = dataOfGame[getRandomNumber()];
      getWinner(userSelected, computerSelected);
      createComputerLayout();
      createUserLayout();
    });
    li.append(i);
    userRoot.append(li);
  });
}
createUserLayout();

function createComputerLayout() {
  computerRoot.innerHTML = "";
  dataOfGame.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;

    if (computerSelected.name === icon.name) {
      li.classList.add("selected");
    }
    li.append(i);
    computerRoot.append(li);
  });
}
createComputerLayout();

reset.addEventListener("click", () => {
  userSelected = {};
  computerSelected = {};
  createUserLayout();
  createComputerLayout();
});
