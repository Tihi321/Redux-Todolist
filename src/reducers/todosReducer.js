import { List, Map } from "immutable";
import { REMOVE_TODO, ADD_TODO, EDIT_TODO, SELECT_TODO } from "../actions/types";

/*
* Ovdje su crud operacije nad todo listom, te ulazni podatci store-a
*/

const init = List([
  Map({
    created: '"2018-05-16T21:00:33.531Z"',
    message: "Napraviti Todo Aplikaciju sa React, Redux i Firebase",
    selected: false,
    subject: "Flipkod Todo",
    uuid: "feb272c6-7b26-401d-9825-0c09102cdbe5"
  }),
  Map({
    created: '"2018-05-16T23:15:38.148Z"',
    message:
      "Pomoću Yeomana i njegovog web app generatora postaviti environment i napraviti html predložak",
    selected: false,
    subject: "HTML/Slice zadatak",
    uuid: "1936fcd2-8fbe-4c55-9eff-ccaa78b1ebc1"
  }),
  Map({
    created: '"2018-05-16T23:17:27.981Z"',
    message:
      "kreirati 2 modela/klase, Circle i Triangle te implementirati 2 metode:za izračun povrsine i za izračun opsega objekta",
    selected: false,
    subject: "MVC Zadatak",
    uuid: "824e1972-4b1b-4d13-a70b-72dafe6d92d6"
  }),
  Map({
    created: '"2018-05-16T23:17:48.621Z"',
    message:
      "Treba napisati klase koje predstavljaju trokut i krug i preko kojih možemo jednostavno izračunati površinu i opseg kruga i trokuta.Za krug vam je kao parametar dan polumjer a za trokut su dane sve tri stranice i visina na osnovicu.",
    selected: false,
    subject: "PHP OO (Ne MVC)",
    uuid: "c60d2353-567d-458b-ab0d-12d8b3078543"
  })
]);

const todosReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Map(action.payload));
    case REMOVE_TODO:
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
    default:
      return state;
  }
};

export default todosReducer;