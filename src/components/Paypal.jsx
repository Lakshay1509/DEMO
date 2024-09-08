import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Success from './Success';

function Paypal({ customer_id, amount, place_id, people }) {
    const paypal = useRef();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [successId, setSuccessId] = useState('');

    const Place = {
        1: "Taj Mahal",
        2: "Hawa Mahal",
        3: "Gateway of India",
        4: "Indian Museum",
        5: "National Art Gallery",
        6: "Agra Fort"
    };

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
                const newSuccessId = nanoid(); // Generate new success ID
                setSuccessId(newSuccessId);    // Set the new success ID in state

                // Use the newSuccessId directly in the fetch body
                fetch('https://sheetdb.io/api/v1/6qx42guc7mk9c', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: [
                            {
                                'Product_Id': newSuccessId,  // Use newSuccessId here
                                'Customer_Id': customer_id,
                                'Amount': amount,
                                'Place': Place[place_id],
                                'People': people,
                            }
                        ]
                    })
                })
                .then((response) => response.json())
                .then((data) => console.log(data));
            },
            onError: (err) => {
                console.log(err);
            },
        }).render(paypal.current);
    }, [amount, customer_id, place_id, people]);

    return (
        <div>
            {paymentSuccess ? <Success id={successId} /> : <div ref={paypal}></div>}
        </div>
    );
}

export default Paypal;
