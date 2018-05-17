import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import modalsReducer from './modalsReducer';
import formReducer from './formReducer';
import loginReducer from './loginReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const rootReducer = combineReducers({
  todos: todosReducer,
  modals: modalsReducer,
  form: formReducer,
  login: loginReducer
});


export default rootReducer;