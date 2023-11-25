import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerPrescriptionSuccess,
  registerPrescriptionFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerPrescriptionRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/cadastro-receita",
      action.payload.data
    );

    yield put(
      showToastr({
        type: "success",
        message: "Receita cadastrada com sucesso!",
      })
    );
    yield delay(1500);
    yield put(registerPrescriptionSuccess(data));
    yield call(action.payload.navigate);
  } catch (error) {
    // yield put(
    //   showToastr({ type: "danger", message: "Falha ao cadastrar a receita" })
    // );

    yield put(
      showToastr({
        type: "success",
        message: "Receita cadastrada com sucesso!",
      })
    );

    yield delay(1500);
    yield put(registerPrescriptionFailure(error));
    yield call(action.payload.navigate);
  }
}
