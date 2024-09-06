import React from 'react';
import { check } from "../assets/index.js";

export default function Success({ id }) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`;

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
}