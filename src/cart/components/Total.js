import React from "react";
import "./total.css";
import { useCartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
export const Total = () => {
  const { cart } = useCartContext();
  let navigate = useNavigate();
  function getTotalAmt(total, prod) {
    return total + prod.product.price * prod.quantity;
  }
  return (
    <div className="price-detail">
      <div className="price-detail--heading">Price Details</div>
      <div className="price-detail__calculation">
        <div className="price">
          <p>Price{`(${cart?.length} item)`}</p>
          <p>Rs. {cart?.reduce(getTotalAmt, 0)}</p>
        </div>
        <div className="delivery-charge">
          <p>Delivery Charge</p>
          <p>Free</p>
        </div>
      </div>
      <div className="price-detail__amount">
        <p>Total Amount:</p>
        <p>Rs {cart?.reduce(getTotalAmt, 0)}</p>
      </div>
      <button className="checkout" onClick={() => navigate(`/checkout`)}>
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};
