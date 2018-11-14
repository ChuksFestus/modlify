import React, { createRef } from "react";
import styled, { keyframes } from "styled-components";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #757575ad;
  animation: ${transition} 0.8s ease;
  opacity: 1;
  z-index: 9999;
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
  width: 90%;
  background: #ffff;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 576px) {
    width: 32rem;
  }
`;

const Content = styled.div``;

const Close = styled.button`
  position: fixed;
  top: 0;
  right: 1rem;
  color: #fff;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-size: 2.5rem;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.outsideModal = createRef();
    this.insideModal = createRef();
    this.blockedModal = false;

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.blockModal = this.blockModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    this.outsideModal.current.addEventListener(
      "click",
      this.handleOutsideClick
    );
    this.insideModal.current.addEventListener("mousedown", this.blockModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    this.outsideModal.current.removeEventListener(
      "click",
      this.handleOutsideClick
    );
    this.insideModal.current.removeEventListener("mousedown", this.blockModal);
  }

  blockModal() {
    this.blockedModal = true;
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!this.blockedModal) {
      return onCloseRequest();
    }

    this.blockedModal = false;
  }

  render() {
    const { onCloseRequest, children } = this.props;
    return (
      <div ref={this.outsideModal}>
        <Overlay>
          <MainModal>
            <div ref={this.insideModal}>
              <Content>{children}</Content>
            </div>
          </MainModal>
          <Close onClick={onCloseRequest}>x</Close>
        </Overlay>
      </div>
    );
  }
}

export default Modal;
