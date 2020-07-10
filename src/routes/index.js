import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Publish from "../pages/Publish";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/publish" exact component={Publish} />
      <Route component={() => <div>404</div>} />
    </Switch>
  );
}
