import { action } from "typesafe-actions";
import { authTypes } from "./types";

export const authRequest = (data) => action(authTypes.AUTH_REQUEST, { data });
export const authSuccess = (data) => action(authTypes.AUTH_SUCCESS, { data });
export const authFailure = (error) => action(authTypes.AUTH_FAILURE, { error });
export const authLogout = () => action(authTypes.AUTH_CLEAR);
