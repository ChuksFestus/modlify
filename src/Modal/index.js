import React from "react";
import styled, { keyframes } from "styled-components";
import isNil from "lodash/fp/isNil";
import PropTypes from "prop-types";

const Overlay = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background: #757575ad;
  animation: ${transition} .5s ease;
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
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
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

    if (!isNil(this.modal)) {
      onCloseRequest();
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

  render() {
    const { onCloseRequest, children } = this.props;
    return (
      <Overlay>
        <MainModal ref={node => (this.modal = node)}>
          <Content>{children}</Content>
        </MainModal>
        <Close onClick={onCloseRequest}>x</Close>
      </Overlay>
    );
  }
}

export default Modal;
