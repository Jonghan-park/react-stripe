import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LLiHZGOncvPLaJPOqW0FSsz656L5ncrl6QiA69sMyTeFaqE0yLfGqJVJjHFFQLktXPhlf02kgS6SBqInHZkb33Y00lqmeu7tD";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
