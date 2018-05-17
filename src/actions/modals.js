import { TOGGLE_ADD_MODAL, TOGGLE_EDIT_MODAL, TOGGLE_DELETE_MODAL, VALIDATION_ADD_MODAL, VALIDATION_EDIT_MODAL } from "./types";

export const toggleAddModal = () => {
  return {
    type: TOGGLE_ADD_MODAL
  };
};

export const toggleEditModal = () => {
  return {
    type: TOGGLE_EDIT_MODAL
  };
};

export const toggledDeleteModal = () => {
  return {
    type: TOGGLE_DELETE_MODAL
  };
};
export const validationAddModal = (validation) => {
  return {
    type: VALIDATION_ADD_MODAL,
    payload: validation
  };
};
export const validationEditModal = (validation) => {
  return {
    type: VALIDATION_EDIT_MODAL,
    payload: validation
  };
};