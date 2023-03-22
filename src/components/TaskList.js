import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../redux/tasks";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({});
  const handleEditButton = (t) => {
    setEditInput(t);
  };

  if (tasks.length === 0) return <h2 className="No-tasks">No Tasks Added</h2>;

  return (
    <div className="task-list-wrapper">
      {tasks.map((t) => {
        return (
          <div key={t.id} className="task-task">
            {t.id === editInput?.id ? (
              <>
                <div className="task-input">
                  <input
                    type="text"
                    value={editInput.task}
                    onChange={(e) => {
                      setEditInput((prev) => {
                        return {
                          ...prev,
                          task: e.target.value,
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
            ) : (
              <>
                <div className="task-complete-detail">
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() =>
                      dispatch(updateTask({ ...t, completed: !t.completed }))
                    }
                  />
                  <h3 className={t.completed ? "task-complete" : ""}>
                    {t.task}
                  </h3>
                </div>
                <div className="button-container">
                  <button onClick={() => handleEditButton(t)}>Edit</button>
                  <button onClick={() => dispatch(removeTask(t))}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
