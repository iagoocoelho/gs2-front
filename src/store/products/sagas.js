import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerProductSuccess,
  registerProductFailure,
  getProductListSuccess,
  getProductListFailure,
  getProductByIdSuccess,
  getProductByIdFailure,
  editProductSuccess,
  editProductFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerProductRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/produto",
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Cadastrado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(registerProductSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o cliente" })
    );
    yield delay(1500);
    yield put(registerProductFailure());
    yield call(action.payload.navigate);
  }
}

export function* editProductRequest(action) {
  try {
    const { data } = yield call(
      Api.put,
      `/produto/${action.payload.id}`,
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Editado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(editProductSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o cliente" })
    );
    yield delay(1500);
    yield put(editProductFailure());
    yield call(action.payload.navigate);
  }
}

export function* getProductByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/produto/${action.payload.id}`
    );

    yield put(getProductByIdSuccess(data));
  } catch (error) {
    yield put(getProductByIdFailure(error));
  }
}

export function* getProductListRequest() {
  try {
    const { data } = yield call(Api.get, "/produto");

    yield put(getProductListSuccess(data));
  } catch (error) {
    yield put(getProductListFailure(error));
  }
}
