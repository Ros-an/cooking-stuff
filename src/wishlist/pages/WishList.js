import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import WishListItem from "../components/WishListItem";
import "./Wishlist.css";
function WishList() {
  const { userData } = useAuthContext();
  if (userData?.wishlist.length === 0) {
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
      <p className="cart-count">No. of item: {userData?.wishlist.length}</p>
      <div className="wishlist__card-section">
        {userData?.wishlist.map((item) => {
          return <WishListItem key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default WishList;
