import * as types from "./ProductActionTypes";

const initialState = {

fetchingProducts: false,
fetchingProductsError: false,
products: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, fetchingProducts: true, fetchingProductsError: false };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, fetchingProducts: false, products: action.payload };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, fetchingProducts: false, fetchingProductsError: true };
      

      default:
      return state;
  }
};