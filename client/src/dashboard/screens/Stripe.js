// pk_live_51JQPv7GiFda3a3kYBJt1X352NF8wLswH8mmvaKJPLS5hhZNdHdys9rBczr3LO3CpNfrXnkhHzdw3DnQ7c6TlIYJE000XoZeGPW

import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" >
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_live_51JQPv7GiFda3a3kYBJt1X352NF8wLswH8mmvaKJPLS5hhZNdHdys9rBczr3LO3CpNfrXnkhHzdw3DnQ7c6TlIYJE000XoZeGPW');

const Stripe = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Stripe