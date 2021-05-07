import React from "react";
import { NavLink } from "react-router-dom";
import "./cart.css";
import { useGlobal } from "../context/globalContext";
import { CartItem } from "../components/CartItem";
import { Total } from "../components/Total";

export const Cart = () => {
  const { state, dispatch } = useGlobal();
  if (state.cart.length === 0) {
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
            Fill it
          </button>
        </NavLink>
      </div>
    );
  }
  return (
    <>
      <div className="cart-headsection">
        <p className="section-heading">CART ITEM</p>
        <p className="cart-count">No. of item: {state.cart.length}</p>
      </div>
      <div className="cart-bodysection">
        <div className="cart-block">
          <CartItem state={state} dispatch={dispatch} />
        </div>
        <Total />
      </div>
    </>
  );
};
