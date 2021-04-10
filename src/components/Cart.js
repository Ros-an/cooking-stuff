import React from "react";
import "./cart.css";
import { useGlobal } from "../globalContext";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

export const Cart = () => {
  const { state, dispatch } = useGlobal();
  return (
    <>
      <div className="cart-block">
        <CartItem state={state} dispatch={dispatch} />
      </div>
      <Total cart={state.cart} dispatch={dispatch} />
    </>
  );
};
