import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerCustomerSuccess,
  registerCustomerFailure,
  getCustomerListSuccess,
  getCustomerListFailure,
  getCustomerByIdSuccess,
  getCustomerByIdFailure,
  editCustomerSuccess,
  editCustomerFailure,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerCustomerRequest(action) {
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
    yield put(registerCustomerSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o cliente" })
    );
    yield delay(1500);
    yield put(registerCustomerFailure());
    yield call(action.payload.navigate);
  }
}

export function* editCustomerRequest(action) {
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
    yield put(editCustomerSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o cliente" })
    );
    yield delay(1500);
    yield put(editCustomerFailure());
    yield call(action.payload.navigate);
  }
}

export function* getCustomerByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.get,
      `/cliente-fornecedor/${action.payload.id}`
    );

    yield put(getCustomerByIdSuccess(data));
  } catch (error) {
    yield put(getCustomerByIdFailure(error));
  }
}

export function* getCustomerListRequest() {
  try {
    const { data } = yield call(Api.get, "/cliente-fornecedor");

    yield put(getCustomerListSuccess(data));
  } catch (error) {
    yield put(getCustomerListFailure(error));
  }
}

export function* deleteCustomerRequest(action) {
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
    yield put(deleteCustomerSuccess());
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({
        type: "danger",
        message: "Falha ao deletar o cliente",
      })
    );
    yield delay(1500);
    yield put(deleteCustomerFailure());
    yield call(action.payload.navigate);
  }
}
