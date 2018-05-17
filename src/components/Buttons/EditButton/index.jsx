import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import EditForm from '../../Forms/EditForm';
import { EDIT_BUTTON_TEXT } from '../../../config/constants.js';

export const EditButton = (props) => {

  const toggle = (e) => {
    e.stopPropagation();
    props.activateTableRow(props.row);
    props.toggleEditModal();
  }
  return (
    <Fragment>
      <Button color="secondary" onClick={toggle}>{EDIT_BUTTON_TEXT}</Button>
      <Modal isOpen={props.editModal.popup} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Add New Todo</ModalHeader>
        <ModalBody>
          <EditForm activeTableRow={props.activeTableRow} validationEditModal={props.validationEditModal} validation={props.validation} toggleEditModal={props.toggleEditModal} />
        </ModalBody>
      </Modal>
    </Fragment>
  );
}