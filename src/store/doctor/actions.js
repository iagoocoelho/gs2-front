import { action } from "typesafe-actions";
import { doctorTypes } from "./types";

export const registerDoctorRequest = (data, navigate) =>
  action(doctorTypes.REGISTER_DOCTOR_REQUEST, { data, navigate });
export const registerDoctorSuccess = (data) =>
  action(doctorTypes.REGISTER_DOCTOR_SUCCESS, { data });
export const registerDoctorFailure = (error) =>
  action(doctorTypes.REGISTER_DOCTOR_FAILURE, { error });

export const editDoctorRequest = (id, data, navigate) =>
  action(doctorTypes.EDIT_DOCTOR_REQUEST, { id, data, navigate });
export const editDoctorSuccess = (data) =>
  action(doctorTypes.EDIT_DOCTOR_SUCCESS, { data });
export const editDoctorFailure = (error) =>
  action(doctorTypes.EDIT_DOCTOR_FAILURE, { error });

export const getDoctorListRequest = () =>
  action(doctorTypes.GET_DOCTOR_LIST_REQUEST);
export const getDoctorListSuccess = (data) =>
  action(doctorTypes.GET_DOCTOR_LIST_SUCCESS, { data });
export const getDoctorListFailure = (error) =>
  action(doctorTypes.GET_DOCTOR_LIST_FAILURE, { error });

export const deleteDoctorRequest = (id) =>
  action(doctorTypes.DELETE_DOCTOR_REQUEST, { id });
export const deleteDoctorSuccess = (data) =>
  action(doctorTypes.DELETE_DOCTOR_SUCCESS, { data });
export const deleteDoctorFailure = (error) =>
  action(doctorTypes.DELETE_DOCTOR_FAILURE, { error });

export const getDoctorByIdClean = () =>
  action(doctorTypes.GET_DOCTOR_BY_ID_CLEAN);
