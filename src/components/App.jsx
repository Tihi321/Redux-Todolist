import { ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import DeleteButton from "./Buttons/DeleteButton/";
import AddButton from "./Buttons/AddButton/";
import { TitleStyled } from "./Title/";
import Table from "./Table/";
import React from "react";
import styled from "styled-components";

const App = props => {
  const todosId = props.data.todos.map((todo, index) => {
    return todo.merge({
      id: index
    });
  });

  const { funcs, data } = props;
  return <ListGroup className={props.className}>
      <TitleStyled />
      <ListGroupItem>
        <ButtonGroup className="mb-2">
          <AddButton validationAddModal={funcs.validationAddModal} addModal={data.modals.addModal} toggleAddModal={funcs.toggleAddModal} addTodo={funcs.addTodo} />
          <DeleteButton deleteModal={data.modals.deleteModal} toggledDeleteModal={funcs.toggledDeleteModal} todos={todosId} removeTodo={funcs.removeTodo} />
        </ButtonGroup>
        <Table activateTableRow={funcs.activateTableRow} activeTableRow={data.form.activeRow} validationEditModal={funcs.validationEditModal} editModal={data.modals.editModal} toggleEditModal={funcs.toggleEditModal} editTodo={funcs.editTodo} selectTodo={funcs.selectTodo} todos={todosId} />
      </ListGroupItem>
    </ListGroup>;
};

export const AppStyled = styled(App)`
  box-shadow: 1px 1px 5px rgba(0, 0, 0.2);
  border: 3px solid #ef8931;
  border-radius: 8px;
`;
