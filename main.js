let addtobutton = document.getElementById(btn);
let todos = document.getElementById(todolist);
let todocontainers = document.getElementById(todocontainer);

addtobutton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = innerField.value;
    todocontainers.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        todocontainers.removeChild(paragraph);
    })
})