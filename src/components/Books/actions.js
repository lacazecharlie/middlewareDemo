import { FETCH_BOOKS, SET_BOOKS, SET_LOADER } from "./types";

export function fetchBooks(query) {
  return {
    type: FETCH_BOOKS,
    payload: query
  };
}

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books
  };
}

export function setLoader(isLoading) {
  return {
    type: SET_LOADER,
    payload: isLoading,
  }
}
