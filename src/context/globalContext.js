import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { reducer } from "../reducer/global-reducer";
import "react-toastify/dist/ReactToastify.css";
// import useAxiosGet from "../custom-hook/useAxiosGet";
import axios from "axios";

export const GlobalContext = createContext();

const defaultState = {
  products: [],
  cart: [],
  wishList: [],
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function leleData() {
      try {
        const response = await axios.get(
          "https://cooking-stuff-backend.rosan.repl.co/api/products"
        );
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    leleData();
  }, []);
  state.products = products;
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
