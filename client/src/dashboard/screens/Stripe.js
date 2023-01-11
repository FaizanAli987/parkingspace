// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import CheckoutForm from '../components/main/CheckoutForm';
// import { LocalUrl, LocalUrl } from '../../helper';
// import { useEffect, useState } from 'react';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const Stripe=()=> {


//   const [clientSecret,setSecret]=useState('')
//   const getClientSecret=async()=>{
//     fetch(`${LocalUrl}/getClientSecret`,{
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount:100})
//     }).then((r)=>r.json()).then((r)=>{
//       console.log(r?.clientSecret)
//       setSecret(r?.clientSecret)
//     })
//   }
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: clientSecret,
//   };
//   useEffect(()=>{
//     getClientSecret()
//   },[])

//   return (
//     <>
//     {clientSecret && (
//       <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//     )}
//     </>
//   );
// };

// export default Stripe

import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { LocalUrl } from '../../helper';

import { loadStripe } from "@stripe/stripe-js";
import "./Stripe.css";
const Stripe = () => {
  const stripe = loadStripe(
    "pk_test_51JQPv7GiFda3a3kYUMCCfO0s8ObVwh0j5ITGiGncWIrPfLRIsny3x5TYyKpz2PlNMcoIBCE3awKBqp7KBsoDwhfD002Nrcjrtz"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
    const [clientSecret,setSecret]=useState('')
  const getClientSecret=async()=>{
    const price=localStorage.getItem('bookingprice')
    fetch(`${LocalUrl}/getClientSecret`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount:parseInt(price)})
    }).then((r)=>r.json()).then((r)=>{
      console.log(r?.clientSecret)
      setSecret(r?.clientSecret)
    })
  }

  useEffect(()=>{
    getClientSecret()
  },[])
  const payMoney = async (e) => {
    e.preventDefault();
    var fname=localStorage.getItem('firstName')
    var lname=localStorage.getItem('lastName')
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    // const clientSecret = getClientSecret();
    console.log(clientSecret)
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: fname+" "+lname,
        },
      },

    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Stripe