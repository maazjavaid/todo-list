import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
           state=[...state,action.payload]
           return state
        },
        removeTask:(state,action)=>{
            state=state.filter((e)=>e.id!==action.payload.id)
            return state
        },
        updateTask:(state,action)=>{
            const update=state.map((e)=>{
            if (e.id===action.payload.id) {
                return {
                    ...e,
                    task:action.payload.task,
                    completed:action.payload.completed,
                    isEdited:action.payload.isEdited
                }
            }
            if(action.payload.isEdited===true){
                return {
                    ...e,
                    isEdited:false
                }
            }
            
            return e
        })
        state=update
        return state
        }
    }
})


export const {addTask,removeTask,updateTask}=taskSlice.actions
export default taskSlice.reducer 