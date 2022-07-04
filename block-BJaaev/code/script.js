let inputText = document.querySelector(`input[type="text"]`);
let root = document.querySelector("ul");

// console.log(inputText);

let allTodos = [];

function handleInput(event) {
  let value = event.target.value;

  if (event.keyCode === 13 && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    event.target.value = "";

    todoUI();
  }
}

function handleChecked(event){
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  todoUI();
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  todoUI();
}

function todoUI() {
  root.innerHTML = "";
  allTodos.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener('input', handleChecked);
    input.setAttribute("data-id",index);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);
    li.append(input, p, span);
    root.append(li);
  });
}

inputText.addEventListener("keyup", handleInput);
