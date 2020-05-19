import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p> Hi</p>;
}

//Create the function and then create then render below and point it to App

render(<Hi />, document.getElementById("app"));
