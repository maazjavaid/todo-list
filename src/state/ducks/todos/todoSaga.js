import { takeEvery, put } from "redux-saga/effects";
import {
  addTodoRequest,
  addTodoSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoRequest,
  updateTodoSuccess,
} from "./todoSlice.js";

function* handleAddTodo(action) {
  yield put(addTodoSuccess(action.payload));
}

function* handleUpdateTodo(action) {
  yield put(updateTodoSuccess(action.payload));
}

function* handleRemoveTodo(action) {
  yield put(removeTodoSuccess(action.payload));
}

function* watchTodos() {
  yield takeEvery(addTodoRequest, handleAddTodo);
  yield takeEvery(updateTodoRequest, handleUpdateTodo);
  yield takeEvery(removeTodoRequest, handleRemoveTodo);
}

export default watchTodos;
