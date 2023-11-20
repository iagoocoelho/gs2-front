import { action } from "typesafe-actions";
import { ordersTypes } from "./types";

export const registerOrderRequest = (data, navigate) =>
  action(ordersTypes.REGISTER_ORDER_REQUEST, { data, navigate });
export const registerOrderSuccess = (data) =>
  action(ordersTypes.REGISTER_ORDER_SUCCESS, { data });
export const registerOrderFailure = (error) =>
  action(ordersTypes.REGISTER_ORDER_FAILURE, { error });

export const editOrderRequest = (id, data, navigate) =>
  action(ordersTypes.EDIT_ORDER_REQUEST, { id, data, navigate });
export const editOrderSuccess = (data) =>
  action(ordersTypes.EDIT_ORDER_SUCCESS, { data });
export const editOrderFailure = (error) =>
  action(ordersTypes.EDIT_ORDER_FAILURE, { error });

export const getOrderListRequest = () =>
  action(ordersTypes.GET_ORDER_LIST_REQUEST);
export const getOrderListSuccess = (data) =>
  action(ordersTypes.GET_ORDER_LIST_SUCCESS, { data });
export const getOrderListFailure = (error) =>
  action(ordersTypes.GET_ORDER_LIST_FAILURE, { error });

export const getOrderByIdRequest = (id) =>
  action(ordersTypes.GET_ORDER_BY_ID_REQUEST, { id });
export const getOrderByIdSuccess = (data) =>
  action(ordersTypes.GET_ORDER_BY_ID_SUCCESS, { data });
export const getOrderByIdFailure = (error) =>
  action(ordersTypes.GET_ORDER_BY_ID_FAILURE, { error });
export const getOrderByIdClean = () =>
  action(ordersTypes.GET_ORDER_BY_ID_CLEAN);

export const updateOrderByIdRequest = (id, data) =>
  action(ordersTypes.UPDATE_ORDER_BY_ID_REQUEST, { id, data });
export const updateOrderByIdSuccess = (data) =>
  action(ordersTypes.UPDATE_ORDER_BY_ID_SUCCESS, { data });
export const updateOrderByIdFailure = (error) =>
  action(ordersTypes.UPDATE_ORDER_BY_ID_FAILURE, { error });
