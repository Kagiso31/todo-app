import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 && "No Todos Added"}
      {todos.map((todo) => {
        return (
          <li className="todo-item" key={todo.id}>
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
