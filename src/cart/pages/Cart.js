import React from "react";
import Loader from "../../shared/Loader";
import { NavLink } from "react-router-dom";
import "./cart.css";
import { useCartContext } from "../../context/cartContext";
import { CartItem } from "../components/CartItem";
import { Total } from "../components/Total";

export const Cart = () => {
  const { cart } = useCartContext();
  if (cart?.length === 0) {
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
        <h2>Cart is empty</h2>

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
            Fill it
          </button>
        </NavLink>
      </div>
    );
  }

  if (!cart) {
    return <Loader />;
  }
  return (
    <>
      <div className="cart-headsection">
        <p className="section-heading">CART ITEM</p>
        <p className="cart-count">No. of item: {cart?.length}</p>
      </div>
      <div className="cart-bodysection">
        <div className="cart-block">
          {cart?.map((item) => {
            return <CartItem {...item} key={item._id} />;
          })}
        </div>
        <Total />
      </div>
    </>
  );
};
