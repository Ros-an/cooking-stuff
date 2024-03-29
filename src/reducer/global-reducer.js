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
    case "ADD_TO_WISHL_PRODUCTS":
      if (wishList.some((e) => e.id === payLoad.id)) {
        const newWishL = wishList.filter((item) => item.id !== payLoad.id);
        return {
          ...state,
          wishList: newWishL,
        };
      }
      return {
        ...state,
        wishList: [...wishList, payLoad],
      };
    case "REMOVE_FROM_WISHLIST":
      const newWishL1 = wishList.filter((item) => item.id !== payLoad);
      return {
        ...state,
        wishList: newWishL1,
      };
    case "ADD_TO_WISHLIST":
      if (wishList.some((e) => e.id === payLoad.id)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        wishList: [...wishList, payLoad],
      };
    case "ADD_TO_CART_FROM_WISHLIST":
      if (cart.some((e) => e.id === payLoad.id)) {
        return {
          ...state,
          showModal: true,
          modalContent: "already in cart!",
        };
      }
      const newProducts2 = products.map((product) => {
        return product.id === payLoad.id
          ? { ...product, isAddedToCart: true }
          : product;
      });
      return {
        ...state,
        products: newProducts2,
        cart: cart.concat(payLoad),
      };
    default:
      return { ...state };
  }
};
