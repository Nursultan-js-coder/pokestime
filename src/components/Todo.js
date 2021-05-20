import React from 'react'
import {Grid,Typography,Paper} from "@material-ui/core"
import {Link} from "react-router-dom"

const Todo = ({todo}) => {
    return (
        <Grid item style={{width:"100%",margin:10,minHeight:100}}>
            <Paper style={{height:"100%",display:"grid",justifyItems:"center"}}>
                <Link to ={"/todo/"+todo.id}><Typography style={{margin:10}} align="center">
                    {todo.title}
                </Typography>
                </Link>
                <Typography style={{margin:10}} align="center">
                    {todo.content}
                </Typography>
          
           
            </Paper>
            
        </Grid>
    )
}

export default Todo
