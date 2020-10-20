import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import OpenPage from "./pages/OpenPage";
import PrivatePageOne from "./pages/PrivatePageOne";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OpenPage} />
        <PrivateRoute exact path="/one" component={PrivatePageOne} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
