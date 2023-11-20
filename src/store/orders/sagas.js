import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerOrderSuccess,
  registerOrderFailure,
  getOrderListSuccess,
  getOrderListFailure,
  getOrderByIdSuccess,
  getOrderByIdFailure,
  editOrderSuccess,
  editOrderFailure,
  getOrderByIdRequest as updateGetById,
  updateOrderByIdFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerOrderRequest(action) {
  try {
    const { data } = yield call(Api.post, "/ordem-venda", action.payload.data);
    yield put(
      showToastr({ type: "success", message: "Cadastrado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(registerOrderSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o cliente" })
    );
    yield delay(1500);
    yield put(registerOrderFailure());
    yield call(action.payload.navigate);
  }
}

export function* editOrderRequest(action) {
  try {
    const { data } = yield call(
      Api.put,
      `/ordem-venda/${action.payload.id}`,
      action.payload.data
    );
    yield put(
      showToastr({ type: "success", message: "Editado feito com sucesso!" })
    );
    yield delay(1500);
    yield put(editOrderSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao editar o cliente" })
    );
    yield delay(1500);
    yield put(editOrderFailure());
    yield call(action.payload.navigate);
  }
}

export function* getOrderByIdRequest(action) {
  try {
    const { data } = yield call(Api.get, `/ordem-venda/${action.payload.id}`);

    yield put(getOrderByIdSuccess(data));
  } catch (error) {
    yield put(getOrderByIdFailure(error));
  }
}

export function* updateOrderByIdRequest(action) {
  try {
    const { data } = yield call(
      Api.put,
      `/ordem-venda/${action.payload.id}`,
      action.payload.data
    );

    yield put(updateGetById(action.payload.id));
  } catch (error) {
    yield put(updateOrderByIdFailure(error));
  }
}

export function* getOrderListRequest() {
  try {
    const { data } = yield call(Api.get, "/ordem-venda");

    yield put(getOrderListSuccess(data));
  } catch (error) {
    yield put(getOrderListFailure(error));
  }
}
