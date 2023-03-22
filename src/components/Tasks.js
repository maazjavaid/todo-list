import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTaskRequest } from "../redux/slices/tasksSlice";
import TaskList from "./TaskList";
import "./tasks.css";
const Tasks = () => {
  const dispatch = useDispatch();
  const uid = v4();
  const [input, setInput] = useState("");
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
              addTaskRequest({
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

      <TaskList />
    </div>
  );
};

export default Tasks;
