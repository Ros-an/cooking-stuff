import { useState, useContext, createContext, useReducer } from "react";
import { productList } from "./data";
import { reducer } from "./global-reducer";

export const GlobalContext = createContext();

const defaultState = {
  cart: [],
  wishList: [],
  showModal: false,
  modalContent: "",
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [product, setProduct] = useState(productList);
  const closeModal = () => {
    dispatch();
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        product,
        setProduct,
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
