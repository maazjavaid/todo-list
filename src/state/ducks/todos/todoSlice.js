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
      state.data.push(action.payload);
      state.loading = false;
    },
    addTodoFail: (state) => {
      state.loading = false;
      state.error = "Todo not added";
    },
    removeTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeTodoSuccess: (state, action) => {
      return {
        data: state.data.filter((e) => e.id !== action.payload.id),
        loading: false,
        error: null,
      };
    },
    removeTodoFail: (state) => {
      state.loading = false;
      state.error = "Todo not removed";
    },
    updateTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
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
        error: false,
      };
    },
    updateTodoFail: (state) => {
      state.loading = false;
      state.error = "Todo not updated";
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
