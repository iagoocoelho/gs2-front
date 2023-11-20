import { all, takeLatest } from "redux-saga/effects";

// Auth
import { authRequest } from "./auth/sagas";
import { authTypes } from "./auth/types";

// Fornecedores
import {
  registerSupplierRequest,
  getSupplierListRequest,
  deleteSupplierRequest,
  getSupplierByIdRequest,
  editSupplierRequest,
} from "./suppliers/sagas";
import { suppliersTypes } from "./suppliers/types";

// Clientes
import {
  registerCustomerRequest,
  getCustomerListRequest,
  deleteCustomerRequest,
  getCustomerByIdRequest,
  editCustomerRequest,
} from "./customers/sagas";
import { customersTypes } from "./customers/types";

// Material
import {
  registerMaterialRequest,
  getMaterialListRequest,
  getMaterialByIdRequest,
  editMaterialRequest,
} from "./materials/sagas";
import { materialsTypes } from "./materials/types";

// Product
import {
  registerProductRequest,
  getProductListRequest,
  getProductByIdRequest,
  editProductRequest,
} from "./products/sagas";
import { productsTypes } from "./products/types";

// Order
import {
  registerOrderRequest,
  getOrderListRequest,
  getOrderByIdRequest,
  editOrderRequest,
  updateOrderByIdRequest,
} from "./orders/sagas";
import { ordersTypes } from "./orders/types";

export default function* rootSaga() {
  return yield all([
    // AUTH
    takeLatest(authTypes.AUTH_REQUEST, authRequest),

    // SUPPLIER
    takeLatest(
      suppliersTypes.REGISTER_SUPPLIER_REQUEST,
      registerSupplierRequest
    ),
    takeLatest(suppliersTypes.EDIT_SUPPLIER_REQUEST, editSupplierRequest),
    takeLatest(
      suppliersTypes.GET_SUPPLIER_LIST_REQUEST,
      getSupplierListRequest
    ),
    takeLatest(suppliersTypes.DELETE_SUPPLIER_REQUEST, deleteSupplierRequest),
    takeLatest(
      suppliersTypes.GET_SUPPLIER_BY_ID_REQUEST,
      getSupplierByIdRequest
    ),

    // CUSTOMER
    takeLatest(
      customersTypes.REGISTER_CUSTOMER_REQUEST,
      registerCustomerRequest
    ),
    takeLatest(customersTypes.EDIT_CUSTOMER_REQUEST, editCustomerRequest),
    takeLatest(
      customersTypes.GET_CUSTOMER_LIST_REQUEST,
      getCustomerListRequest
    ),
    takeLatest(customersTypes.DELETE_CUSTOMER_REQUEST, deleteCustomerRequest),
    takeLatest(
      customersTypes.GET_CUSTOMER_BY_ID_REQUEST,
      getCustomerByIdRequest
    ),

    // MATERIAL
    takeLatest(
      materialsTypes.REGISTER_MATERIAL_REQUEST,
      registerMaterialRequest
    ),
    takeLatest(materialsTypes.EDIT_MATERIAL_REQUEST, editMaterialRequest),
    takeLatest(
      materialsTypes.GET_MATERIAL_LIST_REQUEST,
      getMaterialListRequest
    ),
    takeLatest(
      materialsTypes.GET_MATERIAL_BY_ID_REQUEST,
      getMaterialByIdRequest
    ),

    // PRODUCT
    takeLatest(productsTypes.REGISTER_PRODUCT_REQUEST, registerProductRequest),
    takeLatest(productsTypes.EDIT_PRODUCT_REQUEST, editProductRequest),
    takeLatest(productsTypes.GET_PRODUCT_LIST_REQUEST, getProductListRequest),
    takeLatest(productsTypes.GET_PRODUCT_BY_ID_REQUEST, getProductByIdRequest),

    // ORDERS
    takeLatest(ordersTypes.REGISTER_ORDER_REQUEST, registerOrderRequest),
    takeLatest(ordersTypes.EDIT_ORDER_REQUEST, editOrderRequest),
    takeLatest(ordersTypes.GET_ORDER_LIST_REQUEST, getOrderListRequest),
    takeLatest(ordersTypes.GET_ORDER_BY_ID_REQUEST, getOrderByIdRequest),
    takeLatest(ordersTypes.UPDATE_ORDER_BY_ID_REQUEST, updateOrderByIdRequest),
  ]);
}
