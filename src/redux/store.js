import { configureStore } from "@reduxjs/toolkit";
import watchTodos from "./sagas/todoSaga";
import tasksReducer from './tasks'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware()

export default configureStore({
    reducer:{
        tasks:tasksReducer
    },
    middleware:[sagaMiddleware]
})

sagaMiddleware.run(watchTodos)