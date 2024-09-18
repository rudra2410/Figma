import React from "react";
import img from "../Assets/Rectangle 6.svg";
import img1 from "../Assets/Rectangle 7.svg";
import img2 from "../Assets/Rectangle 8.svg";
import img3 from "../Assets/Rectangle 10.svg";
import img4 from "../Assets/Rectangle 11.svg";
import img5 from "../Assets/Rectangle 12.svg";


const Decor = () => {
  return (
    <div>
      <div class="container mx-auto px-4 py">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div class="bg-gray-200 col-span-1 flex items-center justify-center p-4">
    <div class="text-start ">
              <h2 class="text-[28px] text-[#fff] font-bold mb-2">DECOR</h2>
              <p class="mb-2 text-[#FFFFFF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="bg-transparent border border-white text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">
                VIEW ALL
              </button>
            </div>
          </div>

          <div class="bg-white p-4 flex flex-col items-start ">
            <img
              src={img}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover mb-2 rounded-md"
            />
            <h3 class="text-lg font-semibold">Linen Beach Towel</h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
          <div class="bg-white p-4 rounded-lg flex flex-col items-start ">
            <img
              src={img1}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover rounded-sm mb-2"
            />
            <h3 class="text-lg font-semibold">Square Clear Glass Box</h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
          <div class="bg-white p-4 rounded-lg flex flex-col items-start ">
            <img
              src={img2}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover rounded-sm mb-2"
            />
            <h3 class="text-lg font-semibold">4-pack Small Ceramic Plates</h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
          <div class="bg-white p-4 rounded-lg flex flex-col items-start ">
            <img
              src={img3}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover rounded-sm mb-2"
            />
            <h3 class="text-lg font-semibold">Large Clear Glass Box
            </h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
          <div class="bg-white p-4 rounded-md flex flex-col items-start ">
            <img
              src={img4}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover rounded-sm mb-2"
            />
            <h3 class="text-lg font-semibold">Round Jute Placemat
            </h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
          <div class="bg-white p-4 rounded-lg flex flex-col items-start ">
            <img
              src={img5}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover rounded-sm mb-2"
            />
            <h3 class="text-lg font-semibold">Metal Wire Basket</h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-1">30$</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Decor;
