import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signin from "../pages/Signin";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
