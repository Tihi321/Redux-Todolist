import { VALIDATION, ATTEMPT } from "../actions/types";

const init = {
  validation: undefined,
  attempt: false
};


const loginReducer = (state = init, action) => {
  switch (action.type) {
    case VALIDATION:
      return { ...state,validation: action.payload };
    case ATTEMPT:
      return { ...state,attempt: action.payload };
    default:
      return state;
  }
}

export default loginReducer;