export const addtask=(task)=>{
    return {
        type:'ADDTASK',
        payload:task
    }
}

export const removeTask=(task)=>{
    return {
        type:'REMOVETASK',
        payload:task
    }
}

export const updateTask=(task)=>{
    return {
        type:'UPDATETASK',
        payload:task
    }
}