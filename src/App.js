import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Timerset from "./timerset";
import mainpage from "./mainpage";
import Typingtest from "./typingtest";

export default function App() {
  return (
    <div className="">
      <Router>
        <Route exact path="/" component={mainpage} />
        <Route exact path="/typingtest" component={Typingtest} />
        <Route exact path="/timerset" component={Timerset} />
      </Router>
    </div>
  );
}
