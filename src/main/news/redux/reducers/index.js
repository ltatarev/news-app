import { combineReducers } from "redux";

import newsReducer from "./newsReducer";
import recievedAtReducer from "./recievedAtReducer";

const rootReducer = combineReducers({
  newsReducer,
  recievedAtReducer
});

export default rootReducer;
