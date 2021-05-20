const initState={
    posts:[
        {
                    id:"1",
                    title:"How to learn redux",
                    content:`
                    To learn redux effieceiently
                    To learn redux effieceiently
                    To learn redux effieceiently
                    To learn redux effieceiently
                    `
                },
                {
                    id:"2",
                    title:"How to learn redux",
                    content:"To learn redux effieceiently"
                },
                {
                    id:"3",
                    title:"How to learn redux",
                    content:"To learn redux effieceiently"
                }
        
    ]
}

const postReducer=(state=initState,action)=>{
    if(action.type==="DELETE_POST"){
        let new_state=state.posts.filter(post=>post.id!==action.id);
        return {
            ...state,posts:new_state
        }
    }
    return state;
}
export default postReducer;