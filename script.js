const todoList = [
    {
        name: 'make dinner',
        dueDate: '2025-12-22'


    },
    {
        name: 'play games',
        dueDate: '2025-07-22'


    }
];

renderTodoList();

function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html =
            `
       <div> ${name} </div><div> ${dueDate}</div>
        <button onclick="todoList.splice(${i},1);
         renderTodoList();" class="delete-todo-btn">Delete</button>
         `;
        todoListHTML += html;

    }
    todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
    const todoInput = document.getElementById('taskInput').value;
    const todoDueDate = document.getElementById('dueDate').value;

    todoList.push({
        name: todoInput,
        dueDate: todoDueDate
    });
    todoInput.value = '';
    renderTodoList();
}
