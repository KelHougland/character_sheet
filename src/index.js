import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import firebase from "firebase/app";

import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import combatReducer from "./store/reducer/turnOrder";
import loginReducer from "./store/reducer/login";
import accountReducer from "./store/reducer/account"
import config from "./firebase";

import "./index.css";

// ADD SIGN-OUT, PASSWORD RESET, PASSWORD CHANGE //


firebase.initializeApp(config);

const rootReducer = combineReducers({
  cmbt: combatReducer,
  lgn: loginReducer,
  acct: accountReducer
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
