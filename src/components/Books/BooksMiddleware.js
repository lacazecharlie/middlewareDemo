/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { BOOKS, FETCH_BOOKS } from "./types";
import { apiRequest } from "../middleware/core/actions";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes";

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const books = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_BOOKS) {
    const query = action.payload;
    dispatch(apiRequest(`${BOOKS_URL}?q=${query}`, "GET", null, BOOKS));
  }
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [books];
