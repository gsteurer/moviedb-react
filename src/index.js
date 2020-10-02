import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import searchReducer from "./reducers/SearchReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ search: searchReducer });

const initalState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
