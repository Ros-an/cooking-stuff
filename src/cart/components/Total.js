import React from "react";
import "./total.css";
import { useGlobal } from "../../context/globalContext";
export const Total = () => {
  const { state } = useGlobal();
  return (
    <div className="price-detail">
      <div className="price-detail--heading">Price Details</div>
      <div className="price-detail__calculation">
        <div className="price">
          <p>Price{`(${state.cart.length} item)`}</p>
          <p>Rs. 00</p>
        </div>
        <div className="delivery-charge">
          <p>Delivery Charge</p>
          <p>Rs. 0</p>
        </div>
      </div>
      <div className="price-detail__amount">
        <p>Total Amount:</p>
        <p>Rs 000</p>
      </div>
      <button className="price-detail--checkout pointer-cursor">
        CHECKOUT
      </button>
    </div>
  );
};
