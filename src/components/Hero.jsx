import React from "react";
import { front_page} from "../assets/index.js";
import { AspectRatio } from "react-aspect-ratio";

function Hero() {
  return (
    <>
      <div className="w-full mb-[40px]">
        <div className="flex justify-center items-center w-full px-[5px] md:px-[10px] lg:px-[60px]">
          <div className="pt-10 relative ">
            <div>
              <img src={front_page} width={960} className="rounded-3xl" />
            </div>

            <div className="w-full flex-row justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="flex justify-center text-white font-bold text-[20px] md:text-[38px] ">
                Experience India, One Ticket Away
              </div>

              <div className=" flex justify-center text-white font-semibold text-center text-[10px] mt-[20px] md:text-[18px] ">
                Book your tickets for more than 500+ Museums, Monuments &
                Archaeological Sites in India.
              </div>
              <div className="w-full flex justify-center mt-[20px]">
                <button className="bg-white text-black px-5 py-3 rounded-full font-semibold text-[10px] md:text-[20px] hover:bg-purple-100">
                  Buy your tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
