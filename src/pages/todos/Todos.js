import React from 'react'
import Todo from "../../components/Todo"
import {Container,Grid} from "@material-ui/core"
import {connect} from "react-redux"
const Todos = (props) => {
    const {todos}=props;
    return (
        <Container>
            <Grid container spacing ={2} lg={6} md={8} sm={12}>
               {todos && todos.map(todo=>{
                    return  <Todo todo={todo}/> 
               })}
                
            </Grid>
        </Container>
            
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        todos:state.todo.todos
    }
}

export default connect(mapStateToProps)(Todos);
