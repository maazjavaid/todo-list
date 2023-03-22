import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
// import { addtask, removeTask, updateTask } from '../actions'
import { addTaskRequest, REMOVETASK, UPDATETASK } from '../redux/tasks'
import './tasks.css'
const Tasks = () => {  
  const tasks=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  const uid=v4()
  const handleEditButton=(t)=>{
    seteditinput(t)
    dispatch(UPDATETASK({...t,isEdited:true}))
  }
  const [input,setinput]=useState({
    id:uid,
    task:'',
    completed:false,
    isEdited:false
  })
  const [editinput,seteditinput]=useState({
    id:uid,
    task:'',
    completed:false,
    isEdited:false
  })

  const dispatchFunction=()=>{
    dispatch(addTaskRequest(input))
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
            {t.isEdited?
            <>
            <div  style={{display:'flex',marginLeft:'15px'}}>
            <input type="text" 
            value={editinput.task} 
            onChange={(e)=>{
                seteditinput((prev)=>{
                    return{
                        ...prev,
                        task:e.target.value
                    }
                })
            }}
            />
            </div>
            <div className='button-container'>
            <button onClick={()=>dispatch(UPDATETASK(editinput))}>Save</button>    
            <button onClick={()=>dispatch(UPDATETASK({...t,isEdited:!t.isEdited}))}>Cancel</button>    
            </div>
            </>
            :
            <>
            <div  style={{display:'flex',marginLeft:'15px'}}>
            <input type="checkbox" checked={t.completed} onChange={()=>dispatch(UPDATETASK({...t,completed:!t.completed}))} />
            <h3 style={t.completed?{textDecoration:'line-through'}:{}}>{t.task}</h3>
            </div>
            <div className='button-container'>
            <button onClick={()=>handleEditButton(t)}>Edit</button>    
            <button onClick={()=>dispatch(REMOVETASK(t))}>Delete</button>
            </div>
            </>
            }
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