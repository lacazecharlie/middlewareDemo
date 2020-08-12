import { SET_BOOKS, SET_LOADER } from "./types";

const initialState = {
  bookList: null,
  bookPending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        bookList: action.payload
      };
    case SET_LOADER:
      return {
        ...state,
        bookPending: action.payload,
      };
    default:
      return state;
  }
};
