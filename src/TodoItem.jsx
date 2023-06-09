const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <>
      <input
        id={id}
        className="hidden-checkbox"
        type="checkbox"
        onChange={(e) => toggleTodo(id, e.target.checked)}
        checked={completed}
      />
      <label htmlFor={id}>{title}</label>

      <button className="delete-btn" onClick={() => deleteTodo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </>
  );
};

export default TodoItem;
