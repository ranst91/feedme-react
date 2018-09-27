import { actions } from '../actions/pizza';

const {
  SET_SIZE,
  SET_CHEESE_RAND,
  ADD_TOPPING,
  REMOVE_TOPPING,
  RESET_PIZZA,
  SUBMIT_PIZZA
} = actions;

const pizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SIZE:
      return state;
    case SET_CHEESE_RAND:
      return state;
    case ADD_TOPPING:
      return state;
    case REMOVE_TOPPING:
      return state;
    case RESET_PIZZA:
      return state;
    case SUBMIT_PIZZA:
      return state;
    default:
      return state;
  }
};