import { SET_NOTIFICATION } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        [action.meta.feature]: action.payload,
      };
    default:
      return state;
  }
}
