import React from "react";
import SpeakerData from "/data.json";
import SeeProduct from "../../Components/Button/SeeProduct";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const SpeakersCategory = () => {
  const { productData } = useContext(StoreContext);
  const product = productData.filter((item) => item.category === "Speakers");
  const imageBaseUrl = "https://audiophile-api-qtz6.onrender.com";
  //const imageBaseUrl = "http://localhost:4000";

  return (
    <div className="">
      <div className="bg-black px-6 md:px-32 ">
        <h1 className="text-white font-manrope text-center font-bold py-10 text-2xl ">
          SPEAKERS
        </h1>
      </div>

      {/*ZXZ SPEAKER */}
      {product.map((data, index) => (
        <div
          className={`flex flex-col gap-20 md:flex-row mx-6 md:mx-32 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mt-20`}
          key={data.id}
        >
          {/*Images */}
          <div>
            <img
              src={`${imageBaseUrl}${data.image.mobile}`}
              className="md:hidden rounded-md "
            />
            <img
              src={`${imageBaseUrl}${data.image.desktop}`}
              className="hidden md:flex rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className=" text-burntSienna py-3 ">NEW PRODUCT</p>
            <h1 className="font-manrope text-2xl font-bold pb-4 ">
              {data.name}
            </h1>
            <p className=" font-manrope pb-4 w-5/6 text-center md:text-left ">
              {data.description}
            </p>
            <Link to={`/product/${data._id}`}>
              <SeeProduct text="See Product" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakersCategory;
