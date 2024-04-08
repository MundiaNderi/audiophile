import React, { useContext } from "react";
import Earphones from "../../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import ProductSuggestions from "../ProductSuggestions/ProductSuggestions";
import HeroProducts from "../HeroProducts/HeroProducts";
import { StoreContext } from "../../context/StoreContext";
import AudioGear from '../AudioGear/AudioGear'

const ProductPage = () => {
  const { productData } = useContext(StoreContext);
  const product = productData.find(
    (product) => product.slug === "yx1-earphones"
  );
  
  if (!product) {
    return <div>Loading...</div>; // Handle case where product is not found
  }

  const { name, description, price, features, includes } = product;

  return (
    <div id="product-page" className=" ">
      <p className="py-10 px-6 md:px-32 font-manrope">Go Back</p>
      {/*Product */}

      <div className="flex px-6 md:px-32 flex-col md:flex-row ">
        {/* Product Image */}
        <div>
          <img src={Earphones} className=" rounded-md " alt={name} />
        </div>

        {/*Product Description */}
        <div className="flex flex-col justify-center md:p-20">
          {/* Assuming you have a `new` property in your product data */}
          {product.new && <p>NEW PRODUCT</p>}
          <h1 className="py-4 font-manrope font-bold text-2xl ">{name}</h1>
          <p className="font-manrope pb-4 leading-6">{description}</p>
          <p className="font-manrope pb-4 ">${price}</p>
          <div className="flex flex-row items-center gap-3">
            <button className="font-manrope text-black text-xs font-bold bg-lightGray p-2 px-4">
              <span className="px-2">-</span>1<span className="px-2">+</span>
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
          <p className="font-manrope font-medium text-black ">{features}</p>
        </div>
        <div className="items-right ">
          <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
            IN THE BOX
          </h1>
          <div className="">
            {includes.map((item, index) => (
              <p className="font-manrope font-medium pb-2" key={index}>
                {item.quantity} {item.item}
              </p>
            ))}
          </div>
        </div>
      </div>
       <HeroProducts />
       <AudioGear />
    </div>
  );
};

export default ProductPage;
