import {
  GET_ALL_CATEGORIES_FAILED,
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
} from "../action/action.type";

const initalState = {
  list: [],
  loading: false,
};

const categoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case GET_ALL_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
