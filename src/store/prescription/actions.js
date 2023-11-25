import { action } from "typesafe-actions";
import { prescriptionTypes } from "./types";

export const registerPrescriptionRequest = (data, navigate) =>
  action(prescriptionTypes.REGISTER_PRESCRIPTION_REQUEST, { data, navigate });
export const registerPrescriptionSuccess = (data) =>
  action(prescriptionTypes.REGISTER_PRESCRIPTION_SUCCESS, { data });
export const registerPrescriptionFailure = (error) =>
  action(prescriptionTypes.REGISTER_PRESCRIPTION_FAILURE, { error });