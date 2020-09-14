import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

import { Provider } from "react-redux";

import ProductList from "./productList";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">Hello World!</div>
      <ProductList />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
