import React from "react";
import styled, { keyframes } from "styled-components";

const Overlay = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  height:100vh;
  width: 100vw;
  background: #757575;
  animation: ${transition} .5s ease;
  opacity: 1;
`;

const transition = keyframes`
  0% {
    display: none;
    opacity: 0
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MainModal = styled.div`
  width: auto;
  background: #ffff;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);

  @media(min-width: 576px) {
    width: 32rem;
  }
`;

const Content = styled.div`
`;

const Close = styled.button`
  position: fixed;
  top:0;
  right: 1rem;
  color: #fff;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-size: 2.5rem;
`;

class Modal extends React.Component {
  render() {
    return (
      <Overlay>
        <MainModal>
          <Content>sjs</Content>
        </MainModal>
        <Close>x</Close>
      </Overlay>
    );
  }
}

export default Modal;
