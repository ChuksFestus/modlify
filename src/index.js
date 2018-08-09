import React from "react";
import styled from "styled-components";

import Modal from "./Modal/index";

const Button = styled.button`
  border: 0;
  padding: .7rem 1.8rem;
`;

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    const { buttonLabel, children } = this.props;
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <Button onClick={() => this.handleToggleModal()}>{buttonLabel}</Button>
        {showModal && (
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ModalContainer;
