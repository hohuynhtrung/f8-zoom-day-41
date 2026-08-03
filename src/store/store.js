import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import { reducer as productReducer } from "./product";
import { reducer as uiReducer } from "./ui";

const middleware = [thunk];

const rootReducer = combineReducers({
  product: productReducer,
  ui: uiReducer,
});

if (import.meta.env.DEV) {
  const logger = createLogger();
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
