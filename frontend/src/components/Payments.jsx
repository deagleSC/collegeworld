import React from 'react';
import './Form.css';

import GooglePayButton from '@google-pay/button-react';

const Payments = ({handleSubmit}) => {
  return (
    <div className='form'>

        <div className='heading'>Complete Payment</div><br />

        <GooglePayButton
        environment="TEST"
        paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
        {
        type: 'CARD',
        parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
            },
        },
        },
        ],
        merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
        },
        transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '100.00',
        currencyCode: 'USD',
        countryCode: 'US',
        },
        }}
        onLoadPaymentData={paymentRequest => {
        console.log('load payment data', paymentRequest);
        // handleSubmit({paymentRequest})
        }}
        />

        <button className='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Payments