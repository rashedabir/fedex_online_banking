import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Customers from "./screens/Customers";
import CustomerDetails from "./screens/CustomerDetails";
import Benefits from "./screens/Benefits";
import Accounts from "./screens/Accounts";
import AboutUs from "./screens/AboutUs";
import axios from "axios";
import Review from "./screens/Review";
import GlobalState from "./GlobalState";
import NotFound from "./screens/NotFound";

axios.defaults.withCredentials = true;

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <Router>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={isLogged ? NotFound : Login} />
        <Route
          exact
          path="/register"
          component={isLogged ? NotFound : Registration}
        />
        <Route
          exact
          path="/customers"
          component={isAdmin ? Customers : NotFound}
        />
        <Route
          exact
          path="/customer/:id"
          component={isAdmin ? CustomerDetails : NotFound}
        />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/review" component={isLogged ? Review : NotFound} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
