import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, clearCompleted }) => {
  const countItemsLeft = () => {
    const itemsLeft = todos.reduce(
      (total, currentTodo) =>
        currentTodo.completed === false ? ++total : total,
      0
    );
    return itemsLeft;
  };

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
      {todos.length > 0 && (
        <li className="list-footer">
          <span>
            {countItemsLeft() + " "}
            {countItemsLeft() === 1 ? "item" : "items"} left
          </span>
          <span className="clear-completed" onClick={clearCompleted}>
            Clear Completed
          </span>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
