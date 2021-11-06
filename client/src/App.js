import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

function App() {
  return (
    <Router>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
