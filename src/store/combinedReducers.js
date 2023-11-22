import { combineReducers } from 'redux';
import suppliers from './suppliers';
import doctor from './doctor';
import patient from './patient';
import customers from './customers';
import materials from './materials';
import products from './products';
import orders from './orders';
import toast from './toast';
import auth from './auth';

const appReducer = combineReducers({
  auth,
  suppliers,
  doctor,
  patient,
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