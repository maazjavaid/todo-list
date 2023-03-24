import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoRequest,
  updateTodoRequest,
} from "../state/ducks/todos/todoSlice";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({});

  if (todos.length === 0) return <h2 className="No-tasks">No Tasks Added</h2>;

  return (
    <div className="task-list-wrapper">
      {todos.map((task) => {
        if (task.id === editInput?.id)
          return (
            <div key={task.id} className="task-task">
              <>
                <div className="task-input">
                  <input
                    type="text"
                    value={editInput.title}
                    onChange={(e) => {
                      setEditInput((prev) => {
                        return {
                          ...prev,
                          title: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
                <div className="button-container">
                  <button
                    onClick={() => {
                      dispatch(updateTodoRequest(editInput));
                      setEditInput({});
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditInput({});
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            </div>
          );

        return (
          <div key={task.id} className="task-task">
            <div className="task-complete-detail">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  dispatch(
                    updateTodoRequest({ ...task, completed: !task.completed })
                  )
                }
              />
              <h3 className={task.completed ? "task-complete" : ""}>
                {task.title}
              </h3>
            </div>
            <div className="button-container">
              <button onClick={() => setEditInput(task)}>Edit</button>
              <button onClick={() => dispatch(removeTodoRequest(task))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
