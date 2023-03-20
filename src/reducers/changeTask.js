const initialState = [];
export const changeTask = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTASK":
        return [...state,action.payload]
    case "REMOVETASK":
        const filter=state.filter((e)=>e.id!==action.payload.id)
        return filter
    case "UPDATETASK":
        const update=state.map((e)=>{
            if (e.id===action.payload.id) {
                return {
                    ...e,
                    task:action.payload.task
                }
            }else{
                return e
            }
        })
        return update
    default:
        return state    
  }
};
