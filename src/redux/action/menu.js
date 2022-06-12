import { toast } from "react-toastify";
import axiosInstant from "../../util/axiosInstance";
import {
  GET_MENU_ITEMS_FAILED,
  GET_MENU_ITEMS_START,
  GET_MENU_ITEMS_SUCCESS,
} from "./action.type";

const getMenuItemStart = () => ({
  type: GET_MENU_ITEMS_START,
});

const getMenuItemSuccess = (data) => ({
  type: GET_MENU_ITEMS_SUCCESS,
  payload: data,
});

const getMenuItemFailed = (error) => ({
  type: GET_MENU_ITEMS_FAILED,
  payload: error,
});

export const getAllMenu = (limit, page) => {
  return (dispatch) => {
    dispatch(getMenuItemStart());
    axiosInstant
      .get(`/menu?limit=${limit}&page=${page}`)
      .then((response) => {
        dispatch(getMenuItemSuccess({ ...response.data, limit, page }));
      })
      .catch((err) => {
        toast.error(err.response.data?.message);
        dispatch(getMenuItemFailed(err.response?.data));
      });
  };
};
