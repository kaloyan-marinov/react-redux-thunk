import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";

const initialState = {};

const reducer = (state = initialState, action) => {
  console.log("reducer runs with", state, action);
  return state;
};

const store = createStore(reducer);

const App = () => {
  return <div className="container">Hello World!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
