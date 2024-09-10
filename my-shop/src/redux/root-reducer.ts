import { combineReducers } from "redux";
import { userSlice } from "./UserReducer/userSlice";
import { cartSlice } from "./CartReducer/cartSlice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
  // productReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
