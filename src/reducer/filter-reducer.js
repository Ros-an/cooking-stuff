function reducer(state, action) {
  const { type, payload } = action;

  if (type === "LOADING_PRODUCTS") {
    return {
      ...state,
      all_products: [...payload],
      filtered_products: [...payload],
    };
  }
  if (type === "UPDATE_SORT") {
    return {
      ...state,
      sort: payload,
    };
  }
  if (type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "low-to-high") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "high-to-low") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
  if (type === "UPDATE_FILTERS") {
    const { name, value } = payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, brand, price } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text.toLowerCase());
      });
    }
    if (brand !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category.toLowerCase() === brand;
      });
    }
    tempProducts = tempProducts.filter((product) => product.price <= price);
    return { ...state, filtered_products: tempProducts };
  }
  if (type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        brand: "all",
        min_price: 0,
        max_price: 249,
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${type}" - action type`);
}

export default reducer;
