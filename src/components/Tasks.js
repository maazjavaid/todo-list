import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTask } from "../redux/tasks";
import TaskList from "./TaskList";
import "./tasks.css";
const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const uid = v4();
  const [input, setInput] = useState({
    task: "",
  });
  const [editId, setEditId] = useState(null);

  return (
    <div className="task-container">
      <h1>Task Todo List</h1>

      <div className="task-input">
        <input
          type="text"
          disabled={editId}
          value={editId ? "" : input.task}
          onChange={(e) => {
            setInput((prev) => {
              return {
                task: e.target.value,
              };
            });
          }}
        />

        <button
          disabled={editId}
          onClick={() => {
            dispatch(
              addTask({
                ...input,
                completed: false,
                id: uid,
              })
            );

            setInput((prev) => {
              return {
                task: "",
              };
            });
          }}
        >
          Add
        </button>
      </div>

      <TaskList
        tasks={tasks}
        editInput={input}
        setEditInput={setInput}
        editId={editId}
        setEditId={setEditId}
      />
    </div>
  );
};

export default Tasks;
