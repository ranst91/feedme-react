import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import toppingsReducer from './toppings';
import pizzaReducer from './pizza';

const rootReducer = combineReducers({
  routing: routerReducer,
  toppings: toppingsReducer,
  order: combineReducers({
    pizza: pizzaReducer,
  }),
});

export default rootReducer;

// const es = {
//   toppings: [],
//   order: {
//     status: 'new',
//     price: 1,
//     pizza: {
//       size: 1,
//       cheeseRand: true,
//       toppingsById: [],
//     },
//     address: {
//       firstName: 'str',
//       lastName: 'str',
//       streetAndNumber: '',
//       city: '',
//     },
//   }
// };