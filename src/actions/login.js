import { VALIDATION, ATTEMPT } from "./types";

export const authenticateUser = (validation) => {
  return {
    type: VALIDATION,
    payload: validation
  };
};

export const failedAttempt = (attempt) => {
  return {
    type: ATTEMPT,
    payload: attempt
  };
};