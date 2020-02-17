import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart";
import { userReducer } from "./user";
import { directoryReducer } from "./directory";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
