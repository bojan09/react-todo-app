export const Todo = ({ text, todos, todo, setTodos }) => {
  // Events
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
