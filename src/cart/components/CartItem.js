import React, { useState } from "react";
import { addToWishList, removeFromCart } from "../../products/index";
import { useAuthContext } from "../../context/authContext";
import { useCartContext } from "../../context/cartContext";
import { present } from "../../products/pages/SingleProduct";
import { alterQuantity } from "../index";
import { MiniLoader } from "../../shared/Loader";

import "../pages/cart.css";

export const CartItem = ({ product, quantity }) => {
  const { setCart } = useCartContext();
  const { userData, setUserData } = useAuthContext();
  const [loader, setLoader] = useState(false);
  const [loaderOne, setLoaderOne] = useState(false);
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [loaderThree, setLoaderThree] = useState(false);
  function addItemToWishlist() {
    addToWishList(product._id, userData, setLoader, setUserData);
  }
  const removeItem = () => {
    removeFromCart(product._id, userData, setLoaderOne, setCart);
  };
  function changeQuantity(productId, type) {
    if (type === "dec") {
      alterQuantity(userData._id, productId, type, setCart, setLoaderTwo);
    } else {
      alterQuantity(userData._id, productId, type, setCart, setLoaderThree);
    }
  }
  return (
    <div className="horizontal-card-row">
      <div className="horizontal-card__image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-detail">
        <div className="product-quantity">
          <h4 className="product-name">{product.title}</h4>
          <p className="product-price">Rs.{product.price}</p>
          <button
            className="minus pointer-cursor"
            style={{ cursor: quantity === 1 && "no-drop" }}
            disabled={quantity === 1 && true}
            onClick={() => changeQuantity(product._id, "dec")}
          >
            {loaderTwo ? (
              <MiniLoader
                size={{ height: "1em", width: "1em" }}
                spinner={true}
              />
            ) : (
              <i className="fas fa-angle-double-left"></i>
            )}
          </button>
          <button className="quantity">{quantity}</button>
          <button
            className="plus pointer-cursor"
            onClick={() => changeQuantity(product._id, "inc")}
          >
            {loaderThree ? (
              <MiniLoader
                spinner={true}
                size={{ height: "1em", width: "1em" }}
              />
            ) : (
              <i className="fas fa-angle-double-right"></i>
            )}
          </button>
        </div>
        <div className="horizontal-card__button">
          <button
            onClick={() => addItemToWishlist()}
            className="remove-btn wish-btn pointer-cursor"
          >
            {loader ? (
              <MiniLoader size={{ height: "1em", width: "1em" }} />
            ) : present(userData.wishlist, product._id) ? (
              "ADDED"
            ) : (
              "WISHLIST"
            )}
          </button>
          <button
            className="remove-btn pointer-cursor"
            onClick={() => removeItem()}
          >
            {loaderOne ? (
              <MiniLoader
                spinner={true}
                size={{ height: "1em", width: "1em" }}
              />
            ) : (
              <i className="fas fa-trash-alt"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
