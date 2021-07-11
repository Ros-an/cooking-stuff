import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGlobal } from "./globalContext";
import reducer from "../reducer/filter-reducer";

export const FilterContext = createContext();

const defaultState = {
  filtered_products: [],
  all_products: [],
  sort: "low-to-high",
  filters: {
    text: "",
    brand: "all",
    min_price: 0,
    max_price: 249,
    price: 249,
  },
};
export const FilterProvider = ({ children }) => {
  const { state } = useGlobal();
  const [toggle, setToggle] = useState(false);
  const [filtered_state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: "LOADING_PRODUCTS", payload: state.products });
  }, [state.products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [filtered_state.filters, filtered_state.sort]);

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };
  const updateFilters = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  return (
    <FilterContext.Provider
      value={{
        ...filtered_state,
        dispatch,
        updateSort,
        clearFilters,
        updateFilters,
        toggle,
        setToggle,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
