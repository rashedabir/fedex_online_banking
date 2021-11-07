import "./App.css";
import React from "react";
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

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/customer/:id" component={CustomerDetails} />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
