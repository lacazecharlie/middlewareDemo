/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { API_SUCCESS } from "./types";
import get from "lodash/get";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const applyAlphabeticSort = () => next => action => {
  if (
    action.type.includes(API_SUCCESS) &&
    action.meta &&
    action.meta.applyAlphaSort &&
    action.payload.totalItems
  ) {
    const list = action.payload.items;
    const { sortingKey } = action.meta;

    list.sort((a, b) => {
      const sortingPropertyA = get(a, sortingKey).toLowerCase();
      const sortingPropertyB = get(b, sortingKey).toLowerCase();
      return sortingPropertyA > sortingPropertyB ? 1 : -1;
    });

    const updatedAction = {
      ...action,
      payload: list
    };

    next(updatedAction);
  } else {
    next(action);
  }
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [applyAlphabeticSort];
