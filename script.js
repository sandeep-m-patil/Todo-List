const todoList = ['make dinner', 'play games'];

renderTodoList();

function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoItem = todoList[i];
        const html = `<p>${todoItem}</p>`;
        todoListHTML += html;

    }
    todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
    const todoInput = document.getElementById('taskInput');
    const todoText = todoInput.value;

    todoList.push(todoText);
    console.log(todoList);
    todoInput.value = '';
    renderTodoList();
}
