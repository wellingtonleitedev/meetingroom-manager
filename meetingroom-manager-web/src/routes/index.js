import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { isAuthenticated } from '../services/auth'

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NewRoom from "../pages/NewRoom";
import Reservation from "../pages/Reservation";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/new-room" component={NewRoom} />
      <PrivateRoute exact path="/reservation" component={Reservation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
