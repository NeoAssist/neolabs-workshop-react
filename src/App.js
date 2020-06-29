import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import "./assets/styles.css";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
