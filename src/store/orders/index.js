import { ordersTypes } from "./types";

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
  orderById: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ordersTypes.GET_ORDER_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case ordersTypes.GET_ORDER_LIST_SUCCESS:
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
    case ordersTypes.GET_ORDER_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case ordersTypes.GET_ORDER_BY_ID_REQUEST:
      return {
        ...state,
        orderById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case ordersTypes.GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        orderById: {
          ...state.orderById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case ordersTypes.GET_ORDER_BY_ID_FAILURE:
      return {
        ...state,
        orderById: {
          ...state.orderById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case ordersTypes.GET_ORDER_BY_ID_CLEAN:
      return {
        ...state,
        orderById: {
          ...INITIAL_STATE.orderById,
        },
      };

    case ordersTypes.REGISTER_ORDER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case ordersTypes.REGISTER_ORDER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case ordersTypes.REGISTER_ORDER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case ordersTypes.EDIT_ORDER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case ordersTypes.EDIT_ORDER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case ordersTypes.EDIT_ORDER_FAILURE:
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
