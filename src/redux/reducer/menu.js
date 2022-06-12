import {
  GET_MENU_ITEMS_FAILED,
  GET_MENU_ITEMS_START,
  GET_MENU_ITEMS_SUCCESS,
} from "../action/action.type";

const initalState = {
  menu: [],
  isLoading: false,
  limit: 20,
  page: 0,
  total: 0,
};

const menuReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menu: action.payload.menus,
        limit: action.payload.limit,
        page: action.payload.page,
        total: action.payload.totalMenu,
      };

    case GET_MENU_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default menuReducer;
