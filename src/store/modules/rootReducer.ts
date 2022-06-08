// RootReducer serve para conseguir unir vários reducers dentro de um único estado.

import { combineReducers } from "redux";
import { cart } from "./cart/reducer";

export default combineReducers({
  cart,
});
