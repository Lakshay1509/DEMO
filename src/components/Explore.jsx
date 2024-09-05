import React from "react";
import { places } from "../assets/Discover.js";
import { right_arrow } from "../assets/index.js";

function Explore() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center font-explore text-2xl font-bold md:text-5xl">
          <span className="mr-[13px]">----</span>Discover
          <span className="ml-[13px]">----</span>
        </div>
        <div className="flex justify-center mt-[10px] px-[5px] md:px-[0px]">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 lg:grid-rows-2 lg:grid-cols-3  md:gap-4 ">
            {places.map((place) => (
              <div
                key={place.id}
                id={`place-${place.id}`}
                className="w-[120px] md:w-[278px]"
              >
                <button className="ease-in-out duration-300 hover:scale-105">
                  <img
                    src={place.image}
                    className="rounded-xl"
                    alt={place.name}
                  />
                </button>
                <div className="text-center font-bold mt-1 md:text-xl">
                  {place.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className=" flex justify-center bg-black text-orange-400 font-bold rounded-2xl px-6 py-4 mt-2 md:mt-4 hover:bg-slate-800">
            Explore More
            <span>
              <img src={right_arrow} className="size-6 ml-[6px]" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Explore;
