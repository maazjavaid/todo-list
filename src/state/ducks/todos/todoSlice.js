import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getTodosRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    getTodosSuccess: (state, action) => {
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    getTodosFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: "Failed to fetch todos",
      };
    },
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
        data: state.data.filter((e) => e._id !== action.payload._id),
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
          if (e._id === action.payload._id) {
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
  getTodosRequest,
  getTodosSuccess,
  getTodosFail,
  addTodoRequest,
  addTodoSuccess,
  addTodoFail,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoFail,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFail,
} = todoSlice.actions;

export default todoSlice.reducer;
