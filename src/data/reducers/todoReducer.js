const initState={
    todos:[
        {
            id:"1",
            content:"pay back your dept",
            title:"dept"
        },
        {
            id:"2",
            content:"attend your courses",
            title:"attendance"
        },
        {
            id:"3",
            content:"stand up  earlier",
            title:"dont sleep too much"
        },
    ]
}

const todoReducer=(state=initState,action)=>{
    switch(action.type){
        case "DELETE_TODO":
            const todos=state.todos.filter(todo=>todo.id!==action.id)
            return {
                ...state,todos:todos
            }
    }
    return state;
}


export default todoReducer;