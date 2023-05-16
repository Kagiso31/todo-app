import TodoItem from "./TodoItem";

const AllTab = ({ todos, toggleTodo, deleteTodo }) => {
  return todos.map((todo) => {
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
  });
};

export default AllTab;
