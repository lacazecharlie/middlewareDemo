import { CLEAR_NOTIFICATION, SET_NOTIFICATION } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return [...state, `${action.meta.feature} ${action.payload}`];
    case CLEAR_NOTIFICATION: {
      const index = action.payload;
      const nextState = [ ...state];
      nextState.splice(index, 1);
      return nextState;
    }
    default:
      return state;
  }
};
