const todoBox = document.querySelector("#todo-box");
const taskBtn = document.querySelector("#task-btn");
const addTodoBtn = document.querySelector("#add-todo");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#description");
const cancelFormBtn = document.querySelector("#cancel-form");
const todoList = document.querySelector(".todos");

const todos = [];
let todoNum = 1;

taskBtn.onclick = displayForm;
cancelFormBtn.onclick = hideForm;
addTodoBtn.onclick = addTodo;

function displayForm(){
    todoBox.style.display = "flex";
    taskBtn.style.display = "none";
}

function hideForm(){
    todoBox.style.display = "none";
    taskBtn.style.display = "block";
    taskName.value = "";
    description.value = "";
}

function addTodo(e){
    e.preventDefault();
    if(taskName.value !== ""){
        let obj = {
            name: taskName.value,
            description: description.value
        }
        todos.push(obj);
    
        const HMTLString = `
            <div class="todo">
                <i class="far fa-regular fa-circle"></i>
                <i class="far fa-regular fa-check-circle" ></i>
                
                <h4>${taskName.value}</h4>
                <h6>${description.value}</h6> 
                <span>
                <i class="fa fa-regular fa-pencil-alt"></i>
                <i class="fa fa-solid fa-trash"></i>
                <span>
        
            </div>
 
        `;
    
        todoList.insertAdjacentHTML("beforeend", HMTLString);    
    }
    else{
        console.log("no input");
    }
    
    // const div = document.createElement('div');
    // div.textContent = `name: ${taskName.value} description: ${description.value}`;
    // todoList.appendChild(div);
}

