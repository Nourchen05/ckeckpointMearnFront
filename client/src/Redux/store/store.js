import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

//const composeEnhancer = windows._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
