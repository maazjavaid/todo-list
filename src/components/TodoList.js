import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const TodoList = ({ todos, removeTodoRequest, updateTodoRequest }) => {
  const [editInput, setEditInput] = useState({});

  const schema = yup.object({
    title: yup.string().required("Title is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateTodoRequest({ ...editInput, title: data.title });
    setEditInput({});
    reset();
  };

  if (todos.length === 0) return <h2 className="No-tasks">No Tasks Added</h2>;

  return (
    <div className="task-list-wrapper">
      {todos.map((task) => {
        if (task._id === editInput?._id)
          return (
            <>
              <form
                key={task._id}
                onSubmit={handleSubmit(onSubmit)}
                className="task-task"
              >
                <>
                  <div className="task-input">
                    <input
                      type="text"
                      defaultValue={task.title}
                      {...register("title")}
                    />
                  </div>
                  <div className="button-container">
                    <button type="submit">Save</button>
                    <button
                      onClick={() => {
                        setEditInput({});
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              </form>
              {errors.title && <div>{errors.title.message}</div>}
            </>
          );

        return (
          <div key={task._id} className="task-task">
            <div className="task-complete-detail">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  updateTodoRequest({ ...task, completed: !task.completed })
                }
              />
              <h3 className={task.completed ? "task-complete" : ""}>
                {task.title}
              </h3>
            </div>
            <div className="button-container">
              <button
                onClick={() => {
                  reset();
                  setEditInput(task);
                }}
              >
                Edit
              </button>
              <button onClick={() => removeTodoRequest(task)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
