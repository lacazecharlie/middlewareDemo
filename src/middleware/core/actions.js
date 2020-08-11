import { API_ERROR, API_REQUEST, API_SUCCESS } from "./types";

export function apiRequest(url, method, body, feature, otherMeta) {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: {
      url,
      method,
      body
    },
    meta: {
      feature,
      ...otherMeta
    }
  };
}

export function apiSuccess(response, feature, otherMeta) {
  return {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature, ...otherMeta }
  };
}

export function apiError(error, feature, otherMeta) {
  return {
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: { feature, ...otherMeta }
  };
}
