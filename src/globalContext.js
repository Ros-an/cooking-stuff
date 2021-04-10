import { useState, useContext, createContext, useReducer } from "react";
import { productList } from "./data";
import { reducer } from "./global-reducer";

export const GlobalContext = createContext();

const defaultState = {
  products: productList,
  cart: [],
  wishList: [],
  showModal: false,
  modalContent: "",
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
