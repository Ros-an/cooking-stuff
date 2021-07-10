import React from "react";
import "./total.css";
import { useCartContext } from "../../context/cartContext";
export const Total = () => {
  const { cart } = useCartContext();
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
          <p>Rs. 0</p>
        </div>
      </div>
      <div className="price-detail__amount">
        <p>Total Amount:</p>
        <p>Rs {cart?.reduce(getTotalAmt, 0)}</p>
      </div>
    </div>
  );
};
