import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_muzhy3RQFlvmPvetAI01ZipB00xBJFtor8";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now 💳"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
