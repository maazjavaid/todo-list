import React, { useState } from 'react'
import { v4 } from 'uuid'
import {useDispatch,useSelector} from 'react-redux'
import { removeTaskRequest, updateTaskRequest } from '../redux/tasks'
const TaskList = () => {
  const tasks=useSelector((state)=>state.tasks)  
  const dispatch=useDispatch()  
  const uid=v4()  
  const [editInput,setEditInput]=useState({
      id:uid,
      task:'',
      completed:false,
      isEdited:false
  })  

  const handleEditButton=(t)=>{
      setEditInput(t)
      dispatch(updateTaskRequest({...t,isEdited:true}))
  }  

  if(tasks.length===0) return (
        <h2 className='No-tasks'>
            No Tasks Added
        </h2>
    )  

  return (
    <div className='task-list-wrapper'>

    {tasks.map((t)=>{
        return(
        <div key={t.id}  className='task-task'>
            {t.isEdited?
            <>
            <div className='task-input' >
            <input type="text" 
            value={editInput.task} 
            onChange={(e)=>{
                setEditInput((prev)=>{
                    return{
                        ...prev,
                        task:e.target.value
                    }
                })
            }}
            />
            </div>
            <div className='button-container'>
            <button onClick={()=>dispatch(updateTaskRequest(editInput))}>Save</button>    
            <button onClick={()=>dispatch(updateTaskRequest({...t,isEdited:!t.isEdited}))}>Cancel</button>    
            </div>
            </>
            :
            <>
            <div className='task-complete-detail'>
            <input type="checkbox" checked={t.completed} onChange={()=>dispatch(updateTaskRequest({...t,completed:!t.completed}))} />
            <h3 className={t.completed?'task-complete':''}>{t.task}</h3>
            </div>
            <div className='button-container'>
            <button onClick={()=>handleEditButton(t)}>Edit</button>    
            <button onClick={()=>dispatch(removeTaskRequest(t))}>Delete</button>
            </div>
            </>
            }
        </div>
        )
    })}
    </div>
  )
}

export default TaskList