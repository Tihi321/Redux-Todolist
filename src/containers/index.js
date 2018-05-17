import { connect } from "react-redux";
import Home from "../components/Home.jsx";
import { activateTableRow } from "../actions/forms";
import { authenticateUser, failedAttempt } from "../actions/login";
import { addTodo, removeTodo, editTodo, selectTodo } from "../actions/todos";
import { toggleAddModal, toggleEditModal, toggledDeleteModal, validationAddModal, validationEditModal } from "../actions/modals";

/*
* Ovdje se spaja pomoću react-redux, store od reduxa sa reactom
* spaja se stanje store-a i funkcije za izmjenu stanja store-a sa reactom
*/

const mapStateToProps = state => {
  return {
    data: {
      todos: state.todos,
      modals: state.modals,
      form: state.form
    },
    loginData:{
      validation: state.login.validation,
      attempt: state.login.attempt
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login:{
      authenticateUser: (validation) => dispatch(authenticateUser(validation)),
      failedAttempt: (attempt) => dispatch(failedAttempt(attempt))
    },
    funcs: {
      addTodo: (subject, message) => dispatch(addTodo(subject, message)),
      removeTodo: (todos) => dispatch(removeTodo(todos)),
      editTodo: (uuid, todo) => dispatch(editTodo(uuid, todo)),
      selectTodo: (selected, uuid) => dispatch(selectTodo(selected, uuid)),
      toggleAddModal: () => dispatch(toggleAddModal()),
      toggleEditModal: () => dispatch(toggleEditModal()),
      toggledDeleteModal: () => dispatch(toggledDeleteModal()),
      validationAddModal: (validation) => dispatch(validationAddModal(validation)),
      validationEditModal: (validation) => dispatch(validationEditModal(validation)),
      activateTableRow: (row) => dispatch(activateTableRow(row))
    }
  };
};

export const TodoListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
