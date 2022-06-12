import { combineReducers } from "redux";

import user from "./user";
import categoryReducer from "./category";
import menuReducer from "./menu";
import cartReducer from "./cart";

export default combineReducers({
  user,
  category: categoryReducer,
  menu: menuReducer,
  cart: cartReducer,
});
