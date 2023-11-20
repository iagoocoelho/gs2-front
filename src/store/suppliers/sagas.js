import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerSupplierSuccess,
  registerSupplierFailure,
  getSupplierListSuccess,
  getSupplierListFailure,
  getSupplierByIdSuccess,
  getSupplierByIdFailure,
  editSupplierSuccess,
  editSupplierFailure,
  deleteSupplierSuccess,
  deleteSupplierFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerSupplierRequest(action) {
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
    yield put(registerSupplierSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o fornecedor" })
    );
    yield delay(1500);
    yield put(registerSupplierFailure());
    yield call(action.payload.navigate);
  }
}

export function* editSupplierRequest(action) {
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
    yield put(editSupplierSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o fornecedor" })
    );
    yield delay(1500);
    yield put(editSupplierFailure());
    yield call(action.payload.navigate);
  }
}

export function* getSupplierByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/cliente-fornecedor/${action.payload.id}`
    );

    yield put(getSupplierByIdSuccess(data));
  } catch (error) {
    yield put(getSupplierByIdFailure(error));
  }
}

export function* getSupplierListRequest() {
  try {
    const { data } = yield call(Api.get, "/cliente-fornecedor");

    yield put(getSupplierListSuccess(data));
  } catch (error) {
    yield put(getSupplierListFailure(error));
  }
}

export function* deleteSupplierRequest(action) {
  try {
    yield call(
      Api.delete,
      `/cliente-fornecedor/${action.payload.id}`,
      action.payload.id
    );

    yield put(
      showToastr({
        type: "success",
        message: "Fornecedor deletado com sucesso!",
      })
    );

    yield delay(1500);
    yield put(deleteSupplierSuccess());
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({
        type: "danger",
        message: "Falha ao deletar o fornecedor",
      })
    );
    yield delay(1500);
    yield put(deleteSupplierFailure());
    yield call(action.payload.navigate);
  }
}
