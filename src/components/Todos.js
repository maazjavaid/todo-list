import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTodoRequest } from "../state/ducks/todos/todoSlice";
import Loader from "./Loader";
import TodoList from "./TodoList";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./todos.css";
const Todos = () => {
  const dispatch = useDispatch();
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
    dispatch(
      addTodoRequest({
        title: data.title,
        completed: false,
        id: v4(),
      })
    );
    reset();
  };
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  return (
    <div className="task-container">
      <h1>Task Todo List</h1>

      <form className="task-input" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} />
        <button type="submit">Add</button>
      </form>
      {errors.title && <p>{errors.title.message}</p>}
      {error && <div>{error}</div>}
      {loading ? <Loader /> : <TodoList />}
    </div>
  );
};

export default Todos;
