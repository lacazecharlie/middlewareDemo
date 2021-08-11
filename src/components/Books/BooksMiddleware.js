/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { apiRequest, API_ERROR, API_SUCCESS } from 'common-uitoolkit-beyond';
import { setBooks, setLoader } from "./actions";
import { setNotification } from "../Alerts/actions";
import { FETCH_BOOKS } from "./types";
import BOOKS from '../../Api/Books';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const feature = '[BOOKS]'

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const books = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_BOOKS) {
    const query = action.payload;
    const fetchProperties = BOOKS.getGoogleBooksFetchProperties(query, 40)
    dispatch(apiRequest({ ...fetchProperties, feature}));
    dispatch(setLoader(true));
  }

  if (action.type === `${feature} ${API_SUCCESS}`) {
    dispatch(setLoader(false));
    dispatch(setBooks(action.payload.data));
  }

  if (action.type === `${feature} ${API_ERROR}`) {
    dispatch(setLoader(false));
    dispatch(setNotification(action.payload, BOOKS));
  }
};
/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [books];
