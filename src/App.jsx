import { useEffect, useState } from "react";
import CreateTodoForm from "./CreateTodoForm";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";
import useLocalStorage from "use-local-storage";

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

  // Theme
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="header">
          <h1>T O D O</h1>
          <ThemeToggle theme={theme} switchTheme={switchTheme} />
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
