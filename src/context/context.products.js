import { useContext, useEffect, useState, useReducer, createContext } from "react";

import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "./actions";
import reducer from "./reducers/reducer.products";

const initialState = {
  isSidebarOpen: false,
};

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return <ProductContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</ProductContext.Provider>;
};

const useProductsContext = () => {
  return useContext(ProductContext);
};

export { ProductsProvider, useProductsContext };
