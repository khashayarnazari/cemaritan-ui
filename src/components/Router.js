import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Connections from "../pages/connections";
import Downloads from "../pages/Downloads";
import History from "../pages/History";
import Login from "../pages/Login";
import Transfers from "../pages/transfers";

import useStoreState from "../hooks/useStoreState";

function Router() {
  const { user } = useStoreState();

  return !user ? (
    // non authenticated requests can only get to login page
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <Route path="*" render={() => <Redirect to="/login" />} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/connections" component={Connections} />
      <Route path="/history" component={History} />
      <Route path="/transfers" component={Transfers} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/" render={() => <Redirect to="/history" />} />
      <Route path="*" render={() => <Redirect to="/history" />} />
    </Switch>
  );
}

export default Router;
