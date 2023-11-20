import { combineReducers } from 'redux';
import suppliers from './suppliers';
import customers from './customers';
import materials from './materials';
import products from './products';
import orders from './orders';
import toast from './toast';
import auth from './auth';

const appReducer = combineReducers({
  auth,
  suppliers,
  customers,
  materials,
  products,
  orders,
  toast,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;