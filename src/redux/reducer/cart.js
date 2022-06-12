import { ADD_TO_CART, UPDATE_QUANTITY_TO_CART } from "../action/action.type";

const initalState = [];

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let flag = true;
      let cartArray = state.map((item) => {
        if (item.item._id === action.payload.item._id) {
          flag = false;
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return flag ? [...cartArray, action.payload] : cartArray;
    case UPDATE_QUANTITY_TO_CART:
      return state.map((item) => {
        if (item?.item?._id === action.payload.item._id) {
          let qty = item.qty + action.payload.qty;
          if (qty === 0) return;
          return { ...item, qty: qty };
        } else return item;
      });
    default:
      return state;
  }
};

export default cartReducer;
