import { productsTypes } from "./types";

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
  productById: {
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
    case productsTypes.GET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case productsTypes.GET_PRODUCT_LIST_SUCCESS:
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
    case productsTypes.GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case productsTypes.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        productById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case productsTypes.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productById: {
          ...state.productById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case productsTypes.GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        productById: {
          ...state.productById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case productsTypes.GET_PRODUCT_BY_ID_CLEAN:
      return {
        ...state,
        productById: {
          ...INITIAL_STATE.productById,
        },
      };

    case productsTypes.REGISTER_PRODUCT_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case productsTypes.REGISTER_PRODUCT_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case productsTypes.REGISTER_PRODUCT_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case productsTypes.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case productsTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case productsTypes.EDIT_PRODUCT_FAILURE:
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
