import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        addTaskRequest:(state,action)=>{
            
        },
        addTaskSuccess:(state,action)=>{ 
           state=[...state,action.payload.payload]
           return state
        },
        REMOVETASK:(state,action)=>{
            state=state.filter((e)=>e.id!==action.payload.id)
            return state
        },
        UPDATETASK:(state,action)=>{
            const update=state.map((e)=>{
            if (e.id===action.payload.id) {
                return {
                    ...e,
                    task:action.payload.task,
                    completed:action.payload.completed,
                    isEdited:action.payload.isEdited
                }
            }else if(action.payload.isEdited===true){
                return {
                    ...e,
                    isEdited:false
                }
            }else{
                return e
            }
        })
        state=update
        return state
        }
    }
})


export const {addTaskRequest,addTaskSuccess,REMOVETASK,UPDATETASK}=taskSlice.actions
export default taskSlice.reducer 