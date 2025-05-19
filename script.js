// Initialize todoList from localStorage or empty array if none exists
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    let todoListHTML = '';
    
    todoList.forEach((todoObject, i) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="deleteTodo(${i})" class="delete-todo-btn">Delete</button>
        `;
        todoListHTML += html;
    });
    
    todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
    const todoInput = document.getElementById('taskInput');
    const todoDueDate = document.getElementById('dueDate');

    // Create new todo
    const newTodo = {
        name: todoInput.value.trim(),
        dueDate: todoDueDate.value
    };

    // Validate input
    if (!newTodo.name || !newTodo.dueDate) {
        alert('Please fill in both fields');
        return;
    }

    // Add to list
    todoList.push(newTodo);
    
    // Save to localStorage
    saveTodoList();
    
    // Clear inputs
    todoInput.value = '';
    todoDueDate.value = '';
    
    // Update display
    renderTodoList();
}

function deleteTodo(index) {
    // Remove todo
    todoList.splice(index, 1);
    
    // Save to localStorage
    saveTodoList();
    
    // Update display
    renderTodoList();
}


// Initial render
renderTodoList();
