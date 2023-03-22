import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTaskRequest: (state, action) => {},
    addTaskSuccess: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeTaskRequest: (state, action) => {},
    removeTaskSuccess: (state, action) => {
      state = state.filter((e) => e.id !== action.payload.id);
      return state;
    },
    updateTaskRequest: (state, action) => {},
    updateTaskSuccess: (state, action) => {
      const update = state.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            task: action.payload.task,
            completed: action.payload.completed,
            isEdited: action.payload.isEdited,
          };
        }
        if (action.payload.isEdited === true) {
          return {
            ...e,
            isEdited: false,
          };
        }
        return e;
      });
      state = update;
      return state;
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
