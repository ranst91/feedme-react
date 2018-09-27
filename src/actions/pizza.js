export const actions = {
  SET_SIZE: 'SET_PIZZA_SIZE',
  SET_CHEESE_RAND: 'SET_CHEESE_RAND',
  ADD_TOPPING: 'ADD_TOPPING_TO_PIZZA',
  REMOVE_TOPPING: 'REMOVE_TOPPING_FROM_PIZZA',
  RESET_PIZZA: 'REMOVE_TOPPING_FROM_PIZZA',
  SUBMIT_PIZZA: 'REMOVE_TOPPING_FROM_PIZZA',
};

export function setSize(size) {
  return {
    type: actions.SET_SIZE,
    size,
  }
}
export function setCheeseRand(cheeseRand) {
  return {
    type: actions.SET_CHEESE_RAND,
    cheeseRand,
  }
}
export function addTopping(topping) {
  return {
    type: actions.ADD_TOPPING,
    topping,
  }
}
export function removeTopping(topping) {
  return {
    type: actions.REMOVE_TOPPING,
    topping,
  }
}
export function resetPizza() {
  return {
    type: actions.RESET_PIZZA,
    pizza: {},
  }
}
export function submitPizza(pizza) {
  return {
    type: actions.SUBMIT_PIZZA,
    pizza,
  }
}