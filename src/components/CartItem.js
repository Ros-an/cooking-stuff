import React from "react";
import "./css/cart.css";

export const CartItem = ({ state, dispatch }) => {
  return (
    <>
      {state.cart.map((item) => {
        const { id, image, quantity } = item;
        return (
          <div class="horizontal-card-row" key={id}>
            <div className="horizontal-card__image">
              <img src={image} alt="image" />
            </div>
            <div class="product-detail">
              <div class="product-quantity">
                <p class="product-name">Product name</p>
                <p class="product-price">Price</p>
                <button
                  className="minus"
                  onClick={() =>
                    dispatch({ type: "COUNT_DOWN", payLoad: item })
                  }
                >
                  <i class="fas fa-angle-double-left"></i>
                </button>
                <button class="quantity">{quantity}</button>
                <button
                  className="plus"
                  onClick={() =>
                    dispatch({ type: "COUNT_UP", payLoad: item.id })
                  }
                >
                  <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div className="horizontal-card__button">
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_WISHLIST_FROM_CART",
                      payLoad: item,
                    })
                  }
                  class="remove-btn"
                >
                  WISHLIST
                </button>
                <button
                  class="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payLoad: item.id })
                  }
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
