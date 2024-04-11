import React from "react";
import SeeProduct from "../Button/SeeProduct";
import Headphones from "/image-hero.jpg";
import MobileHeadphones from "/image-header.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex  md:flex-row bg-black pt-4 md:px-32">
      <div className="md:w-1/2 flex items-center md:pr-4 ">
        <div className="md:hidden relative">
          <img
            src={MobileHeadphones}
            className="w-full h-1/3  "
            alt="Headphones"
          />
        </div>
        <div className="flex flex-col items-center  md:items-start sm:absolute">
          <p className="text-white font-bold font-manrope">NEW PRODUCT</p>
          <h1 className="text-white py-3 text-center md:text-left font-manrope md:w-96 font-bold text-3xl ">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white text-center md:text-left font-manrope md:w-80 pt-2 py-3 ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/:category/:slug">
            <SeeProduct text="See Product" />
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={Headphones} className="w-full" alt="Headphones" />
      </div>
    </div>
  );
};

export default Header;
