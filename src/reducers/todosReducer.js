import { List } from "immutable";
import { SELECT_TODO, SET_DATABASE_DATA } from "../actions/types";

const init = List();

const todosReducer = (state = init, action) => {
  switch (action.type) {
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