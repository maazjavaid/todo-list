import { takeEvery, put } from 'redux-saga/effects';
import {addTaskRequest,addTaskSuccess,REMOVETASK,UPDATETASK} from '../tasks.js'

function* handleAddTodo(action) {
    console.log('handling add Todo',action)
    yield put(addTaskSuccess(action))
}

function* handleUpdateTodo(action) {
    yield 1
}

function* handleRemoveTodo(action) {
    yield 2
}

function* watchTodos() {
  yield takeEvery(addTaskRequest, handleAddTodo);
  yield takeEvery(UPDATETASK, handleUpdateTodo);
  yield takeEvery(REMOVETASK, handleRemoveTodo);
}

export default watchTodos;
