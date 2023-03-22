import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { v4 } from 'uuid'
import { addTask} from '../redux/tasks'
import TaskList from './TaskList'
import './tasks.css'
const Tasks = () => {  
  const dispatch=useDispatch()
  const uid=v4()
  const [input,setInput]=useState({
    id:uid,
    task:'',
    completed:false,
    isEdited:false
  })
  
  const dispatchFunction=()=>{
    dispatch(addTask(input))
    setInput((prev)=>{
        return{
            ...prev,
            id:v4(),
        }
    })
  }
  return (
    <div className='task-container'>
        <h1>Task Todo List</h1>
    <div className='task-input'>
        <input type="text" 
        value={input.task}
        onChange={(e)=>{
            setInput((prev)=>{
                return{
                    ...prev,
                    task:e.target.value
                }
            })
        }}
        />
        <button onClick={()=>dispatchFunction()}>Add</button>
    </div>
    <TaskList/>
    </div>
  )
}

export default Tasks