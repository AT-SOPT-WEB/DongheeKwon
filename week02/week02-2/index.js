const todolist = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");
const addTodo = () => {
  const todoInputText = input.value;
  if (!todoInputText) {
    return;
  }
  let string = localStorage.getItem("todos");
  let newString = string ? string : "";
  newString += todoInputText + ",";
  localStorage.setItem("todos", newString);

  renderTodo();
};

const renderTodo = () => {
  const todos = localStorage.getItem("todos").split(",");
  if (!todos) {
    return;
  }
  let list = "";
  for (let i = 0; i < todos.length - 1; i++) {
    list += `<li>${todos[i]}</li>`;
  }
  todolist.innerHTML = list;
  input.value = "";
};

const handleEnter = (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
};

window.addTodo = addTodo;
window.renderTodo = renderTodo;
window.handleEnter = handleEnter;
