import axios from "axios";

export const alterQuantity = async (
  userId,
  productId,
  type,
  setCart,
  setLoader
) => {
  try {
    setLoader(true);
    const res = await axios.post(
      `${process.env.REACT_APP_API}/cart/cartItem/${productId}`,
      {
        userId,
        type,
      }
    );
    setCart(res.data.cart);
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  } finally {
    setLoader(false);
  }
};
