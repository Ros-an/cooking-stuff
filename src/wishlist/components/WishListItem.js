import React, { useState } from "react";
import { MiniLoader } from "../../shared/Loader";
import { useAuthContext } from "../../context/authContext";
import { removeFromWishList, addToCart } from "../../products/index";
import { useCartContext } from "../../context/cartContext";
import { present } from "../../products/pages/SingleProduct";
import Rating from "../../products/components/Rating";

function WishListItem({ item }) {
  const { userData, setUserData } = useAuthContext();
  const { cart, setCart } = useCartContext();
  const [loader, setLoader] = useState(false);
  const [loaderOne, setLoaderOne] = useState(false);
  const removeItem = () => {
    removeFromWishList(item._id, userData, setLoader, setUserData);
  };
  const addItemToCart = () => {
    addToCart(userData._id, item._id, setLoaderOne, setCart);
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.imageUrl} alt="img_" />
        <span
          className="card-badge--remove pointer-cursor"
          onClick={() => removeItem()}
        >
          {loader ? (
            <MiniLoader size={{ height: "1em", width: "1em" }} />
          ) : (
            <i className="far fa-times-circle"></i>
          )}
        </span>
      </div>
      <div
        className="out-of-stock"
        style={{ visibility: item.inStock ? "hidden" : "visible" }}
      >
        <div className="out-of-stock--tag">OUT OF STOCK</div>
      </div>
      <div className="card-content">
        <h4>{item.title}</h4>
        <Rating rating={item.rating} />
        <p>Rs.{item.price}</p>
        <div className="wishlist-btn">
          <button
            disabled={!item.inStock}
            style={{ cursor: !item.inStock && "no-drop" }}
            onClick={() => addItemToCart()}
            className="add-cart pointer-cursor"
          >
            {" "}
            {loaderOne ? (
              <MiniLoader size={{ height: "1em", width: "1em" }} />
            ) : present(cart, item._id) ? (
              "ADDED"
            ) : (
              "ADD TO CART"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
