import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typingtest from "./typingtest";
import mainpage from "./mainpage";

export default function App() {
  return (
    <div className="">
      <Router>
        <Route exact path="/mainpage" component={mainpage} />
        <Route exact path="/typingtest" component={typingtest} />
      </Router>
    </div>
  );
}
