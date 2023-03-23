import { takeEvery, put } from "redux-saga/effects";
import {
  addTaskRequest,
  addTaskSuccess,
  removeTaskRequest,
  removeTaskSuccess,
  updateTaskRequest,
  updateTaskSuccess,
} from "../slices/tasksSlice.js";

function* handleAddTodo(action) {
  yield put(addTaskSuccess(action.payload));
}

function* handleUpdateTodo(action) {
  yield put(updateTaskSuccess(action.payload));
}

function* handleRemoveTodo(action) {
  yield put(removeTaskSuccess(action.payload));
}

function* watchTodos() {
  yield takeEvery(addTaskRequest, handleAddTodo);
  yield takeEvery(updateTaskRequest, handleUpdateTodo);
  yield takeEvery(removeTaskRequest, handleRemoveTodo);
}

export default watchTodos;
