import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerDoctorSuccess,
  registerDoctorFailure,
  getDoctorListSuccess,
  getDoctorListFailure,
  getDoctorByIdSuccess,
  getDoctorByIdFailure,
  editDoctorSuccess,
  editDoctorFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerDoctorRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/cliente-fornecedor",
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Cadastrado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(registerDoctorSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o médico" })
    );
    yield delay(1500);
    yield put(registerDoctorFailure());
    yield call(action.payload.navigate);
  }
}

export function* editDoctorRequest(action) {
  try {
    const { data } = yield call(
      Api.put,
      `/cliente-fornecedor/${action.payload.id}`,
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Editado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(editDoctorSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o médico" })
    );
    yield delay(1500);
    yield put(editDoctorFailure());
    yield call(action.payload.navigate);
  }
}

export function* getDoctorByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/cliente-fornecedor/${action.payload.id}`
    );

    yield put(getDoctorByIdSuccess(data));
  } catch (error) {
    yield put(getDoctorByIdFailure(error));
  }
}

export function* getDoctorListRequest() {
  try {
    const { data } = yield call(Api.get, "/cliente-fornecedor");

    yield put(getDoctorListSuccess(data));
  } catch (error) {
    yield put(getDoctorListFailure(error));
  }
}
