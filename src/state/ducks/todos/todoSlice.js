import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodoRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    addTodoSuccess: (state, action) => {
      return {
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    },
    addTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not added",
      };
    },
    removeTodoRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    removeTodoSuccess: (state, action) => {
      return {
        data: state.data.filter((e) => e.id !== action.payload.id),
        loading: false,
        error: null,
      };
    },
    removeTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not removed",
      };
    },
    updateTodoRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    updateTodoSuccess: (state, action) => {
      return {
        data: state.data.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              title: action.payload.title,
              completed: action.payload.completed,
            };
          }
          return e;
        }),
        loading: false,
        error: null,
      };
    },
    updateTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not updated",
      };
    },
  },
});

export const {
  addTodoRequest,
  addTodoSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoRequest,
  updateTodoSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
