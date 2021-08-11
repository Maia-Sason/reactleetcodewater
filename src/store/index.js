import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import chartData from "./chartData";
import inputData from "./inputData";

const rootReducer = combineReducers({
  chart: chartData,
  input: inputData,
});

export default createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);