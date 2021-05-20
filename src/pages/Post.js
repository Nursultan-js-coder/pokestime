import {connect} from "react-redux"
import React from 'react'
import {makeStyles,Typography} from "@material-ui/core"
import {Button} from "@material-ui/core";
import {deletePost} from "../data/actions/postActions" ;
const useStyles=makeStyles({
    post:{
        display:"grid",
        gridTemplateColumns:"1fr 3fr",
        width:"60%",
        overflow:"hidden",
        backgroundColor: "#fff",
        borderRadius:"8px"  ,
        margin:5 ,
        padding:10
    },
})
const Post = (props) => {
    const {post}=props;
    const classes=useStyles();
    const handleClick=()=>{
    props.deletePost(props.post.id);
    props.history.push("/");
    }
    return (
        <div >
            <Typography variant="h4" align="center" style={{color:"#555"}}>{post.title} || {post.id}</Typography>
            <Typography align="center">{post.content}</Typography>
            <Button variant="outlined" color="secondary" onClick={handleClick} >delete post</Button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.post_id;
    console.log("state:",state);
    console.log("ownProps:",ownProps);
    return {
        post:state.post.posts.find(post=>post.id===id)
    }
}
const mapDispathToProps=(dispatch)=>{
    return {
        deletePost:(id)=>dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Post);

