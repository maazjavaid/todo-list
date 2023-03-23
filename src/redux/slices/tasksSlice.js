import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTaskRequest: () => {},
    addTaskSuccess: (state, action) => {
      return [...state, action.payload];
    },
    removeTaskRequest: () => {},
    removeTaskSuccess: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
    updateTaskRequest: () => {},
    updateTaskSuccess: (state, action) => {
      return state.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            title: action.payload.title,
            completed: action.payload.completed,
          };
        }
        return e;
      });
    },
  },
});

export const {
  addTaskRequest,
  addTaskSuccess,
  removeTaskRequest,
  removeTaskSuccess,
  updateTaskRequest,
  updateTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;
