import { action } from "typesafe-actions";
import { materialsTypes } from "./types";

export const registerMaterialRequest = (data, navigate) =>
  action(materialsTypes.REGISTER_MATERIAL_REQUEST, { data, navigate });
export const registerMaterialSuccess = (data) =>
  action(materialsTypes.REGISTER_MATERIAL_SUCCESS, { data });
export const registerMaterialFailure = (error) =>
  action(materialsTypes.REGISTER_MATERIAL_FAILURE, { error });

export const editMaterialRequest = (id, data, navigate) =>
  action(materialsTypes.EDIT_MATERIAL_REQUEST, { id, data, navigate });
export const editMaterialSuccess = (data) =>
  action(materialsTypes.EDIT_MATERIAL_SUCCESS, { data });
export const editMaterialFailure = (error) =>
  action(materialsTypes.EDIT_MATERIAL_FAILURE, { error });

export const getMaterialListRequest = () =>
  action(materialsTypes.GET_MATERIAL_LIST_REQUEST);
export const getMaterialListSuccess = (data) =>
  action(materialsTypes.GET_MATERIAL_LIST_SUCCESS, { data });
export const getMaterialListFailure = (error) =>
  action(materialsTypes.GET_MATERIAL_LIST_FAILURE, { error });

export const getMaterialByIdRequest = (id) =>
  action(materialsTypes.GET_MATERIAL_BY_ID_REQUEST, { id });
export const getMaterialByIdSuccess = (data) =>
  action(materialsTypes.GET_MATERIAL_BY_ID_SUCCESS, { data });
export const getMaterialByIdFailure = (error) =>
  action(materialsTypes.GET_MATERIAL_BY_ID_FAILURE, { error });
export const getMaterialByIdClean = () =>
  action(materialsTypes.GET_MATERIAL_BY_ID_CLEAN);
