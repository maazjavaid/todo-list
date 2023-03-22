import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTaskRequest: () => {},
    addTaskSuccess: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeTaskRequest: () => {},
    removeTaskSuccess: (state, action) => {
      state = state.filter((e) => e.id !== action.payload.id);
      return state;
    },
    updateTaskRequest: () => {},
    updateTaskSuccess: (state, action) => {
      const update = state.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            title: action.payload.title,
            completed: action.payload.completed,
          };
        }
        return e;
      });
      return update;
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
