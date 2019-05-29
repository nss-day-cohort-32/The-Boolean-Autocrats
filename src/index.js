import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NutShell from "./components/NutShell";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <NutShell />
  </Router>,
  document.getElementById("root")
);
