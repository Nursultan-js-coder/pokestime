import React from 'react'
import {connect} from "react-redux";
import {Button} from "@material-ui/core" 
import {deleteTodo} from "../../data/actions/todoActions"

const TodoDetail = (props) => {
    const {todo}=props;
    const handleClick=()=>{
    props.deleteTodo(todo.id);
    props.history.push("/todos");
    }
    return (
             
        <div>
        
        {todo && <div>
               <h2>Todo details</h2>
            <h4>{todo.title}</h4>
            <p>{todo.content}</p> 
            <Button  style={{margin:10}}align="center"
            onClick={handleClick} 
            variant="outlined" color="secondary">Delete</Button>

              </div>
}
        

        </div>)
    
}

const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.todo_id;
    console.log(ownProps)
    const todo=state.todo.todos.find(todo=>todo.id===id) ;
    return {
        todo: todo ? todo :null
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deleteTodo:(id)=>dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail)
