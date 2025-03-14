
let todos = [
{
    id: 0,
    title: "first todo",
    description: "first description",
    date: "06-06-2022"
},
{
    id: 1,
    title: "second todo",
    description: "second description",
    date: "11-08-1990"
}
];

const currentTodo = {};

const newTodoForm = document.getElementById('addNewTodoForm');
const saveButt = document.getElementById('saveButt');
const discardButt = document.getElementById('discardButt');
const todosContainer = document.getElementById('todosContainer');
const addTodoButt = document.getElementById('addTodoButt');

discardButt.addEventListener('click', ()=>{
    dialog.close();
})

const renderTodos = ()=>
{
    const content=todos.map( ({id,title,description,date}) => 
    `<div>
    <p>Id: ${id}</p>
    <p>Title: ${title}</p>
    <p>Description: ${description}</p>
    <p>Date: ${date}</p>
    </div>`).join(" ");

    todosContainer.innerHTML+=content;
};

addTodoButt.addEventListener('click', ()=>{
    todosContainer.classList.toggle('hidden');
    newTodoForm.classList.toggle("hidden");
});

renderTodos()




