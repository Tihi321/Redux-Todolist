import { REMOVE_TODO, ADD_TODO, EDIT_TODO, SELECT_TODO } from "./types";
import uuidv4 from 'uuid/v4';

/*
* Funkcija prima naslov zadatka i poruku zadatka, te stvara objekt sa njima i 
* dodaje id pomoću dodatka uuid, dodaje vrijeme i datum kreiranja zadatka, te stavlja
* selected na false, prilikom označavanja reda za brisanje ovaj property je true
* i vraća objekt u reducer
*
*/
export const addTodo = (subject, message) => {
  return {
    type: ADD_TODO,
    payload: {
      created: JSON.stringify(new Date()),
      message: message,
      selected: false,
      subject: subject,
      uuid: uuidv4()
    }
  };
};

export const removeTodo = (todos) => {
  return { type: REMOVE_TODO, payload: todos };
};

export const editTodo = (uuid, todo) => {
  return {
    type: EDIT_TODO,
    payload: {
      uuid: uuid,
      subject: todo.subject,
      message: todo.message
    }
  };
};

export const selectTodo = (selected, uuid) => {
  return {
    type: SELECT_TODO,
    payload: {
      selected: selected,
      uuid: uuid
    }
  };
};
