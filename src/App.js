import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState("all");

  // useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch (todoStatus) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.uncompleted === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filterHandler();
  }, [todos, todoStatus]);

  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setTodoStatus={setTodoStatus}
      />

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
