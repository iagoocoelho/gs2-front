import { customersTypes } from "./types";

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
  customerById: {
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
    case customersTypes.GET_CUSTOMER_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case customersTypes.GET_CUSTOMER_LIST_SUCCESS:
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
    case customersTypes.GET_CUSTOMER_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case customersTypes.GET_CUSTOMER_BY_ID_REQUEST:
      return {
        ...state,
        customerById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case customersTypes.GET_CUSTOMER_BY_ID_SUCCESS:
      return {
        ...state,
        customerById: {
          ...state.customerById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case customersTypes.GET_CUSTOMER_BY_ID_FAILURE:
      return {
        ...state,
        customerById: {
          ...state.customerById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case customersTypes.GET_CUSTOMER_BY_ID_CLEAN:
      return {
        ...state,
        customerById: {
          ...INITIAL_STATE.customerById,
        },
      };

    case customersTypes.REGISTER_CUSTOMER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case customersTypes.REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case customersTypes.REGISTER_CUSTOMER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case customersTypes.EDIT_CUSTOMER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case customersTypes.EDIT_CUSTOMER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case customersTypes.EDIT_CUSTOMER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case customersTypes.DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        delete: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case customersTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          success: true,
          loading: false,
          error: false,
        },
      };
    case customersTypes.DELETE_CUSTOMER_FAILURE:
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
