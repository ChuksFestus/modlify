import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal/index";

import "./styles.css";

function App() {
  return <Modal />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
