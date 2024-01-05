const todoBox = document.querySelector("#todo-box");
const taskBtn = document.querySelector("#task-btn");
const addTodoBtn = document.querySelector("#add-todo");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#description");
const cancelFormBtn = document.querySelector("#cancel-form");
const todoList = document.querySelector(".todo-list");
const sideBarBtn = document.querySelector('#side-bar-btn');
const category = document.querySelector('#category');

const dateInput = document.querySelector("#date-input");
dateInput.valueAsDate = new Date();
console.log(dateInput);

const todos = [];
let todoNum = 1;

taskBtn.onclick = displayForm;
cancelFormBtn.onclick = hideForm;
addTodoBtn.onclick = addTodo;


sideBarBtn.addEventListener('click', function() {
    document.querySelector('aside').classList.toggle('hidden');
  });

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
            id: todoNum,
            name: taskName.value,
            description: description.value,
            date: dateInput.value,
            editing: false,
            completed: false,
            overdue: false,
            category: category.textContent
        }
        todos.push(obj);
        todoNum++;
        
        const HMTLString = `
            <div class="todo">
                <div class="todo-header">
                    <div>
                        <i class="far fa-regular fa-circle"></i>
                        <i class="far fa-regular fa-check-circle" ></i>
                        <h4>${taskName.value}</h4>
                    </div>
                    <input type="date" id="date-input" value="${dateInput.value}"  />
                </div>
                <div class="todo-footer">
                    <h6>${description.value}</h6>
                    <div> 
                        <i class="fa fa-regular fa-pencil-alt"></i>
                        <i class="fa fa-solid fa-trash"></i>
                    </div>
                </div>
        
            </div>
 
        `;
    
        todoList.insertAdjacentHTML("beforeend", HMTLString);
        taskName.value = "";
        description.value = "";    
        hideForm();
        console.log(todos);
    }
    else{
        console.log("no input");
    }
    
    // const div = document.createElement('div');
    // div.textContent = `name: ${taskName.value} description: ${description.value}`;
    // todoList.appendChild(div);
}

