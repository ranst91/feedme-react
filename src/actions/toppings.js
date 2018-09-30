export const GET_TOPPINGS = 'GET_TOPPINGS';
export function getToppings() {
  return function (dispatch, getState) {
    if (getState().toppings) {
      return Promise.resolve();
    }

    dispatch(requestToppings());

    return fetch()
      .then(res => res.json(), error => console.log(error))
      .then(res => dispatch(setToppings(res)));
  }
}

function requestToppings() {
  return {
    type: 'REQUEST_TOPPINGS',
  }
}

export const SET_TOPPINGS = 'SET_TOPPINGS';
function setToppings(toppings) {
  return {
    type: 'RECEIVE_TOPPINGS',
    toppings
  }
}
