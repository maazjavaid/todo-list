import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { addTask, removeTask, updateTask } from '../redux/tasks'
import './tasks.css'
const Tasks = () => {  
  const tasks=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  const uid=v4()
  const handleEditButton=(t)=>{
    setEditInput(t)
    dispatch(updateTask({...t,isEdited:true}))
  }
  const [input,setInput]=useState({
    id:uid,
    task:'',
    completed:false,
    isEdited:false
  })
  const [editInput,setEditInput]=useState({
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
    <div className='task-list-wrapper'>

    {tasks.map((t,index)=>{
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
            <button onClick={()=>dispatch(updateTask(editInput))}>Save</button>    
            <button onClick={()=>dispatch(updateTask({...t,isEdited:!t.isEdited}))}>Cancel</button>    
            </div>
            </>
            :
            <>
            <div className='task-complete-detail'>
            <input type="checkbox" checked={t.completed} onChange={()=>dispatch(updateTask({...t,completed:!t.completed}))} />
            <h3 className={t.completed?'task-complete':''}>{t.task}</h3>
            </div>
            <div className='button-container'>
            <button onClick={()=>handleEditButton(t)}>Edit</button>    
            <button onClick={()=>dispatch(removeTask(t))}>Delete</button>
            </div>
            </>
            }
        </div>
        )
    })}
    </div>
    {tasks.length===0?
    (
        <h2 className='No-tasks'>
            No Tasks Added
        </h2>
    ):
    ''
     }
    </div>
  )
}

export default Tasks