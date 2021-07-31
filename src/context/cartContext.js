import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useAuthContext } from "./authContext";
import { useGlobal } from "./globalContext";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userToken } = useAuthContext();
  const { setError } = useGlobal();
  const [cart, setCart] = useState(null);
  const getCart = useCallback(
    async (id) => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/cart/${id}`);
        if (res.data.cart) {
          setCart(res.data.cart);
        } else {
          setCart([]);
        }
      } catch (err) {
        console.log(err);
        setError({ message: err.message });
      }
    },
    [setError]
  );
  useEffect(() => {
    userToken && getCart(userToken._id);
  }, [userToken, getCart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
