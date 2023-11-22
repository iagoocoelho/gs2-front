import { patientTypes } from "./types";

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
  patientById: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case patientTypes.GET_PATIENT_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case patientTypes.GET_PATIENT_LIST_SUCCESS:
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
    case patientTypes.GET_PATIENT_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case patientTypes.GET_PATIENT_BY_ID_REQUEST:
      return {
        ...state,
        patientById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case patientTypes.GET_PATIENT_BY_ID_SUCCESS:
      return {
        ...state,
        patientById: {
          ...state.patientById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case patientTypes.GET_PATIENT_BY_ID_FAILURE:
      return {
        ...state,
        patientById: {
          ...state.patientById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case patientTypes.GET_PATIENT_BY_ID_CLEAN:
      return {
        ...state,
        patientById: {
          ...INITIAL_STATE.patientById,
        },
      };

    case patientTypes.REGISTER_PATIENT_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case patientTypes.REGISTER_PATIENT_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case patientTypes.REGISTER_PATIENT_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case patientTypes.EDIT_PATIENT_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case patientTypes.EDIT_PATIENT_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case patientTypes.EDIT_PATIENT_FAILURE:
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
