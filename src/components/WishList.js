import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../globalContext";
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
          to="/"
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
      <p>No. of item: {state.wishList.length}</p>
      <div className="wishlist__card-section">
        {state.wishList.map((item) => {
          return (
            <div class="card" key={item.id}>
              <div class="card-image">
                <img src={item.image} />
                <span
                  class="card-badge--remove pointer-cursor"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payLoad: item.id })
                  }
                >
                  <i class="far fa-times-circle"></i>
                </span>
              </div>
              <div class="card-content">
                <p>Rating</p>
                <h4>Product name</h4>
                <p>{item.price}</p>
                <p>little</p>
                <div className="wishlist-btn">
                  <button className="add-cart">ADD TO CART</button>
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