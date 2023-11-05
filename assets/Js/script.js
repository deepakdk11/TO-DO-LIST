// Header Date Code

const date = document.querySelector(".date");
let dates = new Date();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  " August",
  "September",
  "October",
  " November",
  "December",
];

let dat = dates.getDate();
let months = month[dates.getMonth()];
let year = dates.getFullYear();

date.innerHTML = `${dat}, ${months}, ${year}`;

// ---------

const input = document.querySelector("#items");
const btn = document.querySelector("button");
const para = document.querySelector(".para");
const result = document.querySelector(".result");

let todos = [];

window.onload = () => {
  let item = JSON.parse(localStorage.getItem("items")) || [];
  item.forEach((todo) => addTodo(todo));
};

btn.addEventListener("click", () => {
  todos.push(input.value);
  if (input.value === "") {
    result.innerHTML = `<q>Add Your List</q>`;
  } else {
    localStorage.setItem("items", JSON.stringify(todos));
  }

  addTodo(input.value);
  input.value = "";
});

function addTodo(todo) {
  let parah = document.createElement("p");
  parah.innerHTML = todo;
  para.appendChild(parah);
  parah.addEventListener("click", () => {
    parah.classList.add("checked");
  });
  parah.addEventListener("dblclick", () => {
    para.removeChild(parah);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("items", JSON.stringify(todos));
}
