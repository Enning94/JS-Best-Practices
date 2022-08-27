// import './style.css';
import addTodo from './modules/addTask.js';
import deleteTodo from './modules/deleteTask.js';
import editTodo from './modules/editTask.js';
import getTodos from './modules/displayTodo.js';
import checkTodo from './modules/checkTask.js';
import clearTodo from './modules/clearCheckedTasks.js';

const todoBtn = document.querySelector('.enter-btn');
const todoList = document.querySelector('.todo-list');
const clearAll = document.querySelector('.remove-btn');

document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('change', checkTodo);
clearAll.addEventListener('click', clearTodo);

todoList.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    editTodo(e);
  }
});
