/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import customMiddleware from './middleware/index';
import reducers from "./reducers";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const composeEnhancers = composeWithDevTools({});

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...customMiddleware))
);
