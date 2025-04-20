import React from "react";
import SeeProduct from "../Button/SeeProduct";
import Headphones from "/image-hero.jpg";
import MobileHeadphones from "/image-header.jpg";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";


const Header = () => {
  const navigate = useNavigate();
  const { productData } = useContext(StoreContext);

  const product = productData.find((item) => item.slug === "xx99-mark-two-headphones");

  const handleClick = () => {
    if (product) {
      navigate(`/product/${product._id}`);

    }
  }
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
          <button onClick={handleClick}>
            <SeeProduct text="See Product" />
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={Headphones} className="w-full" alt="Headphones" />
      </div>
    </div>
  );
};

export default Header;
