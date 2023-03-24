import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTodoRequest } from "../state/ducks/todos/todoSlice";
import Loader from "./Loader";
import TodoList from "./TodoList";
import "./todos.css";
const Todos = () => {
  const dispatch = useDispatch();
  const uid = v4();
  const [input, setInput] = useState("");
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  return (
    <div className="task-container">
      <h1>Task Todo List</h1>

      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          onClick={() => {
            dispatch(
              addTodoRequest({
                title: input,
                completed: false,
                id: uid,
              })
            );
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      {error && <div>{error}</div>}
      {loading ? <Loader /> : <TodoList />}
    </div>
  );
};

export default Todos;
