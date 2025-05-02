import React from "react";
import SeeProduct from "../Button/SeeProduct";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const HeadPhonesProductCard = () => {
  const { productData } = useContext(StoreContext);
  const product = productData.filter((item) => item.category === "Headphones");
  //const imageBaseUrl = "http://localhost:4000";
  const imageBaseUrl = "https://audiophile-api-qtz6.onrender.com";

  return (
    <>
      <div className="flex flex-col px-4 md:px-32">
        {/* XX99 Mark II Headphones */}
        {product.map((data, index) => (
          <div
            className={`flex flex-col justify-center gap-20 items-center md:justify-between md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mt-20`}
            key={data.id}
          >
            {/* Images */}
            <div className="">
              <img
                src={`${imageBaseUrl}${data.image.mobile}`}
                className="md:hidden   rounded-md"
              />
              <img
                src={`${imageBaseUrl}${data.image.desktop}`}
                className="hidden md:flex rounded-md "
              />
            </div>

            {/* Description and Buttons */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className=" text-burntSienna font-manrope py-2 ">
                NEW PRODUCT
              </p>
              <h1 className=" font-manrope font-bold text-2xl ">{data.name}</h1>
              <p className="text-center md:text-left w-5/6 py-4 ">
                {data.description}
              </p>
              <Link to={`/product/${data._id}`}>
                <SeeProduct text="See Product" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeadPhonesProductCard;
