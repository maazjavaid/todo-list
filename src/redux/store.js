import { configureStore } from "@reduxjs/toolkit";
import changeTaskReducer from './tasks'


export default configureStore({
    reducer:{
        changeTask:changeTaskReducer
    }
})