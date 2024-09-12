import React from "react";
import moodystudio from "../Assets/MOODY STUDIO.svg";
import vector from "../Assets/Vector.svg";
import group1 from "../Assets/Group (1).svg";
import group40 from "../Assets/Group 40.svg";
import group from "../Assets/Group.svg";
import vector1 from "../Assets/Vector1.png";
import vector2 from "../Assets/Vector2.png";
import vector3 from "../Assets/Vector3.png";
import hero from "../Assets/hero.png";
import chair from "../Assets/chair-removebg-preview.png";
import port from "../Assets/image_4-removebg-preview.png";

function Header() {
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex justify-between pt-[34px] pb-[19px] px-20">
          <a href="...">
            <img src={moodystudio} alt="" className="" />
          </a>
          <div className="flex items-center space-x-8">
            <a href="...">
              <img src={vector} alt="" />
            </a>
            <a href="...">
              <img src={group40} alt="" />
            </a>
            <a href="...">
              <img src={group} alt="" />
            </a>
            <a href="...">
              <img src={group1} alt="" />
            </a>
          </div>
        </div>
        <div className="border-b border-black">
          <ul className="py-[38px] flex flex-wrap justify-center space-x-20">
            <li>
              <a href="..." className="text-base font-bold">
                HOME
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                STORE
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                ACCESSORIES
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                BRAND
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                PAGES
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                NEWS
              </a>
            </li>
            <li>
              <a href="..." className="text-base font-bold">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-[20px] pb-[29px] flex items-center justify-around">
          <div className="flex items-center space-x-4">
            <img src={vector1} alt="" />
            <p className="text-xs font-bold">FREE SHIPPING</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={vector2} alt="" />
            <p className="text-xs font-bold">100% MONEY BACK</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={vector3} alt="" />
            <p className="text-xs font-bold">SUPPORT 24/7</p>
          </div>
        </div>
      </nav>

      <section className="hero-section py-14">
        <div className="container mx-auto flex items-center">
          <div className="">
            <img src={hero} alt="" className="" />
          </div>
          <div className="hero">
            <p className="text-xl font-bold mb-[25px]">HOT DEALS THIS WEEK</p>
            <h1 className="hero-text text-5xl font-bold mb-[40px]">
              SALE UP 50% MODERN FURNITURE
            </h1>
            <button className="w-[124px] h-[48px] border border-black text-sm font-bold">
              VIEW NOW
            </button>
          </div>
        </div>
      </section>

      <section className="px-20">
        <div className="container mx-auto py-10">
          <div className="flex space-x-5 items-center">
            <div className="w-1/2 bg-[#FAFAFA] flex items-center justify-evenly p-4">
              <img
                src={chair}
                alt="INY Vintage Chair"
                className="w-80 h-auto object-contain"
              />
              <div className="">
                <h2 className="text-xl font-semibold">INY VINTAGE CHAIR</h2>
                <button className="mt-4 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
                  View Details
                </button>
              </div>
            </div>

            <div className="w-1/2 bg-[#FAFAFA] flex items-center justify-evenly p-4">
              <img
                src={port}
                alt="Large Terracotta Vase"
                className="w-[214px] h-auto object-contain"
              />
              <div className="ml-6">
                <h2 className="text-xl font-semibold">LARGE TERRACOTA VASE</h2>
                <button className="mt-4 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
