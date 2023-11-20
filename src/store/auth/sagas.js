import { call, put } from "redux-saga/effects";
import { AuthApi } from "common/api";
import { authSuccess, authFailure } from "./actions";

export function* authRequest(action) {
  try {
    const { data } = yield call(AuthApi.post, "/login", action.payload.data);
    yield put(authSuccess(data));
  } catch (error) {
    yield put(authFailure());
  }
}
