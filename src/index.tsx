import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./assets/styles.css";
import "./assets/index.css";

const contentDiv = document.getElementById("root");

// ReactDOM.render(React.createElement(App,  window || {}), contentDiv);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  contentDiv
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
