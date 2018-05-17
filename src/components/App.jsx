import { ButtonGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import DeleteButton from './Buttons/DeleteButton/';
import { TITLE } from '../config/constants.js';
import AddButton from './Buttons/AddButton/';
import { List, Map } from "immutable";
import fire from '../config/fire';
import Title from './Title/';
import Table from './Table/';
import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.setDatabase = this.setDatabase.bind(this);
  }

  componentDidMount(){

      const todosRef = fire.database().ref('todos');
      const that = this;

      todosRef.once("value").then(function(snapshot) {
        const snap = snapshot.val();
        let mapArray = [];
        for (const key of Object.keys(snap)) {
          snap[key]['firebase'] = key;
          mapArray.push(Map(snap[key]));
        }

        that.setDatabase(List(mapArray));
      });

  }

  setDatabase(data){
    this.props.funcs.setDatabaseData(data);
  }

  logout = () => {
    fire.auth().signOut();
  }

  render(){
console.log(this.props.data.todos.toJS());
    const todosId = this.props.data.todos.map((todo, index) => {
      return todo.merge({
        'id': index
      });
    });
    const { funcs, data } = this.props;
    return (
      <ListGroup>
        <ListGroupItem className="text-right">
          <Button onClick={this.logout} color="info">Odjava</Button>
        </ListGroupItem>
        <ListGroupItem>
          <Title>{TITLE}</Title>
        </ListGroupItem>
        <ListGroupItem>
          <ButtonGroup className="mb-2">
            <AddButton validationAddModal={funcs.validationAddModal} addModal={data.modals.addModal} toggleAddModal={funcs.toggleAddModal} addTodo={funcs.addTodo} />
            <DeleteButton deleteModal={data.modals.deleteModal} toggledDeleteModal={funcs.toggledDeleteModal} todos={todosId} removeTodo={funcs.removeTodo} />
          </ButtonGroup>
          <Table activateTableRow={funcs.activateTableRow} activeTableRow={data.form.activeRow} validationEditModal={funcs.validationEditModal} editModal={data.modals.editModal} toggleEditModal={funcs.toggleEditModal} editTodo={funcs.editTodo} selectTodo={funcs.selectTodo} todos={todosId} />
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default App;
