import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NewRoom from "../pages/NewRoom";
import Reservation from "../pages/Reservation";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/new-room" component={NewRoom} />
      <Route exact path="/reservation" component={Reservation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
