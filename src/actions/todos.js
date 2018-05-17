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

/*
* Funkcija prima podatke iz baze i šalje ih u reducer za postav u stanje
*/

export const setDatabaseData = (data) => {
  return {
    type: SET_DATABASE_DATA,
    payload: data
  };
};
