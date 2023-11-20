import { authTypes } from "./types";

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  data: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case authTypes.AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
      };
    case authTypes.AUTH_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
      };

    case authTypes.AUTH_CLEAR:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
