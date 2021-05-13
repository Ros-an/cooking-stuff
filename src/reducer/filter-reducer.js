function reducer(state, action) {
  const { type, payLoad } = action;
  switch (type) {
    case "LOADING_PRODUCTS":
      return {
        ...state,
        all_products: [...payLoad],
        filtered_products: [...payLoad],
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sort: payLoad,
      };
    case "SORT_PRODUCTS":
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
    default:
      throw new Error(`No Matching "${type}" - action type`);
  }
}

export default reducer;
