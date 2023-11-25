import axios from "axios";
import { store } from "store/store";
import * as authActions from "store/auth/actions";
import * as toast from "store/toast/actions";

const AuthApi = axios.create({
  baseURL: "http://localhost:8866/",
  headers: {
    Accept: "application/json",
  },
});

AuthApi.interceptors.response.use(
  async (response) => response,
  async (error) => {
    if (error.response.status === 500) {
      console.log("Ops, ocorreu um erro, tente novamente!");
    } else if (error.response.status === 404) {
      console.log("Ops, não encontrado!");
    } else if (error.response.status === 400) {
      console.log("Ops, ocorreu um erro, tente novamente!");
    } else if (error.response.status === 401) {
      store.dispatch(
        toast.showToastr({
          type: "danger",
          message: "Usuário e/ou senha inválido! :(",
        })
      );
    } else {
      throw error.response;
    }
  }
);

const Api = axios.create({
  baseURL: "http://localhost:8866/", // TODO: 1. AJUSTAR BASE URL
  headers: {
    Accept: "application/json",
  },
});

Api.interceptors.request.use(async (config) => {
  const auth = store.getState().auth;
  config.headers.Authorization = `Bearer ${auth.data?.token}`;
  return config;
});

Api.interceptors.response.use(
  async (response) => response,
  async (error) => {
    // store.dispatch(authActions.authLogout());
    

    // if (error.response.status === 500) {
    //   console.log("Ops, ocorreu um erro, tente novamente!");
    // } else if (error.response.status === 404) {
    //   console.log("Ops, não encontrado!");
    // } else if (error.response.status === 401) {
    //   store.dispatch(
    //     toast.showToastr({
    //       type: "danger",
    //       message: "Seu token expirou! :(",
    //     })
    //   );

    //   store.dispatch(authActions.authLogout());
    //   throw error.response;
    // } else {
    // }
    throw error.response;
  }
);

export { Api, AuthApi };
