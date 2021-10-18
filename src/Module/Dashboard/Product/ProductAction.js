import axios from "axios";
import * as types from "./ProductActionTypes";
import { base_url, login_url } from "../../../Config/Auth";
import store from '../../../Store';

/**get korero product list */
export const getProducts = () => (dispatch) => {
    dispatch({
      type: types.GET_PRODUCTS_REQUEST,
    });
    axios
    .get(`${base_url}/products`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: types.GET_PRODUCTS_FAILURE,
          payload: err,
        });
      });
  };
 