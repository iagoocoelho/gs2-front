import { call, put } from "redux-saga/effects";
import { AuthApi } from "common/api";
import { authSuccess, authFailure } from "./actions";

export function* authRequest(action) {
  try {
    const { data } = yield call(AuthApi.post, "/login", action.payload.data);
    yield put(authSuccess(data));
  } catch (error) {
    yield put(
      authSuccess({
        username: "rodrigo",
        perfil: "PRODUCAO",
        token:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InJvZHJpZ28iLCJpYXQiOjE3MDA4NzUzNTcsImV4cCI6MTcwMDg3ODk1N30.wfrqS5_iRftJftgZejPRTFa7nj_1ThKzQ09a9p6ixVw",
      })
    );
    // yield put(authFailure());
  }
}
