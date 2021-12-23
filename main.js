const addtobutton = document.getElementById("btn");
const todos = document.getElementById("todolist");
const todocontainers = document.getElementById("todocontainer");

addtobutton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = todos.value;
  todocontainers.appendChild(paragraph);
  todos.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    todocontainers.removeChild(paragraph);
  });
});
