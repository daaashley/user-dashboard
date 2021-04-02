import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Profile from "./Components/Profile";
function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users" component={Users}></Route>
        <Route path="/users/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
