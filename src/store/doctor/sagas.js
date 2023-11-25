import { call, put, delay } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerDoctorSuccess,
  registerDoctorFailure,
  getDoctorListSuccess,
  getDoctorListFailure,
  editDoctorSuccess,
  editDoctorFailure,
  deleteDoctorSuccess,
  deleteDoctorFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerDoctorRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/cadastra-medico",
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
      `/atualiza-medico/${action.payload.id}`,
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

export function* getDoctorListRequest() {
  try {
    const { data } = yield call(Api.get, "/cliente-fornecedor");

    yield put(getDoctorListSuccess(data));
  } catch (error) {
    yield put(getDoctorListFailure(error));
  }
}

export function* deleteDoctorRequest(action) {
  try {
    yield call(
      Api.delete,
      `/remove-medico/${action.paylod.id}`
      // action.payload.id
    );

    yield put(
      showToastr({
        type: "success",
        message: "Médico deletado com sucesso!",
      })
    );

    yield delay(1500);
    yield put(deleteDoctorSuccess());
    yield call(action.payload.navigate);
  } catch (error) {
    yield put(
      showToastr({
        type: "danger",
        message: "Falha ao deletar o fornecedor",
      })
    );
    yield delay(1500);
    yield put(deleteDoctorFailure(error));
    yield call(action.payload.navigate);
  }
}
