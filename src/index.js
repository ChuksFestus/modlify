import React from "react";
import { render } from "react-dom";
import ModalContainer from "./Modal/ModalLuncher";

const App = () => (
  <ModalContainer buttonLabel="Open image modal">dhdhdh</ModalContainer>
);

render(<App />, document.getElementById("root"));
