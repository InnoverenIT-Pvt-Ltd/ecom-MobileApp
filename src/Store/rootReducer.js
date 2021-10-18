import { combineReducers } from "redux";
import {LOGOUT} from '../Module/Auth/AuthActionTypes';
import AsyncStorage from '@react-native-community/async-storage';
/**
 *  All of application reducers import goes here...
 */
import { authReducer } from "../Module/Auth/AuthReducer";
import { productReducer } from "../Module/Dashboard/Product/ProductReducer";

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});


const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    AsyncStorage.removeItem('userDetails');
    AsyncStorage.removeItem('token');
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
