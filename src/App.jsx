import { useState } from "react";
import CreateTodoForm from "./CreateTodoForm";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="bg light-theme">
      <div className="container">
        <div className="header">
          <h1>T O D O</h1>
          <ThemeToggle />
        </div>
        <CreateTodoForm addTodo={addTodo} />
        <TodoList
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
