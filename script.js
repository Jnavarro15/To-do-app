const todoBox = document.querySelector("#todo-box");
const taskBtn = document.querySelector("#task-btn");
const addTodoBtn = document.querySelector("#add-btn");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#description");
const cancelFormBtn = document.querySelector("#cancel-form");
const todoList = document.querySelector(".todos");

const todos = [];

taskBtn.onclick = displayForm;
cancelFormBtn.onclick = hideForm;
addTodoBtn.onclick = addTodo;

function displayForm(){
    todoBox.style.display = "block";
    taskBtn.style.display = "none";
}

function hideForm(){
    todoBox.style.display = "none";
    taskBtn.style.display = "block";
    taskName.value = "";
    description.value = "";
}

function addTodo(){
    let obj = {
        name: taskName.value,
        description: description.value
    }
    todos.push(obj);
    console.log("taskName.value");
    displayTodos();
}

function displayTodos(){
    for(const todo of todos){
        const div = document.createElement('div');
        div.textContent = `name: ${todo.name} description: ${todo.description}`;
        todoList.appendChild(div);

    }
}
