import { useReducer } from "react";

export const reducer = (state, action) => {
  const { type, payLoad } = action;
  const { cart, wishList, products } = state;
  switch (type) {
    case "ADD_TO_CART":
      const newProducts = products.map((item) => {
        return item.id === payLoad.id ? { ...item, isAddedToCart: true } : item;
      });
      return {
        ...state,
        products: newProducts,
        cart: cart.concat(payLoad),
        showModal: true,
        modalContent: "added to cart",
      };
    case "REMOVE_FROM_CART":
      const newCart = cart.filter((item) => item.id !== payLoad.id);
      const newProducts1 = products.map((item) => {
        return item.id === payLoad.id
          ? { ...item, isAddedToCart: false }
          : item;
      });
      return {
        ...state,
        products: newProducts1,
        cart: newCart,
        showModal: true,
        modalContent: "removed from cart",
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};
