import React from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import Loader from "./Loader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./todos.css";
import TodoListContainer from "../containers/TodoListContainer";
const Todos = ({ loading, error, addTodoRequest }) => {
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
    addTodoRequest({
      title: data.title,
      completed: false,
      id: v4(),
    });
    reset();
  };
  return (
    <div className="task-container">
      <h1>Task Todo List</h1>

      <form className="task-input" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} />
        <button type="submit">Add</button>
      </form>
      {errors.title && <p>{errors.title.message}</p>}
      {error && <div>{error}</div>}
      {loading ? <Loader /> : <TodoListContainer />}
    </div>
  );
};

export default Todos;
