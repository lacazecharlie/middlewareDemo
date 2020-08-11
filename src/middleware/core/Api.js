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
    const { feature, ...otherMeta } = action.meta;

    fetch(url, { method, body })
      .then(response => response.json())
      .then(data => dispatch(apiSuccess(data, feature, otherMeta)))
      .catch(error => dispatch(apiError(error.message, feature, otherMeta)));
  }
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [api];
