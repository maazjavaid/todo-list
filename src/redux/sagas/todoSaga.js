import { takeEvery, put } from 'redux-saga/effects';
import {ADDTASK,REMOVETASK,UPDATETASK} from '../tasks.js'

function* handleAddTodo(action) {
    console.log('came into saga')
    
  yield put(ADDTASK2(action))
}

function* handleUpdateTodo(action) {
    console.log(action)
}

function* handleRemoveTodo(action) {
    console.log(action)
}

function* watchTodos() {
  yield takeEvery(ADDTASK, handleAddTodo);
  yield takeEvery(UPDATETASK, handleUpdateTodo);
  yield takeEvery(REMOVETASK, handleRemoveTodo);
}

export default watchTodos;
