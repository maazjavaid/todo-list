import { takeEvery, put, call } from "redux-saga/effects";
import {
  createTodo,
  deleteTodo,
  fetchTodoList,
  updateTodo,
} from "../../../services/api.js";
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
    const data = yield call(fetchTodoList);
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFail());
  }
}

function* handleAddTodo(action) {
  try {
    const res = yield call(createTodo, action.payload);
    yield put(addTodoSuccess(res));
  } catch (error) {
    yield put(addTodoFail());
  }
}

function* handleUpdateTodo(action) {
  try {
    yield call(updateTodo, action.payload);
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* handleRemoveTodo(action) {
  try {
    yield call(deleteTodo, action.payload);
    yield put(removeTodoSuccess(action.payload));
  } catch (error) {
    yield put(removeTodoFail());
  }
}

function* watchTodos() {
  yield takeEvery(fetchTodosRequest, handleFetchTodos);
  yield takeEvery(addTodoRequest, handleAddTodo);
  yield takeEvery(updateTodoRequest, handleUpdateTodo);
  yield takeEvery(removeTodoRequest, handleRemoveTodo);
}

export default watchTodos;
