import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({amount, cart}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  let navigate = useNavigate();
  let intervalId;
  

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    async function createPayment (amount){
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_API}/create-payment-intent`,{
                amount
            });
            setClientSecret(data.clientSecret);
        }catch(err){
            console.log(err);
        }
    }
    createPayment(amount);
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      startTimer();
    }
  };

  const startTimer = () => {
      let timer = 0;
      intervalId = setInterval(()=>{
          if(timer === 5){
              redirectToHome(intervalId);
          }else{
              timer++;
          }
      },1000)
  }
  const redirectToHome = (intervalId) => {
      clearInterval(intervalId);
      navigate(`/`,{replace: true});
  }
  return (
      <>
    {!succeeded ?
    <div className="payment-detail">
        <p>No. of items: {cart?.length}</p>
        <p>Amount to Pay: Rs.{amount}</p>
    </div> :
    <p className="result-message">
         Payment successful!!
    </p>}
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    </form>
    {succeeded && <p>Will automatically redirect to home page in 5 seconds...</p>}
    </>
  );
}



