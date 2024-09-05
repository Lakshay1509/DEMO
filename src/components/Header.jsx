import React from "react";

import { user, cart, Logo } from "../assets/index.js";

function Header() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center w-full px-[5px] md:px-[10px] lg:px-[60px] py-[14px] bg-black">
          <button>
            <div>
              <img src={Logo} width={120} alt="logo" />
            </div>
          </button>
          <div className="flex justify-evenly">
            <button className="text-orange-400 px-4 text-lg rounded-full hover:bg-slate-800 hidden md:block">
              Destinations
            </button>
            <button className="text-orange-400 px-4 text-lg rounded-full hover:bg-slate-800 hidden md:block ">
              Experiences
            </button>
            <button className="text-orange-400 px-4 text-lg rounded-full hover:bg-slate-800 hidden md:block">
              Chat with Us
            </button>
            <button className=" md:mx-2 rounded-full p-3  hover:bg-slate-800 ">
              <img className="size-8" src={user} />
            </button>
            <button className="md:mx-2 rounded-full p-3 hover:bg-slate-800 ">
              <img className="size-7" src={cart} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
