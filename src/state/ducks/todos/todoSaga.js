import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { apiCallRequest } from "services/api.js";
import {
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
} from "state/ducks/todos/todoSlice";

function* getTodoTasks(action) {
  try {
    const data = yield call(apiCallRequest, "", "GET", null);
    yield put(getTodosSuccess(data));
  } catch (error) {
    yield put(getTodosFail());
  }
}

function* AddTodo(action) {
  try {
    const res = yield call(apiCallRequest, "", "POST", action.payload);
    yield put(addTodoSuccess(res));
  } catch (error) {
    yield put(addTodoFail());
  }
}

function* UpdateTodo(action) {
  try {
    yield call(apiCallRequest, action.payload._id, "PUT", {
      title: action.payload.title,
      completed: action.payload.completed,
    });
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* RemoveTodo(action) {
  try {
    yield call(apiCallRequest, action.payload._id, "DELETE", null);
    yield put(removeTodoSuccess(action.payload));
  } catch (error) {
    yield put(removeTodoFail());
  }
}

function* watchTodos() {
  yield takeLatest(getTodosRequest, getTodoTasks);
  yield takeEvery(addTodoRequest, AddTodo);
  yield takeEvery(updateTodoRequest, UpdateTodo);
  yield takeEvery(removeTodoRequest, RemoveTodo);
}

export default watchTodos;
