import { SET_BOOKS } from "./types";

const initialState = {
  bookList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        bookList: action.payload
      };
    default:
      return state;
  }
};
