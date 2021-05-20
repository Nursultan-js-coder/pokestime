import {Link} from "react-router-dom"
import React from 'react'
import {makeStyles,Typography} from "@material-ui/core"
import PokeBall from "../pokeball.png"
import {connect} from "react-redux";

const useStyles=makeStyles({
    posts:{
        display:"grid",
        gridGap:5
    },
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
    pokeBall:{
        opacity:0.6,
        //  position:"absolute",
        marginTop:40,
        marginLeft:-90,
    },
    postContent:{
        margin:20,
        textAlign:"center"        
    },
    title:{
        color:"red",
        fontSize:26,
        marginBottom:10
    }
})

const Home = (props) => {
    const {posts}=props;
    console.log(posts)
    const classes=useStyles();
    return (
        <ul className={classes.posts}>
           {posts.length > 0 && posts.map(post=>{
               return (<li className={classes.post}>
                <img className={classes.pokeBall} src={PokeBall}/>
                <div className={classes.postContent}>
               <Link to={"/"+post.id}><Typography className={classes.title}>{post.title}</Typography></Link>
               <Typography className={classes.content}>{post.content}</Typography>
                </div>
               </li>);
           })}
        </ul>
    )
}
const mapStateToProps=(state)=>{
return{
    posts:state.post.posts
}
}
export default connect(mapStateToProps)(Home)
