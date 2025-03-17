
// let todos = [
// {
//     id: genId('first todo'),
//     title: "first todo",
//     description: "first description",
//     date: Date()
// },
// {
//     id: genId('second todo'),
//     title: "second todo",
//     description: "second description",
//     date: Date()
// } 
// ];

let todos = JSON.parse(localStorage.getItem('data')) || [];

let currentTodo = {};

//main page
const addTodoButt = document.getElementById('addTodoButt');
const todosContainer = document.getElementById('todosContainer');

//dialog elements
const yesButt = document.getElementById('yesButt');
const noButt = document.getElementById('noButt');
const dialogE = document.getElementById('dialogId');

//forms field add new ToDo
const newTodoFormId  = document.getElementById('newTodoFormId');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dateInput = document.getElementById('date');
const cancelButt = document.getElementById('cancelButtTodoForm');
const addButt = document.getElementById('addButtTodoForm');

yesButt.addEventListener('click',()=>{ 
    addTodoButt.classList.toggle('hidden');
    todosContainer.classList.toggle('hidden');
    newTodoFormId.classList.toggle("hidden");
    resetFormFields();
});

noButt.addEventListener('click', ()=>{
    dialogE.close();
});

cancelButt.addEventListener('click',(e)=>{
    e.preventDefault();
    dialogE.showModal();

});

const renderTodos = ()=>
{
    todosContainer.innerHTML='';

    todosContainer.innerHTML=todos.map( ({id,title,description,date}) => 
    `<div id=${id}>
    <p class="mb-0" hidden>Id: ${id}</p>
    <p class="mb-0">Title: ${title}</p>
    <p class="mb-0">Description: ${description}</p>
    <p >Date: ${date}</p>
        <div class="mb-4">
            <button onclick="editTodo(this)">Edit</button>
            <button onclick="deleteTodo(this)">Delete</button>
        </div>
    </div>`).join(" "); 
};

addTodoButt.addEventListener('click', ()=>{
    addTodoButt.classList.toggle('hidden');
    todosContainer.classList.toggle('hidden');
    newTodoFormId.classList.toggle("hidden");
});

addButt.addEventListener('click',(e)=>{
    e.preventDefault();

    newTodo = {
        id: genId(titleInput.value),
        title: titleInput.value,
        description: descriptionInput.value,
        date: dateInput.value
    }

    const indexTodo = todos.findIndex(todo => todo.id === currentTodo.id);  
    //si son iguales
    //if(isEqual(newTodo, currentTodo)) //return alert ("Equals ToDos");
        //return;

    if(indexTodo >= 0)
    {
        todos[indexTodo]=newTodo;
        addTodoButt.classList.toggle('hidden');
        todosContainer.classList.toggle('hidden');
        newTodoFormId.classList.toggle("hidden");
        localStorage.setItem('data',JSON.stringify(todos));
        renderTodos();
        return;
    }

    todos.unshift(newTodo);
    localStorage.setItem('data',JSON.stringify(todos));
    renderTodos();
    resetFormFields();

    addTodoButt.classList.toggle('hidden');
    todosContainer.classList.toggle('hidden');
    newTodoFormId.classList.toggle("hidden");
});

const editTodo = (e)=>{ 
    const todoIndex = todos.findIndex(el => el.id === e.closest('div').parentElement.id);
    const todo =todos[todoIndex];
    
    currentTodo = todos[todoIndex];//este objeto es necesario para actualizar
    
    titleInput.value = todo.title;
    descriptionInput.value = todo.description;
    dateInput.value = todo.date;

    localStorage.setItem('data',JSON.stringify(todos));

    addTodoButt.classList.toggle('hidden');
    todosContainer.classList.toggle('hidden');
    newTodoFormId.classList.toggle("hidden");
}

const deleteTodo = (e)=>{
    e.closest('div').parentElement.remove();
    const todoIndexToRemove = todos.findIndex((todo)=> todo.id === e.closest('div').parentElement.id);
    //alert(todoIndexToRemove);
    todos.splice(todoIndexToRemove, 1);

    localStorage.setItem('data',JSON.stringify(todos));

    renderTodos(); 
}


//main();
renderTodos();  


//genera un id unico, 
// coloca guiones entre las palabras del titulo del ToDo 
// ademas agrega los cuatros primeros numeros de lo que devuelve Date.now()
function genId(title){return `${title.toLowerCase().split(' ').join('-')}-${Date.now().toString().slice(-4)}`}

//mira si ambos objetos TODO son iguales en todos sus campos
function isEqual(todo1, todo2) 
{ 
    return todo1.title === todo2.title &&
    todo1.description === todo2.description &&
    todo1.date === todo2.date ? true : false;
}

function resetFormFields()
{
    titleInput.value="";
    descriptionInput.value="";
    dateInput.value="";
}

