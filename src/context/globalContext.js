import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { reducer } from "../reducer/global-reducer";
// import useAxiosGet from "../custom-hook/useAxiosGet";
import axios from "axios";

export const GlobalContext = createContext();

const defaultState = {
  products: [],
  cart: [],
  wishList: [],
  showModal: false,
  modalContent: "",
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [products, setProducts] = useState([]);
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  useEffect(() => {
    async function leleData() {
      try {
        const response = await axios.get(
          "https://cooking-stuff-backend.rosan.repl.co/api/products"
        );
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    leleData();
  }, []);
  console.log(products);
  state.products = products;
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
