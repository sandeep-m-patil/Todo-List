const todoList = [];

function addTodo() {
    const todoInput = document.getElementById('taskInput');
    const todoText = todoInput.value;

    todoList.push(todoText);
    console.log(todoList);
    todoInput.value = '';
}