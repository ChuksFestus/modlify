import React from "react";
import ReactDOM from "react-dom";

import ModalContainer from "./ModalContainer/index";

import "./styles.css";

function App() {
  return <ModalContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
