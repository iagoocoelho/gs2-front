import { materialsTypes } from "./types";

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
  materialById: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case materialsTypes.GET_MATERIAL_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case materialsTypes.GET_MATERIAL_LIST_SUCCESS:
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
    case materialsTypes.GET_MATERIAL_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case materialsTypes.GET_MATERIAL_BY_ID_REQUEST:
      return {
        ...state,
        materialById: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case materialsTypes.GET_MATERIAL_BY_ID_SUCCESS:
      return {
        ...state,
        materialById: {
          ...state.materialById,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case materialsTypes.GET_MATERIAL_BY_ID_FAILURE:
      return {
        ...state,
        materialById: {
          ...state.materialById,
          success: false,
          loading: false,
          error: true,
        },
      };

    case materialsTypes.GET_MATERIAL_BY_ID_CLEAN:
      return {
        ...state,
        materialById: {
          ...INITIAL_STATE.materialById,
        },
      };

    case materialsTypes.REGISTER_MATERIAL_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case materialsTypes.REGISTER_MATERIAL_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case materialsTypes.REGISTER_MATERIAL_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };

    case materialsTypes.EDIT_MATERIAL_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case materialsTypes.EDIT_MATERIAL_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
          loading: false,
          error: false,
        },
      };
    case materialsTypes.EDIT_MATERIAL_FAILURE:
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
