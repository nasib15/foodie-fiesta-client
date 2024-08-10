import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Helmet } from "react-helmet";
import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51PM7OiJ00ELy1UJLn5VOQdwYBmYERPDjjiMhTUkPh2XF05e6lfbwfwj84r2PomVrgOpI36NX9I5OPa6Det3kGSB000cfYwB2cI"
  );
  return (
    <>
      <Helmet>
        <title>FFiesta | Payment</title>
      </Helmet>
      <div className="container px-4 pt-10">
        <h2 className="text-2xl text-center font-bold text-gray-800 ">
          Payment Gateway
        </h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
