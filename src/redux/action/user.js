import axiosInstant from "../../util/axiosInstance";
import {
  SIGN_IN_FAILED,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "../action/action.type";
import { toast } from "react-toastify";

const signUpStart = () => ({
  type: SIGN_UP_START,
});

const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

const signUpFailed = (err) => ({
  type: SIGN_UP_FAILED,
  payload: err,
});

export const signUp = (user, router) => {
  return (dispatch) => {
    dispatch(signUpStart());
    axiosInstant
      .post("/signup", user)
      .then((response) => {
        dispatch(signUpSuccess(response.data.user));
        if (response.data.success) {
          toast.success("Account created successfully");
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
        dispatch(signUpFailed(err.response?.data));
      });
  };
};

const signInStart = () => ({
  type: SIGN_IN_START,
});

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailed = (err) => ({
  type: SIGN_IN_FAILED,
  payload: err,
});

export const signIn = (user, router) => {
  return (dispatch) => {
    dispatch(signInStart());
    axiosInstant
      .post("/signin", user)
      .then((response) => {
        dispatch(signInSuccess(response.data.user));
        if (response.data.success) {
          toast.success("Signin Successfully...");
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
        dispatch(signInFailed(err.response?.data));
      });
  };
};
