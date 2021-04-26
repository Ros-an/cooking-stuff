import React, { createContext, useReducer, useContext, useEffect } from "react";
import { useGlobal } from "./globalContext";
import reducer from "./filter-reducer";

export const FilterContext = createContext();

const defaultState = {
  filtered_products: [],
  all_products: [],
  sort: "low-to-high",
};
export const FilterProvider = ({ children }) => {
  const { state } = useGlobal();
  const [filtered_state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: "LOADING_PRODUCTS", payLoad: state.products });
  }, [state.products]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.products, filtered_state.sort]);

  const updateSort = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_SORT", payLoad: value });
  };
  return (
    <FilterContext.Provider value={{ ...filtered_state, dispatch, updateSort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
