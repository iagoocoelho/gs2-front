import { suppliersTypes } from "./types";

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
  supplierById: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
  delete: {
    loading: false,
    success: false,
    error: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case suppliersTypes.GET_SUPPLIER_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.GET_SUPPLIER_LIST_SUCCESS:
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
    case suppliersTypes.GET_SUPPLIER_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case suppliersTypes.GET_SUPPLIER_BY_ID_REQUEST:
      return {
        ...state,
        supplierById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.GET_SUPPLIER_BY_ID_SUCCESS:
      return {
        ...state,
        supplierById: {
          ...state.supplierById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.GET_SUPPLIER_BY_ID_FAILURE:
      return {
        ...state,
        supplierById: {
          ...state.supplierById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case suppliersTypes.GET_SUPPLIER_BY_ID_CLEAN:
      return {
        ...state,
        supplierById: {
          ...INITIAL_STATE.supplierById,
        },
      };

    case suppliersTypes.REGISTER_SUPPLIER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.REGISTER_SUPPLIER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.REGISTER_SUPPLIER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case suppliersTypes.EDIT_SUPPLIER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.EDIT_SUPPLIER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.EDIT_SUPPLIER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case suppliersTypes.DELETE_SUPPLIER_REQUEST:
      return {
        ...state,
        delete: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.DELETE_SUPPLIER_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.DELETE_SUPPLIER_FAILURE:
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
