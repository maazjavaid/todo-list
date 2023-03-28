import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { ApiCallTodos } from "../../../services/api.js";
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFail,
  addTodoRequest,
  addTodoSuccess,
  addTodoFail,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoFail,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFail,
} from "./todoSlice.js";

function* handleFetchTodos(action) {
  try {
    const data = yield call(ApiCallTodos, "", "GET", null);
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFail());
  }
}

function* handleAddTodo(action) {
  try {
    const res = yield call(ApiCallTodos, "", "POST", action.payload);
    yield put(addTodoSuccess(res));
  } catch (error) {
    yield put(addTodoFail());
  }
}

function* handleUpdateTodo(action) {
  try {
    yield call(ApiCallTodos, action.payload._id, "PUT", {
      title: action.payload.title,
      completed: action.payload.completed,
    });
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* handleRemoveTodo(action) {
  try {
    yield call(ApiCallTodos, action.payload._id, "DELETE", null);
    yield put(removeTodoSuccess(action.payload));
  } catch (error) {
    yield put(removeTodoFail());
  }
}

function* watchTodos() {
  yield takeLatest(fetchTodosRequest, handleFetchTodos);
  yield takeEvery(addTodoRequest, handleAddTodo);
  yield takeEvery(updateTodoRequest, handleUpdateTodo);
  yield takeEvery(removeTodoRequest, handleRemoveTodo);
}

export default watchTodos;
