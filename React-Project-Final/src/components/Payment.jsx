import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  const stripeOptions = {
    key: 'gagini',
    amount: 1000, // Replace with actual amount
    currency: 'rupees', // Adjust as needed
  };

  return (
    <div className="payment-page">
      {paymentSuccess ? (
        <div className="payment-success-message">Payment successful!</div>
      ) : (
        <StripeCheckout
          options={stripeOptions}
          token={(token) => {
            handlePaymentSuccess();
          }}
          stripeAccount={'YOUR_STRIPE_ACCOUNT_ID'}
          error={handlePaymentError}
        />
      )}
    </div>
  );
};

export default PaymentPage;
