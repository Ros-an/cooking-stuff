import React from "react";

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
    default:
      throw new Error(`No Matching "${type}" - action type`);
  }
}

export default reducer;
