let input = document.querySelector(`input[type="text"]`);
let rootElm =document.querySelector(".movies");


let allMovies = [
  {
    name: "Ghost Rider",
    watched: false,
  },
  {
    name: " SpiderMan",
    watched: false,
  },
];


input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    movieUI();
    event.target.value = "";
  }
});

function remove(event){
event.target.parentElement.remove();
}

function movieUI() {
    rootElm.innerHTML="";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = i;
    input.checked=movie.watched;
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";

    span.addEventListener('click',remove )
    li.append(input, label, span);

    rootElm.append(li);
  });
}

movieUI();