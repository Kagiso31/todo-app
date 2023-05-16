import { useEffect, useState } from "react";
import CreateTodoForm from "./CreateTodoForm";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: "Complete online JavaScript course",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Jog around the park 3x",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "10 minutes meditation",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Read for 1 hour",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Pick up groceries",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ]);

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

  const clearCompleted = () => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => !todo.completed);
    });
  };

  const [activeTodos, setActiveTodos] = useState(null);
  const [completedTodos, setCompletedTodos] = useState(null);

  const filterActive = (todos) => {
    setActiveTodos(() => {
      return todos.filter((todo) => !todo.completed);
    });
  };
  const filterCompleted = (todos) => {
    setCompletedTodos(() => {
      return todos.filter((todo) => todo.completed);
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

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>T O D O</h1>
          <ThemeToggle theme={theme} switchTheme={switchTheme} />
        </div>
        <CreateTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          clearCompleted={clearCompleted}
          filterActive={filterActive}
          filterCompleted={filterCompleted}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
        />
      </div>
    </div>
  );
};

export default App;
