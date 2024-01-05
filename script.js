const todoBox = document.querySelector("#todo-box");
const taskBtn = document.querySelector("#task-btn");
const addTodoBtn = document.querySelector("#add-todo");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#description");
const cancelFormBtn = document.querySelector("#cancel-form");
const todoList = document.querySelector(".todo-list");
const sideBar = document.querySelector('#side-bar');
const sideBarBtn = document.querySelector('#side-bar-btn');
const category = document.querySelector('#category-name');

const addCategoryDiv = document.querySelector('.add-category');
const categoryDiv = document.querySelector('.category-input-div');

const addCategoryBtn = document.querySelector('#add-category-btn');
const categoryInput = document.querySelector('#category-input');

const dateInput = document.querySelector("#date-input");
dateInput.valueAsDate = new Date();
console.log(dateInput);

let todosObj = {
    name: "Todos",
    todos: []
}
const todos = [];
let todoNum = 1;

taskBtn.onclick = displayForm;
cancelFormBtn.onclick = hideForm;

function displayCategoryForm(){
    addCategoryDiv.style.display = "none";
    categoryDiv.style.display = "flex"
}

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

addCategoryBtn.addEventListener('click', function(){
    displayCategoryForm();

})

sideBarBtn.addEventListener('click', function() {
    document.querySelector('aside').classList.toggle('hidden');
  });



addTodoBtn.addEventListener('click', function(e){
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
})
// function addTodo(e){
   
    
//     // const div = document.createElement('div');
//     // div.textContent = `name: ${taskName.value} description: ${description.value}`;
//     // todoList.appendChild(div);
// }

