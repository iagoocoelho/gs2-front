import { combineReducers } from 'redux';
import doctor from './doctor';
import patient from './patient';
import toast from './toast';
import auth from './auth';

const appReducer = combineReducers({
  auth,
  doctor,
  patient,
  toast,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;