import React from "react";
import "./cart.css";
import { useGlobal } from "../globalContext";

export const Cart = () => {
  const { state, dispatch } = useGlobal();
  return (
    <div className="cart-block">
      {state.cart.map((item) => {
        const { id, image, quantity } = item;
        return (
          <div class="horizontal-card-row" key={id}>
            <div className="image-div">
              <img src={image} alt="image" />
            </div>
            <div class="product-detail">
              <h3>Product name</h3>
              <h3>Price</h3>
              <div class="product-quantity">
                <button class="minus">
                  <i class="fas fa-angle-double-left"></i>
                </button>
                <button class="quantity">{quantity}</button>
                <button class="plus">
                  <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <button
                class="remove-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payLoad: item })
                }
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
