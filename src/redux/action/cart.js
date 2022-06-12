import { ADD_TO_CART, UPDATE_QUANTITY_TO_CART } from "./action.type";
import { toast } from "react-toastify";

export const addToCart = (data) => {
  return (dispatch) => {
    toast.success(`${data?.item?.name} added to cart`);
    dispatch({ type: ADD_TO_CART, payload: data });
  };
};

export const updateQuantityToCart = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_QUANTITY_TO_CART, payload: data });
  };
};
