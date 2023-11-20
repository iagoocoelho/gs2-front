import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerMaterialSuccess,
  registerMaterialFailure,
  getMaterialListSuccess,
  getMaterialListFailure,
  getMaterialByIdSuccess,
  getMaterialByIdFailure,
  editMaterialSuccess,
  editMaterialFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerMaterialRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/material",
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Cadastrado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(registerMaterialSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o cliente" })
    );
    yield delay(1500);
    yield put(registerMaterialFailure());
    yield call(action.payload.navigate);
  }
}

export function* editMaterialRequest(action) {
  try {
    const { data } = yield call(
      Api.put,
      `/material/${action.payload.id}`,
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Editado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(editMaterialSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o cliente" })
    );
    yield delay(1500);
    yield put(editMaterialFailure());
    yield call(action.payload.navigate);
  }
}

export function* getMaterialByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/material/${action.payload.id}`
    );

    yield put(getMaterialByIdSuccess(data));
  } catch (error) {
    yield put(getMaterialByIdFailure(error));
  }
}

export function* getMaterialListRequest() {
  try {
    const { data } = yield call(Api.get, "/material");

    yield put(getMaterialListSuccess(data));
  } catch (error) {
    yield put(getMaterialListFailure(error));
  }
}
