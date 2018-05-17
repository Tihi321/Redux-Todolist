import { ACTIVATE_TABLE_ROW } from "../actions/types";

const init = {
  activeRow:undefined
  };

const formReducer = (state = init, action) => {
  switch (action.type) {
    case ACTIVATE_TABLE_ROW:
      return { activeRow: action.payload };
    default:
      return state;
  }
}

export default formReducer;