const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Handle Task Addition
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = document.createElement('li');
    task.classList.add('task');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', () => {
        task.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(task);
    });

    task.appendChild(taskContent);
    task.appendChild(completeBtn);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);

    taskInput.value = '';
});

// Handle Enter Key for Task Input
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});
