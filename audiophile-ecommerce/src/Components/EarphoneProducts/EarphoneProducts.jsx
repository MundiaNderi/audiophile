import React from "react";
import EarphonesData from "/data.json";
import SeeProduct from "../../Components/Button/SeeProduct";
import { Link } from "react-router-dom";

const EarphoneProducts = () => {
  const Earphones = EarphonesData.filter((item) => item.id === 1);
  return (
    <div className="">
      <div className="py-10 bg-black">
        <h1 className="text-2xl text-white font-manrope text-center font-bold ">
          EARPHONES
        </h1>
      </div>

      <div className="pt-20">
        {Earphones.map((data) => (
          <div
            className="flex flex-col md:flex-row px-6 md:px-32"
            key={data.id}
          >
            <div>
              <img src={data.image.mobile} className=" md:hidden rounded-md " />
              <img
                src={data.image.desktop}
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
              <Link to={`/${data.category}/${data.slug}`}>
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
