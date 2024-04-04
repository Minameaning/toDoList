
    let todoInput = document.getElementById('todoInput');
    let todoList = document.getElementById('todoList');

//create function to add item
function addTodo() {

// create a variable for the list
    let newTodo = document.createElement('li');
//add value in the input element
    newTodo.innerText = todoInput.value;

//create a variable for checkbox 
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
//add evenlistener when value was added
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newTodo.classList.add('checked');
            todoList.appendChild(newTodo);
        } else {
            newTodo.classList.remove('checked');
            todoList.prepend(newTodo);
        }
    });
//create a variable to delete the value
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    newTodo.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTodo); // remove the item in the list
    });

    newTodo.prepend(checkbox); //add checkbox in front of the value
    newTodo.appendChild(deleteButton); //add delete button
    todoList.appendChild(newTodo); //add new value
//clear value
    todoInput.value = '';
}