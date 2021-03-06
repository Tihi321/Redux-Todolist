import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddForm from '../../Forms/AddForm';
import { ADD_BUTTON_TEXT, ADD_MODAL_TITLE } from '../../../config/constants.js';

const AddButton = (props) => {
  const toggle = () => {
    props.toggleAddModal();
  }

    return (
      <Fragment>
        <Button color="primary" onClick={toggle}>{ADD_BUTTON_TEXT}</Button>
        <Modal isOpen={props.addModal.popup} toggle={toggle} className={props.className}>
          <ModalHeader toggle={this.toggle}>{ADD_MODAL_TITLE}</ModalHeader>
          <ModalBody>
            <AddForm validationAddModal={props.validationAddModal} validation={props.addModal.validation} addToggleModal={props.toggleAddModal} addTodo={props.addTodo} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
}

export default AddButton;