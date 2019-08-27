import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../src/main/news/redux/reducers";

import fetchIfNeeded from "./main/news/redux/middleware/fetchIfNeeded";

const loggerMiddleware = createLogger();

const persistConfig = {
  key: "root",
  storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  applyMiddleware(loggerMiddleware, fetchIfNeeded)
);
export const persistor = persistStore(store);
