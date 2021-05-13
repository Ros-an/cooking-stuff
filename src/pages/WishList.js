import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../context/globalContext";
import Rating from "../components/Rating";

import "./wishlist.css";
function WishList() {
  const { state, dispatch } = useGlobal();
  if (state.wishList.length === 0) {
    return (
      <div
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Wishlist is empty</h2>

        <NavLink
          to="/products"
          activeStyle={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <button
            style={{ padding: "0.25rem 1rem", fontSize: "1.15rem" }}
            className="btn-danger"
          >
            make a wish
          </button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="wishlist">
      <p className="section-heading">WishList</p>
      <p className="cart-count">No. of item: {state.wishList.length}</p>
      <div className="wishlist__card-section">
        {state.wishList.map((item) => {
          const { inStock } = item;
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt="img_" />
                <span
                  className="card-badge--remove pointer-cursor"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payLoad: item.id })
                  }
                >
                  <i className="far fa-times-circle"></i>
                </span>
              </div>
              <div
                className="out-of-stock"
                style={{ visibility: inStock ? "hidden" : "visible" }}
              >
                <div className="out-of-stock--tag">OUT OF STOCK</div>
              </div>
              <div className="card-content">
                <h4>Product name</h4>
                <Rating rating={item.rating} />
                <p>{item.price}</p>
                <p>little</p>
                <div className="wishlist-btn">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART_FROM_WISHLIST",
                        payLoad: item,
                      })
                    }
                    className="add-cart"
                  >
                    {" "}
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
