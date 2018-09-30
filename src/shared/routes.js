import {Switch, Route} from "react-router-dom";
import Home from "../components/home/Home";
import React from "react";

export default (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/order" component={Home} />
  </Switch>
);