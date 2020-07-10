import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";

import Routes from "./routes";

import "./assets/styles.css";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
