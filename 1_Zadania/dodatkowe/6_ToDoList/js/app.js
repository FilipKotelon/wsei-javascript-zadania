document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const removeFinishedBtn = document.getElementById('removeFinishedTasksButton');
    const counter = document.getElementById('counter');

    const checkDoneAmount = () => {
        const tasks = [... taskList.children];
        let unfinishedCounter = 0;

        tasks.forEach(task => {
            if(task.dataset.done === 'false'){
                unfinishedCounter++;
            }
        });

        counter.textContent = unfinishedCounter;
    }

    const deleteTask = (task) => {
        taskList.removeChild(task);
        checkDoneAmount();
    }

    const toggleTask = (task) => {
        const title = task.querySelector('h1');
        title.style.color = title.style.color === 'red' ? 'black' : 'red';
        task.dataset.done = task.dataset.done === 'false' ? 'true' : 'false';
        checkDoneAmount();
    }

    const createTask = () => {
        if(taskInput.value.length <= 5 || taskInput.value.length >= 100) return;

        const newTask = document.createElement('li');
        const taskTitle = document.createElement('h1');
        const deleteBtn = document.createElement('button');
        const completeBtn = document.createElement('button');

        taskTitle.textContent = taskInput.value;
        deleteBtn.textContent = 'Delete';
        completeBtn.textContent = 'Complete';

        newTask.appendChild(taskTitle);
        newTask.appendChild(deleteBtn);
        newTask.appendChild(completeBtn);
        newTask.dataset.done = 'false';

        deleteBtn.addEventListener('click', () => {
            deleteTask(newTask);
        });

        completeBtn.addEventListener('click', () => {
            toggleTask(newTask);
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
        checkDoneAmount();
    }

    const deleteAllFinished = () => {
        const tasks = [... taskList.children];
        tasks.forEach(task => {
            if(task.dataset.done === 'true'){
                deleteTask(task);
            }
        })
    }

    addTaskBtn.addEventListener('click', createTask);
    removeFinishedBtn.addEventListener('click', deleteAllFinished);
})