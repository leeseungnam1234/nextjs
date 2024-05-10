"use client";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";
import CounterContainer from "./CounterContainer/page";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;
