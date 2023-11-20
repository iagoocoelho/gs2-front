import { action } from "typesafe-actions";
import { customersTypes } from "./types";

export const registerCustomerRequest = (data, navigate) =>
  action(customersTypes.REGISTER_CUSTOMER_REQUEST, { data, navigate });
export const registerCustomerSuccess = (data) =>
  action(customersTypes.REGISTER_CUSTOMER_SUCCESS, { data });
export const registerCustomerFailure = (error) =>
  action(customersTypes.REGISTER_CUSTOMER_FAILURE, { error });

export const editCustomerRequest = (id, data, navigate) =>
  action(customersTypes.EDIT_CUSTOMER_REQUEST, { id, data, navigate });
export const editCustomerSuccess = (data) =>
  action(customersTypes.EDIT_CUSTOMER_SUCCESS, { data });
export const editCustomerFailure = (error) =>
  action(customersTypes.EDIT_CUSTOMER_FAILURE, { error });

export const getCustomerListRequest = () =>
  action(customersTypes.GET_CUSTOMER_LIST_REQUEST);
export const getCustomerListSuccess = (data) =>
  action(customersTypes.GET_CUSTOMER_LIST_SUCCESS, { data });
export const getCustomerListFailure = (error) =>
  action(customersTypes.GET_CUSTOMER_LIST_FAILURE, { error });

export const getCustomerByIdRequest = (id) =>
  action(customersTypes.GET_CUSTOMER_BY_ID_REQUEST, { id });
export const getCustomerByIdSuccess = (data) =>
  action(customersTypes.GET_CUSTOMER_BY_ID_SUCCESS, { data });
export const getCustomerByIdFailure = (error) =>
  action(customersTypes.GET_CUSTOMER_BY_ID_FAILURE, { error });
export const getCustomerByIdClean = () =>
  action(customersTypes.GET_CUSTOMER_BY_ID_CLEAN);

export const deleteCustomerRequest = (id, navigate) =>
  action(customersTypes.DELETE_CUSTOMER_REQUEST, { id, navigate });
export const deleteCustomerSuccess = () =>
  action(customersTypes.DELETE_CUSTOMER_SUCCESS);
export const deleteCustomerFailure = () =>
  action(customersTypes.DELETE_CUSTOMER_FAILURE);
