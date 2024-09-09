import React, { useEffect } from 'react';
import { check } from "../assets/index.js";

const Success = ({ id,amount}) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`;

  useEffect(() => {
    const url = 'http://localhost:8000/api/v1/user/payment';
    const data = { amount: amount, bookingId: id ,qrcode:qrCodeUrl};

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <>
      <div className='w-full flex justify-center text-4xl mt-10 gap-2'>
        Success
        <div className='size-9'>
          <img src={check} className='mt-[6px]' alt="Success Check" />
        </div>
      </div>
      <div className='w-full flex justify-center mt-4'>Your Product Id is: {id}</div>
      <div className='w-full flex justify-center mt-4'>
        <img src={qrCodeUrl} alt="QR Code" />
      </div>
    </>
  );
};

export default Success;