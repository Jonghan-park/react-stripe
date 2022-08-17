import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefualt();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  if(!error){
    try {
     const {id } = paymentMethod
     const response = await axios.post('http://localhost:5000/payment',{
       amount: 1000,
       id
     }) 
    } catch (error) {
      
    }
  }

  return <div>PaymentForm</div>;
};

export default PaymentForm;
