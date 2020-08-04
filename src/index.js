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
  document.body.append(h1);

for (let i = 0; i< todo.length; i++){
    const todoList = todos[i]
    let list = `
    <li class='todo-item'>
        <p>${todoList.completed}</p>

        <p>${todoList.description}</p>
    </li>
    `

  h1.innerText = "Todo List";

  document.app.appendChild(h1);
  <h1>Todo List</h1>
  
}

renderTodoApp();
