let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let todoList = document.createElement("ul");
  let todoText = document.querySelector("#todo-text");
  let todoButton = document.querySelector("#todo-button");

  h1.innerText = "Todo List";

  app.appendChild(h1);
  app.appendChild(todoList);

  for (let i = 0; i < todos.length; i++) {
    let todoItems = todos[i];
    let stateOfBox = todoItems.completed ? "checked" : "";
    let todoMarkup = `
    <li><input type="checkbox" ${stateOfBox}/>${todoItems.description}
    </li>

    `;
    todoList.innerHTML += todoMarkup;
  }
}

renderTodoApp();

function addTodo(event) {
  console.log("hello");
}
todoButton.addEventListener("click", addTodo);
