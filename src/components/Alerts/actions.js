import { SET_NOTIFICATION } from "./types";

export function setNotification(message, feature) {
  return {
    type: `${feature} ${SET_NOTIFICATION}`,
    payload: message,
    meta: {
      feature,
    }
  }
}
