import { useState } from "react";

const CreateTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    if (newTodo === "") return;

    addTodo(newTodo);
    console.log(newTodo + " added");

    setNewTodo("");
  };

  const handleKeyDown = (e) => {
    console.log("User pressed: " + e.key);

    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form>
      <div className="create-todo-bg">
        <div className="create-todo-container">
          <span className="checkbox-cosmetic"></span>
          <input
            className="create-new-todo"
            type="text"
            placeholder="Create a new todo..."
            maxLength="36"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateTodoForm;
