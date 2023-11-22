import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerPatientSuccess,
  registerPatientFailure,
  getPatientListSuccess,
  getPatientListFailure,
  getPatientByIdSuccess,
  getPatientByIdFailure,
  editPatientSuccess,
  editPatientFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerPatientRequest(action) {
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
    yield put(registerPatientSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o médico" })
    );
    yield delay(1500);
    yield put(registerPatientFailure());
    yield call(action.payload.navigate);
  }
}

export function* editPatientRequest(action) {
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
    yield put(editPatientSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o médico" })
    );
    yield delay(1500);
    yield put(editPatientFailure());
    yield call(action.payload.navigate);
  }
}

export function* getPatientByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/cliente-fornecedor/${action.payload.id}`
    );

    yield put(getPatientByIdSuccess(data));
  } catch (error) {
    yield put(getPatientByIdFailure(error));
  }
}

export function* getPatientListRequest() {
  try {
    const { data } = yield call(Api.get, "/cliente-fornecedor");

    yield put(getPatientListSuccess(data));
  } catch (error) {
    yield put(getPatientListFailure(error));
  }
}
