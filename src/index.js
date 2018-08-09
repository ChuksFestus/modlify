import React from "react";
import ReactDOM from "react-dom";

import ModalContainer from "./ModalContainer/index";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <p>
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
      <ModalContainer buttonLabel="Open text modal">
        <img
          style={{ width: "100%" }}
          src="https://placeimg.com/800/450/nature"
          alt="Nature"
        />
      </ModalContainer>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
