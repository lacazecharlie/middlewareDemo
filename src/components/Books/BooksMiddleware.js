/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { BOOKS, FETCH_BOOKS } from "./types";
import { apiRequest } from "../../middleware/core/actions";
import { setBooks, setLoader } from "./actions";
import { API_ERROR, API_SUCCESS } from "../../middleware/core/types";
import { setNotification } from "../Alerts/actions";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
// const BOOKS_URL = "https://www.googleapis e nj<xbvlmqs .com/books/v1/volumes";
const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes";

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const books = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_BOOKS) {
    const query = action.payload;
    const url = `${BOOKS_URL}?q=${query}&&maxResults=40`;
    dispatch(apiRequest(url, "GET", null, BOOKS));
    dispatch(setLoader(true));
  }

  if (action.type === `${BOOKS} ${API_SUCCESS}`) {
    dispatch(setLoader(false));
    dispatch(setBooks(action.payload));
  }

  if (action.type === `${BOOKS} ${API_ERROR}`) {
    dispatch(setLoader(false));
    dispatch(setNotification(action.payload, BOOKS));
  }
};

const notificationBooks = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === `${BOOKS} ${API_SUCCESS}`) {
    const data = action.payload;
    if (data.error) {
      dispatch(setNotification(data.error.message, BOOKS));
    } else if (!data.items || !data.items.length) {
      dispatch(setNotification("no data for the current research", BOOKS));
    }
  }
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [books, notificationBooks];
