import { action } from "typesafe-actions";
import { productsTypes } from "./types";

export const registerProductRequest = (data, navigate) =>
  action(productsTypes.REGISTER_PRODUCT_REQUEST, { data, navigate });
export const registerProductSuccess = (data) =>
  action(productsTypes.REGISTER_PRODUCT_SUCCESS, { data });
export const registerProductFailure = (error) =>
  action(productsTypes.REGISTER_PRODUCT_FAILURE, { error });

export const editProductRequest = (id, data, navigate) =>
  action(productsTypes.EDIT_PRODUCT_REQUEST, { id, data, navigate });
export const editProductSuccess = (data) =>
  action(productsTypes.EDIT_PRODUCT_SUCCESS, { data });
export const editProductFailure = (error) =>
  action(productsTypes.EDIT_PRODUCT_FAILURE, { error });

export const getProductListRequest = () =>
  action(productsTypes.GET_PRODUCT_LIST_REQUEST);
export const getProductListSuccess = (data) =>
  action(productsTypes.GET_PRODUCT_LIST_SUCCESS, { data });
export const getProductListFailure = (error) =>
  action(productsTypes.GET_PRODUCT_LIST_FAILURE, { error });

export const getProductByIdRequest = (id) =>
  action(productsTypes.GET_PRODUCT_BY_ID_REQUEST, { id });
export const getProductByIdSuccess = (data) =>
  action(productsTypes.GET_PRODUCT_BY_ID_SUCCESS, { data });
export const getProductByIdFailure = (error) =>
  action(productsTypes.GET_PRODUCT_BY_ID_FAILURE, { error });
export const getProductByIdClean = () =>
  action(productsTypes.GET_PRODUCT_BY_ID_CLEAN);
