import React from "react";
import SpeakerData from "/data.json";
import SeeProduct from "../../Components/Button/SeeProduct";
import { Link } from "react-router-dom";

const SpeakersCategory = () => {
  const filteredSpeaker = SpeakerData.filter((item) => item.id === 5);

  const ZX9Speaker = SpeakerData.filter((item) => item.id === 6);
  return (
    <div className="">
      <div className="bg-black px-6 md:px-32 ">
        <h1 className="text-white font-manrope text-center font-bold py-10 text-2xl ">
          SPEAKERS
        </h1>
      </div>

      {/*ZXZ SPEAKER */}
      {filteredSpeaker.map((data) => (
        <div
          className="flex flex-col md:flex-row mx-6 md:mx-32 mt-20  "
          key={data.id}
        >
          {/*Images */}
          <div>
            <img src={data.image.mobile} className="md:hidden rounded-md " />
            <img
              src={data.image.desktop}
              className="hidden md:flex rounded-md pr-24 "
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className=" text-burntSienna py-3 ">NEW PRODUCT</p>
            <h1 className="font-manrope text-2xl font-bold pb-4 ">
              {data.name}
            </h1>
            <p className=" font-manrope pb-4 text-center md:text-left ">
              {data.description}
            </p>
            <Link to={`/${data.category}/${data.slug}`}>
              <SeeProduct text="See Product" />
            </Link>
          </div>
        </div>
      ))}

      {/*ZX9 SPEAKER */}

      {ZX9Speaker.map((data) => (
        <div
          className="flex flex-col md:flex-row-reverse mt-10 px-6 md:px-32"
          key={data.id}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={data.image.mobile} className=" md:hidden rounded-md " />
            <img
              src={data.image.desktop}
              className="hidden md:flex rounded-md pl-24 "
            />
          </div>

          <div className="flex flex-col justify-center md:justify-normal items-center md:items-start ">
            <h1 className=" font-manrope text-2xl font-bold py-3 ">
              {data.name}
            </h1>
            <p className="pb-4 font-manrope text-center md:text-left ">
              {data.description}
            </p>
            <Link to={`/${data.category}/${data.slug}`}>
              <SeeProduct text="See Product" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakersCategory;
