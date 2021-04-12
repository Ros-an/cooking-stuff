import React from "react";
import "./cart.css";
import { useGlobal } from "../globalContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { state, dispatch } = useGlobal();
  return (
    <>
      <div className="cart-block">
        <CartItem state={state} dispatch={dispatch} />
      </div>
    </>
  );
};
