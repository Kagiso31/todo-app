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
      <input
        className="create-new-todo"
        type="text"
        placeholder="Create a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default CreateTodoForm;
