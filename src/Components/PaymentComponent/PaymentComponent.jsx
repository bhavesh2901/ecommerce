import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const PaymentComponent = () => {
  const onLoadPaymentData = (paymentData) => {
    console.log('load payment data', paymentData);
    // Process payment data here (e.g., send it to your server)
  };

  return (
    <div>
      <h1>Pay with Google Pay</h1>
      <GooglePayButton
        environment="TEST" // Change to "PRODUCTION" when ready
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          merchantInfo: {
            merchantId: '1234567896533',
            merchantName: 'demo',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '10.00', // Replace with the total amount
            currencyCode: 'USD', // Replace with your currency
            countryCode: 'US', // Replace with your country code
          },
        }}
        onLoadPaymentData={onLoadPaymentData}
      />
    </div>
  );
};

export default PaymentComponent;
