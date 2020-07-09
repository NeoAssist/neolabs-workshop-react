import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Publish from "../pages/Publish";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/publish" component={Publish} />
      <Route component={() => <div>404</div>} />
    </Switch>
  );
}
