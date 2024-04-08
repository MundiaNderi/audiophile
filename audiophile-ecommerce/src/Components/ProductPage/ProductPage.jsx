import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Earphones from "../../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import AudioGear from "../AudioGear/AudioGear";
import ProductSuggestions from "../ProductSuggestions/ProductSuggestions";
import HeroProducts from "../HeroProducts/HeroProducts";

const ProductPage = () => {
  const productData = useContext(StoreContext);

  return (
    <div id="product-page" className=" ">
      <p className="py-10 px-6 md:px-32 font-manrope">Go Back</p>
      {/*Product */}

      <div className="flex px-6 md:px-32 flex-col md:flex-row ">
        {/* Product Image */}
        <div>
          <img src={Earphones} className=" rounded-md " />
        </div>

        {/*Product Description */}
        <div className="flex flex-col justify-center md:p-20">
          <p>NEW PRODUCT</p>
          <h1 className="py-4 font-manrope font-bold text-2xl ">
            YX1 WIRELESS EARPHONES
          </h1>
          <p className="font-manrope pb-4 leading-6">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="font-manrope pb-4 ">$ 599</p>
          <div className="flex flex-row items-center gap-3">
            <button className="font-manrope text-black text-xs font-bold bg-lightGray p-2 px-4">
              <span className="px-2">-</span >1<span className="px-2">+</span>
            </button>
            <button className="text-white font-manrope text-xs font-bold bg-burntSienna hover:bg-mellowApricot p-2 px-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/*Features */}
      <div className="pt-5 flex flex-col md:flex-row px-6 md:px-32 pb-20 justify-between ">
        <div className="md:w-1/2 ">
          <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
            FEATURES
          </h1>
          <p className="font-manrope font-medium text-black ">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <br />
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="items-right ">
          <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
            IN THE BOX
          </h1>
          <div className="">
            <p className="font-manrope font-medium pb-2">Earphone Unit</p>
            <p className="font-manrope font-medium pb-2">Multi-size Earplugs</p>
            <p className="font-manrope font-medium pb-2">User Manual</p>
            <p className="font-manrope font-medium pb-2">
              USB-C Charging Cable
            </p>
            <p className="font-manrope font-medium  pb-2">Travel Pouch</p>
          </div>
        </div>
      </div>
      <ProductSuggestions />
      <HeroProducts />
      <AudioGear />
    </div>
  );
};

export default ProductPage;
