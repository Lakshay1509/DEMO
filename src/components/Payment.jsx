import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Paypal from "./Paypal";

function Payment() {
  const { amount ,customer,id,people} = useParams();
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="w-full flex justify-center items-center mt-[50px]">

      {checkout ? (
        <Paypal amount = {amount} customer_id={customer} people={people} place_id={id}/>
      ) : (
        <div>
          <div className="w-full justify-center">Total Payable Amount : {amount} </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCheckout(true);
          }}
        >  
          Checkout
        </button>
        </div>
      )}
    </div>
  );
  
}

export default Payment;
