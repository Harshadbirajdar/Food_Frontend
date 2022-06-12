import {
  GET_ALL_CATEGORIES_FAILED,
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
} from "./action.type";
import axiosInstant from "../../util/axiosInstance";

const getAllCategoriesStart = () => ({
  type: GET_ALL_CATEGORIES_START,
});

const getAllCategoriesSuccess = (categories) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: categories,
});

const getAllCategoriesFailed = (err) => ({
  type: GET_ALL_CATEGORIES_FAILED,
  payload: err,
});

export const getAllCategories = () => {
  return (dispatch) => {
    dispatch(getAllCategoriesStart());
    axiosInstant
      .get("/category")
      .then((response) => {
        dispatch(getAllCategoriesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getAllCategoriesFailed(err.response?.data));
      });
  };
};
