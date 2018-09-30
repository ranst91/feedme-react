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
      return Object.assign({}, state, { size: action.size });
    case SET_CHEESE_RAND:
      return Object.assign({}, state, { cheeseRand: action.cheeseRand });
    case ADD_TOPPING:
      return Object.assign({}, state, { toppings: [ ...state.toppings, action.topping ] });
      case REMOVE_TOPPING:
      return Object.assign({}, state, { toppings: [ ...state.toppings.filter(topping => topping !== action.topping) ] });
    case RESET_PIZZA:
      return {};
    case SUBMIT_PIZZA:
      return state;
    default:
      return state;
  }
};

export default pizzaReducer;