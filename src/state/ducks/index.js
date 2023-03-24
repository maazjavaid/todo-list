import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import watchTodos from "./todos/todoSaga";
import todoReducer from "./todos/todoSlice";
export const rootReducer = combineReducers({
  todos: todoReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([watchTodos()]);
};
