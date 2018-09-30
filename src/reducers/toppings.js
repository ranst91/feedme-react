import {
  GET_TOPPINGS,
  SET_TOPPINGS,
} from '../actions/toppings';

const toppingsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOPPINGS:
      return state;
    case SET_TOPPINGS:
      return Object.assign({}, state, action.toppings);
    default:
      return state;
  }
};

export default toppingsReducer;