import { prescriptionTypes } from "./types";

const INITIAL_STATE = {
  register: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case prescriptionTypes.REGISTER_PRESCRIPTION_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case prescriptionTypes.REGISTER_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case prescriptionTypes.REGISTER_PRESCRIPTION_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};

export default reducer;
