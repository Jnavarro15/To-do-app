const todoBox = document.querySelector("#todo-box");
const taskBtn = document.querySelector("#task-btn");
const addTodoBtn = document.querySelector("#add-todo");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#description");
const cancelFormBtn = document.querySelector("#cancel-form");
const todoList = document.querySelector(".todo-list");
const sideBar = document.querySelector('#side-bar');
const sideBarBtn = document.querySelector('#side-bar-btn');

const dateInput = document.querySelector("#date-input");

let allCategories = document.querySelectorAll('div.category button');
const category = document.querySelector('#category-name');
const categoryInput = document.querySelector('#category-input');
const categoryDiv = document.querySelector('.category-input-div');
const addCategoryBtn = document.querySelector('#add-category-btn');
const addCategoryDiv = document.querySelector('.add-category');
const cancelCategory = document.querySelector('#cancel-category');
const submitCategory = document.querySelector('#accept-category');

const categoryDropDown = document.querySelector('#category-list');


// createEventListners();

dateInput.valueAsDate = new Date();



let allTodos = {
    noCategory: [],
}


const todos = [];
let todoNum = 1;
let categoryNum = 1;

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

submitCategory.addEventListener('click', function(e){
    e.preventDefault();
    let cat = categoryInput.value;

    if(cat !== ""){
        
        if (!(categoryInput.value in allTodos)){
            allTodos = {...allTodos, [cat]: []}
        }

        categoryNum++;
        
        const HMTLString = `
        <div class="category">
            <button type="button" class="category-button">
            ${cat}
            </button>
        </div>
        `;

        const catString = `
            <option value="${cat}">${cat}</option>
        `;
    
        addCategoryDiv.insertAdjacentHTML("beforebegin", HMTLString);
        categoryDropDown.insertAdjacentHTML("beforeend", catString);
        categoryInput.value = ""; 
        categoryDiv.style.display = "none";
        addCategoryDiv.style.display = "flex";
        console.log(allTodos);
        allCategories = document.querySelectorAll('div.category button');
        console.log(allCategories);
        createEventListners();
    }
    else{
        console.log("no input");
    }
})

// Adds event listeners to all category buttons
function createEventListners(){
    allCategories = document.querySelectorAll('div.category button');

    // allCategories.forEach(function(categoryButton){
    //     console.log(categoryButton.innerText);
    // })

    allCategories.forEach(function(categoryButton){
        let cat = categoryButton.innerText;
        categoryButton.addEventListener('click', function(){
            displayContent(cat)
        })
    })
}

function displayTodosByCategory(category) {
    const todoListDiv = document.getElementById('todoList');
    todoListDiv.innerHTML = ''; // Clear the previous contents

    if (allTodos.hasOwnProperty(category)) {
        const todos = allTodos[category];
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.textContent = todo.name;
            todoListDiv.appendChild(todoItem);
        });
    } else {
        todoListDiv.textContent = 'No todos for this category';
    }
}

function displayContent(category){
    todoList.innerHTML = '';
    
}

addCategoryBtn.addEventListener('click', function(){
    displayCategoryForm();

})

sideBarBtn.addEventListener('click', function() {
    document.querySelector('aside').classList.toggle('hidden');
  });

cancelCategory.addEventListener('click', function() {
    categoryDiv.style.display = "none";
    addCategoryDiv.style.display = "flex";
});




addTodoBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(taskName.value !== ""){
        let cat = categoryDropDown.options[categoryDropDown.selectedIndex].text;
        cat === '-' ? cat = "noCategory" : null;

        let obj = {
            id: todoNum,
            name: taskName.value,
            description: description.value,
            date: dateInput.value,
            editing: false,
            completed: false,
            overdue: false
        }
        allTodos[cat].push(obj);
        todoNum++;
        

        // const HMTLString = `
        //     <div class="todo">
        //         <div class="todo-header">
        //             <div>
        //                 <i class="far fa-regular fa-circle"></i>
        //                 <i class="far fa-regular fa-check-circle" ></i>
        //                 <h4>${taskName.value}</h4>
        //             </div>
        //             <input type="date" id="date-input" value="${dateInput.value}"  />
        //         </div>
        //         <div class="todo-footer">
        //             <h6>${description.value}</h6>
        //             <div> 
        //                 <i class="fa fa-regular fa-pencil-alt"></i>
        //                 <i class="fa fa-solid fa-trash"></i>
        //             </div>
        //         </div>
        
        //     </div>
 
        // `;
    
        // todoList.insertAdjacentHTML("beforeend", HMTLString);
        taskName.value = "";
        description.value = "";    
        hideForm();
        console.log(allTodos);
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

