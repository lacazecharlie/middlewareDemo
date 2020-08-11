/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { combineReducers } from "redux";
import BooksReducer from "./components/Books/reducer";
import AlertsReducer from "./components/Alerts/reducer";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const reducers = combineReducers({
  BooksReducer,
  AlertsReducer
});

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default reducers;
