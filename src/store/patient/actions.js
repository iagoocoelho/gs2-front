import { action } from "typesafe-actions";
import { patientTypes } from "./types";

export const registerPatientRequest = (data, navigate) =>
  action(patientTypes.REGISTER_PATIENT_REQUEST, { data, navigate });
export const registerPatientSuccess = (data) =>
  action(patientTypes.REGISTER_PATIENT_SUCCESS, { data });
export const registerPatientFailure = (error) =>
  action(patientTypes.REGISTER_PATIENT_FAILURE, { error });

export const editPatientRequest = (id, data, navigate) =>
  action(patientTypes.EDIT_PATIENT_REQUEST, { id, data, navigate });
export const editPatientSuccess = (data) =>
  action(patientTypes.EDIT_PATIENT_SUCCESS, { data });
export const editPatientFailure = (error) =>
  action(patientTypes.EDIT_PATIENT_FAILURE, { error });

export const getPatientListRequest = () =>
  action(patientTypes.GET_PATIENT_LIST_REQUEST);
export const getPatientListSuccess = (data) =>
  action(patientTypes.GET_PATIENT_LIST_SUCCESS, { data });
export const getPatientListFailure = (error) =>
  action(patientTypes.GET_PATIENT_LIST_FAILURE, { error });

export const getPatientByIdRequest = (id) =>
  action(patientTypes.GET_PATIENT_BY_ID_REQUEST, { id });
export const getPatientByIdSuccess = (data) =>
  action(patientTypes.GET_PATIENT_BY_ID_SUCCESS, { data });
export const getPatientByIdFailure = (error) =>
  action(patientTypes.GET_PATIENT_BY_ID_FAILURE, { error });
export const getPatientByIdClean = () =>
  action(patientTypes.GET_PATIENT_BY_ID_CLEAN);
