import { SELECT_TODO, SET_DATABASE_DATA } from "./types";

export const selectTodo = (selected, uuid) => {
  return {
    type: SELECT_TODO,
    payload: {
      selected: selected,
      uuid: uuid
    }
  };
};

export const setDatabaseData = (data) => {
  return {
    type: SET_DATABASE_DATA,
    payload: data
  };
};
