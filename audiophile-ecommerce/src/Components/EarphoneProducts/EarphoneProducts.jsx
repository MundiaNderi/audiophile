import React from "react";
import EarphonesData from "/data.json";
import SeeProduct from "../../Components/Button/SeeProduct";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const EarphoneProducts = () => {
  //const Earphones = EarphonesData.filter((item) => item.id === 1);
  const { productData } = useContext(StoreContext);
  const product = productData.filter((item) => item.category === "Earphones");
  //const imageBaseUrl = "http://localhost:4000";
  const imageBaseUrl = "https://audiophile-api-qtz6.onrender.com"; 
  
  return (
    <div className="">
      <div className="py-10 bg-black">
        <h1 className="text-2xl text-white font-manrope text-center font-bold ">
          EARPHONES
        </h1>
      </div>

      <div className="pt-20">
        {product.map((data, index) => (
          <div
            className={`flex flex-col md:flex-row px-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:px-32`}
            key={data.id}
          >
            <div>
              <img
                src={`${imageBaseUrl}${data.image.mobile}`}
                className=" md:hidden rounded-md " />
              <img
                src={`${imageBaseUrl}${data.image.desktop}`}
                className="hidden md:flex pr-24 rounded-md"
              />
            </div>

            <div className="flex flex-col justify-center items-center  md:items-start">
              <p className=" text-burntSienna py-4 font-manrope ">
                NEW PRODUCT
              </p>
              <h1 className="font-manrope text-2xl font-bold ">{data.name}</h1>
              <p className="text-center font-manrope md:text-left py-4">
                {data.description}
              </p>
              <Link to={`/product/${data._id}`}>
                <SeeProduct text="See Product" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarphoneProducts;
