import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Success from './Success';

function Paypal({ amount }) {
    const paypal = useRef();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [successId, setSuccessId] = useState('');

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Your description",
                            amount: {
                                currency_code: "USD",
                                value: amount,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log("Success" + order);
                setPaymentSuccess(true);
                setSuccessId(nanoid());
            },
            onError: (err) => {
                console.log(err);
            },
        }).render(paypal.current);
    }, [amount]);

    return (
        <div>
            {paymentSuccess ? <Success id={successId} /> : <div ref={paypal}></div>}
        </div>
    );
}

export default Paypal;