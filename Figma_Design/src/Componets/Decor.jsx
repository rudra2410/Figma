import React from "react";
import img from "../Assets/Rectangle 6.svg";
import img1 from "../Assets/Rectangle 7.svg";
import img2 from "../Assets/Rectangle 8.svg";

const Decor = () => {
  return (
    <div>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div class="bg-gray-200 col-span-1 flex items-center justify-center p-4">
            <div class="text-start">
              <h2 class="text-[28px] text-[#fff] font-bold mb-2">DECOR</h2>
              <p class="mb-4 text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="bg-transparent border border-white text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">
                VIEW ALL
              </button>
            </div>
          </div>

          <div class="bg-white p-4 rounded-md flex flex-col items-start">
            <img
              src={img}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover mb-4"
            />
            <h3 class="text-lg font-semibold">Linen Beach Towel</h3>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-2">30$</p>
          </div>
          <div class="bg-white p-4 rounded-md flex flex-col items-start">
            <img
              src={img1}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover mb-4"
            />
            <h3 class="text-lg font-semibold">Square Clear Glass Box</h3>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-2">30$</p>
          </div>
          <div class="bg-white p-4 rounded-md flex flex-col items-start">
            <img
              src={img2}
              alt="Linen Beach Towel"
              class="w-full h-auto object-cover mb-4"
            />
            <h3 class="text-lg font-semibold">4-pack Small Ceramic Plates</h3>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400 text-[20px]">★ ★ ★ ☆ ☆</span>
            </div>
            <p class="text-lg mt-2">30$</p>
          </div>

          {/* <div class="bg-white p-4 rounded-md flex flex-col items-center relative">
            <img
              src={img}
              alt="Square Clear Glass Box"
              class="w-full h-auto object-cover mb-4"
            />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-white bg-opacity-70 transition-opacity">
              <div class="bg-white p-2 rounded-full shadow-lg mx-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <div class="bg-white p-2 rounded-full shadow-lg mx-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3v18l7-3 7 3V3z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold">Square Clear Glass Box</h3>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400">★★★☆☆</span>
            </div>
            <p class="text-lg mt-2">30$</p>
          </div>

          <div class="bg-white shadow-md p-4 rounded-md flex flex-col items-center">
            <img
              src={img2}
              alt="4-pack Small Ceramic Plates"
              class="w-full h-auto object-cover mb-4"
            />
            <h3 class="text-lg font-semibold">4-pack Small Ceramic Plates</h3>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400">★★★☆☆</span>
            </div>
            <p class="text-lg mt-2">30$</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Decor;
