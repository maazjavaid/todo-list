import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../redux/tasks";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({});

  if (tasks.length === 0) return <h2 className="No-tasks">No Tasks Added</h2>;

  return (
    <div className="task-list-wrapper">
      {tasks.map((task) => {
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
                      dispatch(updateTask(editInput));
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
                  dispatch(updateTask({ ...task, completed: !task.completed }))
                }
              />
              <h3 className={task.completed ? "task-complete" : ""}>
                {task.title}
              </h3>
            </div>
            <div className="button-container">
              <button onClick={() => setEditInput(task)}>Edit</button>
              <button onClick={() => dispatch(removeTask(task))}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
