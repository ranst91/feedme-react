const MAKE_A_NEW_ORDER = 'MAKE_A_NEW_ORDER';
const SET_STATUS = 'SET_STATUS';
const SET_PRICE = 'SET_PRICE';
const RESET_ORDER = 'RESET_ORDER';

export default function makeANewOrder() {
  return {
    type: MAKE_A_NEW_ORDER,
    order: {},
  }
}
export default function setStatus(status) {
  return {
    type: SET_STATUS,
    status,
  }
}
export default function setPrice(price) {
  return {
    type: SET_PRICE,
    price,
  }
}
export default function resetOrder() {
  return {
    type: RESET_ORDER,
    order: {},
  }
}