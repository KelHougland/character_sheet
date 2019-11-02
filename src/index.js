import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

import App from "./App";
<<<<<<< HEAD
import reducer from "./store/reducer/reducer";
import config from "../config";
=======
import reducer from "./store/reducer/turnOrder";
>>>>>>> 2e0c3dc2de415f5147c92ca769755731cfc9737a

import "./index.css";

firebase.initializeApp(config);

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
