import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "../src/main/news/redux/reducers";

const loggerMiddleware = createLogger();

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
export const persistor = persistStore(store);
