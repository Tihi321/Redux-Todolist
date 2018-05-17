import { TOGGLE_ADD_MODAL, TOGGLE_EDIT_MODAL, TOGGLE_DELETE_MODAL, VALIDATION_ADD_MODAL, VALIDATION_EDIT_MODAL } from "../actions/types";

const init = {
  addModal: {
    popup: false,
    validation: true
  },
  editModal: {
    popup: false,
    validation: true
  },
  deleteModal: {
    popup: false
  }
};

const modalsReducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return {
        ...state,
        addModal: {
          ...state.addModal,
          popup: !state.addModal.popup
        }
      };
    case TOGGLE_EDIT_MODAL:
      return {
        ...state,
        editModal: {
          ...state.editModal,
          popup: !state.editModal.popup
        }
      };
    case TOGGLE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: {
          popup: !state.deleteModal.popup
        }
      };
    case VALIDATION_ADD_MODAL:
      return {
        ...state,
        addModal: {
          ...state.addModal,
          validation: action.payload
        }
      };
    case VALIDATION_EDIT_MODAL:
      return {
        ...state,
        editModal: {
          ...state.editModal,
          validation: action.payload
        }
      };
    default:
      return state;
  }
};

export default modalsReducer;