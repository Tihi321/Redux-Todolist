import { ButtonGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import DeleteButton from "./Buttons/DeleteButton/";
import { TITLE } from "../config/constants.js";
import AddButton from "./Buttons/AddButton/";
import fire from "../config/fire";
import Title from "./Title/";
import Table from "./Table/";
import React from "react";

const App = props => {
  const logout = () => {
    fire.auth().signOut();
  };

  const todosId = props.data.todos.map((todo, index) => {
    return todo.merge({
      id: index
    });
  });

  const { funcs, data } = props;
  return (
    <ListGroup>
      <ListGroupItem className="text-right">
        <Button onClick={logout} color="info">
          Odjava
        </Button>
      </ListGroupItem>
      <ListGroupItem>
        <Title>{TITLE}</Title>
      </ListGroupItem>
      <ListGroupItem>
        <ButtonGroup className="mb-2">
          <AddButton
            validationAddModal={funcs.validationAddModal}
            addModal={data.modals.addModal}
            toggleAddModal={funcs.toggleAddModal}
            addTodo={funcs.addTodo}
          />
          <DeleteButton
            deleteModal={data.modals.deleteModal}
            toggledDeleteModal={funcs.toggledDeleteModal}
            todos={todosId}
            removeTodo={funcs.removeTodo}
          />
        </ButtonGroup>
        <Table
          activateTableRow={funcs.activateTableRow}
          activeTableRow={data.form.activeRow}
          validationEditModal={funcs.validationEditModal}
          editModal={data.modals.editModal}
          toggleEditModal={funcs.toggleEditModal}
          editTodo={funcs.editTodo}
          selectTodo={funcs.selectTodo}
          todos={todosId}
        />
      </ListGroupItem>
    </ListGroup>
  );
};

export default App;
