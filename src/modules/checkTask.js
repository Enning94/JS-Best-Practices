import { checkLocalTodos } from './localStorage.js';

const checkTodo = (e) => {
  const item = e.target;
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement.parentElement;
    const todoIndex = todo.children[1].firstChild;
    todoIndex.classList.toggle('completed');
    checkLocalTodos(todo);
  }
};
export default checkTodo;