import { ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import DeleteButton from "./Buttons/DeleteButton/";
import AddButton from "./Buttons/AddButton/";
import { List, Map } from "immutable";
import fire from "../config/fire";
import { TitleStyled } from "./Title/styled";
import Table from "./Table/";
import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.setDatabase = this.setDatabase.bind(this);
  }

  componentDidMount() {
    const todosRef = fire.database().ref("todos");
    const that = this;

    todosRef.on("value", function(snapshot) {
      const snap = snapshot.val();
      let mapArray = [];
      if(snap === undefined || snap === null){
        return List();
      }
      for (const key of Object.keys(snap)) {
        snap[key]["firebase"] = key;
        mapArray.push(Map(snap[key]));
      }

      that.setDatabase(List(mapArray));
    });
  }

  setDatabase(data) {
    this.props.funcs.setDatabaseData(data);
  }

  render() {
    const todosId = this.props.data.todos.map((todo, index) => {
      return todo.merge({
        id: index
      });
    });
    const { funcs, data } = this.props;
    return (
      <ListGroup className={this.props.className}>
        <ListGroupItem>
          <TitleStyled />
        </ListGroupItem>
        <ListGroupItem>
          <ButtonGroup className="mb-2">
            <AddButton
              validationAddModal={funcs.validationAddModal}
              addModal={data.modals.addModal}
              toggleAddModal={funcs.toggleAddModal}
            />
            <DeleteButton
              deleteModal={data.modals.deleteModal}
              toggledDeleteModal={funcs.toggledDeleteModal}
              todos={todosId}
            />
          </ButtonGroup>
          <Table
            activateTableRow={funcs.activateTableRow}
            activeTableRow={data.form.activeRow}
            validationEditModal={funcs.validationEditModal}
            editModal={data.modals.editModal}
            toggleEditModal={funcs.toggleEditModal}
            selectTodo={funcs.selectTodo}
            todos={todosId}
          />
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export const AppStyled = styled(App)`
  box-shadow: 1px 1px 5px rgba(0, 0, 0.2);
  border: 3px solid #ef8931;
  border-radius: 8px;
`;
