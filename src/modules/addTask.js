import { saveLocalTodos } from './localStorage.js';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');

const tasks = [];

const addTodo = (event) => {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const completedBtn = document.createElement('div');
  completedBtn.innerHTML = '<input type="checkbox" class = "complete-btn">';
  todoDiv.appendChild(completedBtn);

  const indexLength = tasks.length + 1;
  const taskObj = {
    index: indexLength,
    description: input.value,
    completed: false,
  };
  tasks.push(taskObj);

  tasks.forEach((task, index) => {
    if (index === tasks.length - 1) {
      const newTodo = document.createElement('li');
      newTodo.classList.add('todo-item');
      newTodo.innerHTML = `<input type="text" value = "${taskObj.description}" class ="inp">`;
      todoDiv.appendChild(newTodo);

      saveLocalTodos(task);

      const trashBtn = document.createElement('button');
      trashBtn.innerHTML = '<i class="bx bx-trash"></i>';
      trashBtn.classList.add('trash-btn');
      todoDiv.appendChild(trashBtn);

      todoList.appendChild(todoDiv);
    }
  });
  input.value = '';
};
export default addTodo;