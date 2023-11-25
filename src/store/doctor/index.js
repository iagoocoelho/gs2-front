import { doctorTypes } from "./types";

const INITIAL_STATE = {
  register: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
  list: {
    loading: false,
    success: false,
    error: false,
    data: [],
  },
  doctorById: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
  delete: {
    success: false,
    loading: false,
    error: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case doctorTypes.GET_DOCTOR_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case doctorTypes.GET_DOCTOR_LIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case doctorTypes.GET_DOCTOR_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case doctorTypes.GET_DOCTOR_BY_ID_CLEAN:
      return {
        ...state,
        doctorById: {
          ...INITIAL_STATE.doctorById,
        },
      };
    case doctorTypes.REGISTER_DOCTOR_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case doctorTypes.REGISTER_DOCTOR_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case doctorTypes.REGISTER_DOCTOR_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case doctorTypes.EDIT_DOCTOR_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case doctorTypes.EDIT_DOCTOR_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case doctorTypes.EDIT_DOCTOR_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case doctorTypes.DELETE_DOCTOR_REQUEST:
      return {
        ...state,
        delete: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case doctorTypes.DELETE_DOCTOR_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          success: true,
          loading: false,
          error: false,
        },
      };
    case doctorTypes.DELETE_DOCTOR_FAILURE:
      return {
        ...state,
        delete: {
          ...state.delete,
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
