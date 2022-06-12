import {
  SIGN_IN_FAILED,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "../action/action.type";

const initalState = {
  name: null,
  email: null,
  role: null,
  isLoading: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };

    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
