import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoComponent from './components/TodoComponent';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('Items');
    if (savedTodos === null || savedTodos === 'undefined') return [];
    return JSON.parse(savedTodos);
  });

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), title, completed: false }];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodoComponent
      addTask={addTodo}
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default App;
