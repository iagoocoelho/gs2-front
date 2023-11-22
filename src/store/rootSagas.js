import { all, takeLatest } from "redux-saga/effects";

// Auth
import { authRequest } from "./auth/sagas";
import { authTypes } from "./auth/types";

// Médico
import {
  registerDoctorRequest,
  getDoctorListRequest,
  getDoctorByIdRequest,
  editDoctorRequest,
} from "./doctor/sagas";
import { doctorTypes } from "./doctor/types";

// Paciente
import {
  registerPatientRequest,
  getPatientListRequest,
  getPatientByIdRequest,
  editPatientRequest,
} from "./patient/sagas";
import { patientTypes } from "./patient/types";

export default function* rootSaga() {
  return yield all([
    // AUTH
    takeLatest(authTypes.AUTH_REQUEST, authRequest),

    // Médico
    takeLatest(doctorTypes.REGISTER_DOCTOR_REQUEST, registerDoctorRequest),
    takeLatest(doctorTypes.EDIT_DOCTOR_REQUEST, editDoctorRequest),
    takeLatest(doctorTypes.GET_DOCTOR_LIST_REQUEST, getDoctorListRequest),
    takeLatest(doctorTypes.GET_DOCTOR_BY_ID_REQUEST, getDoctorByIdRequest),

    // Paciente
    takeLatest(patientTypes.REGISTER_PATIENT_REQUEST, registerPatientRequest),
    takeLatest(patientTypes.EDIT_PATIENT_REQUEST, editPatientRequest),
    takeLatest(patientTypes.GET_PATIENT_LIST_REQUEST, getPatientListRequest),
    takeLatest(patientTypes.GET_PATIENT_BY_ID_REQUEST, getPatientByIdRequest),
  ]);
}
