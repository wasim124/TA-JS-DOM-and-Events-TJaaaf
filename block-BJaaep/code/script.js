// Without Event Deligation

let firstBox = document.querySelectorAll(".first li");
firstBox.forEach((box, index) => {
  box.addEventListener("click", (event) => {
    event.target.innerText = index + 1;
    setTimeout(() => {
      event.target.innerText = "";
    }, 1500);
  });
});

// With Event Deligation

let secondBox = document.querySelector(".second");

secondBox.addEventListener("click", (event) => {
  let text = event.target.dataset.text;
  event.target.innerText = text;

  setTimeout(() => {
    event.target.innerText = "";
  }, 1500);
});


// let secondBox = document.querySelectorAll(".second");
// let box = document.querySelector(".second")
// box.addEventListener("click",(event) => {
//     secondBox.forEach((box,i) => {
//         box.setAttribute("data-text", i+1)
//     });
//     let text = event.target.dataset.text;
//     event.target.innerText = text;
//     setTimeout(()=>{
//         event.target.innerText = ""
//     },1500)
// });
