import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import firebase from "firebase/app";
import thunk from "redux-thunk";

import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import combatReducer from "./store/reducer/turnOrder";
import authReducer from "./store/reducer/auth";
import config from "./firebase";

import "./index.css";

// ADD SIGN-OUT, PASSWORD RESET, PASSWORD CHANGE //

firebase.initializeApp(config);

const rootReducer = combineReducers({
  cmbt: combatReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

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
