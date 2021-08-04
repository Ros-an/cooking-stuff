import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useCartContext } from "../../context/cartContext";
import "./Checkout.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
function Checkout() {
  const { cart } = useCartContext();
  const amount = cart?.reduce((total, prod) => {
    return total + prod.product.price * prod.quantity;
  },0);
  return (
    <div className="checkout">
      <h2 className="section-heading" style={{textDecoration: "none"}}>Complete your purchase</h2>
      <Elements stripe={promise}>
      <div className="payment-component">
          <CheckoutForm amount={amount} cart={cart}/>
        </div>
      </Elements>
    </div>
  )
}

export default Checkout;