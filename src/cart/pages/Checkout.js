import React from "react";
import { useCartContext } from "../../context/cartContext";
//import "./Checkout.css";
function Checkout() {
  const { cart } = useCartContext();
  console.log(cart);
  function getTotalAmt(total, prod) {
    return total + prod.product.price * prod.quantity;
  }
  return (
    <section className="checkout-page">
      <div className="shipping-address">
        <h3 className="heading">Delivery Address</h3>
        <div>
          <textarea
            name="address"
            cols="40"
            rows="7"
            placeholder="enter your address"
          ></textarea>
        </div>
      </div>
      <div className="order-summary">
        <h3 className="heading">Order Summary</h3>
        <div className="order-item">
          {cart?.map((prod) => {
            const { product, quantity, _id } = prod;
            return (
              <div key={_id}>
                <h3>{product.title}</h3>
                <p>
                  {`(${quantity} x ${product.price} = Rs. ${
                    quantity * product.price
                  })`}
                </p>
              </div>
            );
          })}
        </div>
        <div className="total">
          <h3>Total Amount</h3>
          <p>{`Rs ${cart?.reduce(getTotalAmt, 0)}`}</p>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
