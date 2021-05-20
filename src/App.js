
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import Home from "./pages/Home"
import Appbar from "./components/Navbar"
import {makeStyles} from "@material-ui/core";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Post from "./pages/Post"
import Todos from "./pages/todos/Todos"
import TodoDetail from "./pages/todos/TodoDetail"
const useStyles=makeStyles({
 app:{
   marginTop:20
 },

 

})
function App() {
  const classes=useStyles();
  return (
    <div className={"App " +classes.app}>
      <Router>
        <Appbar/>
        <div className={classes.page}>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/todos" component={Todos}/>
        <Route path="/todo/:todo_id" component={TodoDetail}/>
        <Route path="/:post_id" component={Post}/>
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
