const clearTodo = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const uncompleted = todos.filter((todo) => !todo.completed);
  localStorage.setItem('todos', JSON.stringify(uncompleted));
  const updateTasks = uncompleted.map((todo, index) => {
    todo.index = index + 1;
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(updateTasks));
  todos = updateTasks;
  window.location.reload();
};
export default clearTodo;
