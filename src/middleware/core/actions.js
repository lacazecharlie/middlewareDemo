import { API_ERROR, API_REQUEST, API_SUCCESS } from "./types";

export function apiRequest(url, method, body, feature) {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: {
      url,
      method,
      body
    },
    meta: {
      feature
    }
  };
}

export function apiSuccess(response, feature) {
  return {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature }
  };
}

export function apiError(error, feature) {
  return {
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: { feature }
  };
}
