import React from "react";
import { amber_fort } from "../assets/index.js";

function Discover() {
  return (
    <div className="w-full bg-black mt-[30px] px-[10px] py-[40px] lg:px-[0px]">
      <div className=" lg:flex lg:justify-between lg:px-[72px]">
        <div className="lg:mr-[12px]">
          <h3 className="text-[20px] font-explore text-orange-400 mb-[12px]">
            EXPERIENCES
          </h3>
          <h2 className=" text-[30px] md:text-[40px] font-sans text-white mb-[24px]">
            The Amber Fort Experience
          </h2>
          <p className="text-[15px] md:text-[20px] font-sans text-white mb-[16px]">
            Amber Fort holds the history of a citadel, pulsating with a
            legendary past of 600 years and 28 kings of the Kachwaha dynasty.
            The show ends the silence that fell upon Amber after the capital
            moved to Jaipur and it attempts to revive its pride.
          </p>
          <button className="  bg-white text-[16px] px-[24px] py-[12px] rounded-full font-semibold hover:bg-purple-100">
            More
          </button>
        </div>
        <div className="flex items-center">
            <div className="flex justify-center mt-[10px] lg:justify-end">
          <img
            src={amber_fort}
            alt="Amber Fort"
            className="rounded-full w-[90%] md:w-[60%] lg:w-[70%]"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
