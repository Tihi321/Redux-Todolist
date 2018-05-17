import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { DELETE_BUTTON_TEXT, CANCEL_BUTTON_TEXT, DELETE_MODAL_TITLE } from '../../../config/constants.js';

const DeleteButton = (props) => {

  const toggle = () => {
    props.toggledDeleteModal();
  }

  const checkDelete = () => {
    const reducedList = props.todos.filter((v, k) => v.get('selected') === true);
    if (reducedList.size) {
      toggle();
    }
  }

  const handleOnRemove = () => {
    props.removeTodo(props.todos);
    toggle();
  }

  return (
    <Fragment>
      <Button color="danger" onClick={checkDelete}>{DELETE_BUTTON_TEXT}</Button>
      <Modal isOpen={props.deleteModal.popup} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>{DELETE_MODAL_TITLE}</ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={handleOnRemove}>{DELETE_BUTTON_TEXT}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{CANCEL_BUTTON_TEXT}</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );

}

export default DeleteButton;