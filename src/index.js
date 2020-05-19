import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//We'll use webpack to bundle css
import App from "./Components/App.js";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
