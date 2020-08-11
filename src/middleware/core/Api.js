/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { apiError, apiSuccess } from "./actions";
import { API_REQUEST } from "./types";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const api = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, body } = action.payload;
    const { feature } = action.meta;

    fetch(url, { method, body })
      .then(response => response.json())
      .then(data => dispatch(apiSuccess(data, feature)))
      .catch(error => dispatch(apiError(error.message, feature)));
  }
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [api];
