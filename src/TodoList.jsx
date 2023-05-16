import { useState } from "react";
import AllTab from "./AllTab";
import ActiveTab from "./ActiveTab";
import CompletedTab from "./CompletedTab";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  filterActive,
  filterCompleted,
  activeTodos,
  completedTodos,
}) => {
  const [activeTab, setActiveTab] = useState("all");

  const countItemsLeft = () => {
    const itemsLeft = todos.reduce(
      (total, currentTodo) =>
        currentTodo.completed === false ? ++total : total,
      0
    );
    return itemsLeft;
  };

  const handleActiveTab = () => {
    filterActive(todos);
    setActiveTab("active");
  };

  const handleCompletedTab = () => {
    filterCompleted(todos);
    setActiveTab("completed");
  };

  return (
    <ul className="todo-list">
      {todos.length === 0 && "No Todos Added"}

      {activeTab === "all" && (
        <AllTab deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
      )}
      {activeTab === "active" && <ActiveTab activeTodos={activeTodos} />}

      {activeTab === "completed" && (
        <CompletedTab completedTodos={completedTodos} />
      )}

      {todos.length > 0 && (
        <li className="list-footer">
          <span>
            {countItemsLeft() + " "}
            {countItemsLeft() === 1 ? "item" : "items"} left
          </span>
          <ul className="nav">
            <li
              onClick={() => setActiveTab("all")}
              className={
                activeTab === "all" ? "filter-all active" : "filter-all"
              }
            >
              All
            </li>
            <li
              onClick={handleActiveTab}
              className={
                activeTab === "active"
                  ? "filter-active active"
                  : "filter-active"
              }
            >
              Active
            </li>
            <li
              onClick={handleCompletedTab}
              className={
                activeTab === "completed"
                  ? "filter-completed active"
                  : "filter-completed"
              }
            >
              Completed
            </li>
          </ul>
          <span className="clear-completed" onClick={clearCompleted}>
            Clear Completed
          </span>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
