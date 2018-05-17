import { List, Map } from "immutable";
import { REMOVE_TODO, ADD_TODO, EDIT_TODO, SELECT_TODO, SET_DATABASE_DATA } from "../actions/types";
import fire from '../config/fire';

const firebaseAdd = (todos) => {
  fire.database().ref('todos').push(todos);
}

const removeFromFirebase = (rows) => {

  const todoRef = fire.database().ref();

  rows.map((todo) => {
    // console.log(todo.get('uuid'));
    // const child = todoRef.child('todos');
    // forEach( )
    //child.remove();
  });

}

const init = List();

const todosReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO:
      //firebaseAdd(action.payload);
      return state.push(Map(action.payload));
    case REMOVE_TODO:
      //removeFromFirebase(action.payload.filter((v, k) => v.get('selected') === true));
      const reducedList = action.payload.filter((v, k) => v.get('selected') !== true);
      return reducedList;
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.get("uuid") === action.payload.uuid) {
          return todo.merge({
            'subject': action.payload.subject,
            'message': action.payload.message
          });
        } else {
          return todo;
        }
      });
    case SELECT_TODO:
      return state.map(todo => {
        if (todo.get("uuid") === action.payload.uuid) {
          return todo.update('selected', value => action.payload.selected);
        } else {
          return todo;
        }
      });
    case SET_DATABASE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;