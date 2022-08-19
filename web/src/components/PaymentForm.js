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
     if(response.data.success){
       console.log("Successful payment");
       setSuccess(true)
     }
    } catch (error) {
      console.log("Error", error)
    }
  }else{
    console.log(error.message)
  }

  return <div>
    {!success ? (
    <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
    </form>  
     ) : () }
  </div>;
};

export default PaymentForm;
