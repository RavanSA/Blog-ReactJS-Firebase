import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/layout/Home"
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NewBlog from "./components/Blogs/NewBlog";
import BlogDetail from "./components/Blogs/BlogDetail";

function App() {
  return (
      <BrowserRouter>
        <div >
            <Home/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/blog/:id" component={BlogDetail}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/newblog" component={NewBlog}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
