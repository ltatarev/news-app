import { combineReducers } from "redux";

import newsReducer from "./newsReducer";
import receivedAtReducer from "./receivedAtReducer";

const rootReducer = combineReducers({
  newsReducer,
  receivedAtReducer
});

export default rootReducer;
