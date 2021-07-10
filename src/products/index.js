import axios from "axios";

export const addToWishList = async (
  productId,
  userData,
  setLoader,
  setUserData
) => {
  try {
    setLoader(true);
    const res = await axios.post(
      `${process.env.REACT_APP_API}/wishlist/${productId}`,
      { email: userData.email }
    );
    setUserData((prevValue) => ({
      ...prevValue,
      wishlist: res.data.wishlist,
    }));
  } catch (err) {
    console.log(err.response);
  } finally {
    setLoader(false);
  }
};
export const addToCart = async (userId, productId, setLoaderOne, setCart) => {
  try {
    setLoaderOne(true);
    const res = await axios.post(
      `${process.env.REACT_APP_API}/cart/addToCart`,
      {
        userId,
        product: {
          _id: productId,
          product: productId,
          quantity: 1,
        },
      }
    );
    setCart(res.data.cart);
  } catch (err) {
    console.log(err.response);
  } finally {
    setLoaderOne(false);
  }
};
export const toggleWishListItem = async (
  productId,
  userData,
  setLoader,
  setUserData
) => {
  try {
    setLoader(true);
    const res = await axios.delete(
      `${process.env.REACT_APP_API}/wishlist/${userData._id}/${productId}`
    );
    setUserData((prevValue) => ({
      ...prevValue,
      wishlist: res.data.wishlist,
    }));
  } catch (err) {
    console.log(err.response);
  } finally {
    setLoader(false);
  }
};

export const removeFromWishList = async (
  productId,
  userData,
  setLoader,
  setUserData
) => {
  try {
    setLoader(true);
    const res = await axios.delete(
      `${process.env.REACT_APP_API}/wishlist/${userData._id}/${productId}`
    );
    setUserData((prevValue) => ({
      ...prevValue,
      wishlist: res.data.wishlist,
    }));
  } catch (err) {
    console.log(err.response);
  }
};
export const removeFromCart = async (
  productId,
  userData,
  setLoaderOne,
  setCart
) => {
  try {
    setLoaderOne(true);
    const res = await axios.delete(
      `${process.env.REACT_APP_API}/cart/cartItem/${userData._id}/${productId}`
    );
    setCart(res.data.cart);
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
    setLoaderOne(false);
  }
};
