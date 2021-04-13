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
      const newCart = cart.filter((item) => item.id !== payLoad);
      const newProducts1 = products.map((item) => {
        return item.id === payLoad ? { ...item, isAddedToCart: false } : item;
      });
      return {
        ...state,
        products: newProducts1,
        cart: newCart,
        showModal: true,
        modalContent: "removed from cart",
      };
    case "COUNT_UP":
      const newCart1 = cart.map((item) =>
        item.id === payLoad ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        cart: newCart1,
      };
    case "COUNT_DOWN":
      if (payLoad.quantity === 1) {
        return reducer(state, {
          type: "REMOVE_FROM_CART",
          payLoad: payLoad.id,
        });
      }
      const newCart2 = state.cart.map((item) =>
        item.id === payLoad.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        cart: newCart2,
      };
    case "ADD_TO_WISHL":
      if (wishList.some((e) => e.id === payLoad.id)) {
        const newWishL = wishList.filter((item) => item.id !== payLoad.id);
        return {
          ...state,
          wishList: newWishL,
          showModal: true,
          modalContent: "removed from wishlist!!",
        };
      }
      return {
        ...state,
        wishList: [...wishList, payLoad],
        showModal: true,
        modalContent: "added to wishlist!!",
      };
    case "REMOVE_FROM_WISHLIST":
      const newWishL1 = wishList.filter((item) => item.id !== payLoad);
      return {
        ...state,
        wishList: newWishL1,
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};
