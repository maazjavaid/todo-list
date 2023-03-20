import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { addtask, removeTask } from '../actions'
import './tasks.css'
const Tasks = () => {
  const tasks=useSelector((state)=>state.changeTask)
  const dispatch=useDispatch()
  console.log(tasks)
  const uid=v4()
  const [input,setinput]=useState({
    id:uid,
    task:''
  })

  const dispatchFunction=()=>{
    dispatch(addtask(input))
    setinput((prev)=>{
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
            setinput((prev)=>{
                return{
                    ...prev,
                    task:e.target.value
                }
            })
        }}
        />
        <button onClick={()=>dispatchFunction()}>Add</button>
    </div>
    {tasks.map((t,index)=>{
        return(
        <div key={t.id} style={index===tasks.length-1? { marginBottom:'50px'}:{}} className='task-task'>
            <h3>{t.task}</h3>
            <div>
            <button>Edit</button>
            <button onClick={()=>dispatch(removeTask(t))}>Delete</button>
            </div>
        </div>
        )
    })}
    {tasks.length===0?
    (
        <h2 style={{ marginTop:'50px'}}>
            No Tasks Added
        </h2>
    ):
    ''
     }
    </div>
  )
}

export default Tasks