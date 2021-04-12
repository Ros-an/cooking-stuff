import React from "react";

export const CartItem = ({ state, dispatch }) => {
  return (
    <>
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
                <button
                  class="minus"
                  onClick={() =>
                    dispatch({ type: "COUNT_DOWN", payLoad: item })
                  }
                >
                  <i class="fas fa-angle-double-left"></i>
                </button>
                <button class="quantity">{quantity}</button>
                <button
                  class="plus"
                  onClick={() =>
                    dispatch({ type: "COUNT_UP", payLoad: item.id })
                  }
                >
                  <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
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
        );
      })}
    </>
  );
};
