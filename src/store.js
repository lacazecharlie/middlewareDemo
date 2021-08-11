/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import BooksMiddleware from './components/Books/BooksMiddleware';
import { middlewareApi } from 'common-uitoolkit-beyond';
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
  composeEnhancers(applyMiddleware(middlewareApi,...BooksMiddleware))
);
