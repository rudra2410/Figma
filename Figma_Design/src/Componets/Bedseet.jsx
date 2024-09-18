import React from "react";
import img from "../Assets/Rectangle 13.svg";

const Bedseet = () => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-100 h-screen lg:h-auto">
      <div className="relative w-full lg:w-1/2">
        <img className="w-full h-full object-cover" src={img} alt="Bedsheets" />
      </div>
      
      <div className="absolute lg:relative lg:w-1/2 flex items-center justify-center bg-white/80 lg:bg-white p-8 lg:p-12">
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-3xl font-bold">BEDSHEET SETS</h1>
          <div className="text-2xl text-red-500">
            $50.00 <span className="line-through text-gray-500">$220.00</span>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bedseet;
