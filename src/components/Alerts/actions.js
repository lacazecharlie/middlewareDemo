import { CLEAR_NOTIFICATION, SET_NOTIFICATION } from "./types";

export function setNotification(message, feature) {
  return {
    type: SET_NOTIFICATION,
    payload: message,
    meta: {
      feature,
    }
  }
}

export function clearNotification(id) {
  return {
    type: CLEAR_NOTIFICATION,
    payload: id,
  }
}
