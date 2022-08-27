export const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const removeLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[1].firstChild.defaultValue;
  todos.forEach((todo) => {
    if (todo.description === todoIndex) {
      todos.splice(todos.indexOf(todo), 1);
    }
  });
  todos.forEach((todo) => {
    todo.index = todos.indexOf(todo) + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const editLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].defaultValue;
  const todoValue = todo.children[0].value;
  todos.forEach((todo) => {
    if (todo.description === todoIndex) {
      todo.description = todoValue;
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const checkLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[1].firstChild.defaultValue;
  todos.forEach((todo) => {
    if (todo.description === todoIndex) {
      if (todo.completed === true) {
        todo.completed = false;
      } else if (todo.completed === false) {
        todo.completed = true;
      }
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
