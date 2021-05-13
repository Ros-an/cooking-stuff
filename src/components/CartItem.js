import React from "react";
import "../pages/cart.css";

export const CartItem = ({ state, dispatch }) => {
  return (
    <>
      {state.cart.map((item) => {
        const { id, image, quantity } = item;
        return (
          <div className="horizontal-card-row" key={id}>
            <div className="horizontal-card__image">
              <img src={image} alt="img_" />
            </div>
            <div className="product-detail">
              <div className="product-quantity">
                <p className="product-name">Product name</p>
                <p className="product-price">Price</p>
                <button
                  className="minus"
                  onClick={() =>
                    dispatch({ type: "COUNT_DOWN", payLoad: item })
                  }
                >
                  <i className="fas fa-angle-double-left"></i>
                </button>
                <button className="quantity">{quantity}</button>
                <button
                  className="plus"
                  onClick={() =>
                    dispatch({ type: "COUNT_UP", payLoad: item.id })
                  }
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div className="horizontal-card__button">
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_WISHLIST",
                      payLoad: item,
                    })
                  }
                  className="remove-btn wish-btn"
                >
                  WISHLIST
                </button>
                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payLoad: item.id })
                  }
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
