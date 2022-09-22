import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_DETAILS_BEGIN,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
} from "../actions";

const productReducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN: {
      return { ...state, isSidebarOpen: true };
    }
    case SIDEBAR_CLOSE: {
      return { ...state, isSidebarOpen: false };
    }
    case GET_PRODUCTS_BEGIN: {
      return { ...state, products_loading: true };
    }
    case GET_PRODUCTS_SUCCESS: {
      const featured_products = action.payload.filter((product) => product.featured === true);
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, products_loading: false, products_error: true };
    }
    case GET_PRODUCT_DETAILS_BEGIN: {
      return {
        ...state,
        product_details_loading: true,
        product_details_error: false,
      };
    }
    case GET_PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        product_details_loading: false,
        product_details: action.payload,
      };
    }
    case GET_PRODUCT_DETAILS_ERROR: {
      return {
        ...state,
        product_details_loading: false,
        product_details_error: true,
      };
    }
    default: {
      throw new Error(`No matching ${action.type} action type!`);
    }
  }
};

export default productReducer;
