import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
