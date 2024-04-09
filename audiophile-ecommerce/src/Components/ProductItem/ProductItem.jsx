import React, { useState } from "react";
import Plus from '../../../public/assets/checkout/plus-icon.png'
import Minus from '../../../public/assets/checkout/remove-icon.png'
import PlusSvg from '../../../public/assets/checkout/+.svg'
import MinusSvg from '../../../public/assets/checkout/-.svg'
const ProductItem = ({ id, name, price, description, image, includes, features }) => {

  const [itemCount, setItemCount] = useState(0)


  return (
    <div>
      <div id="product-page" className="flex pt-10 flex-col  ">
        <div className="flex px-6 md:px-32 flex-col md:flex-row ">
          {/* Product Image */}
          <div>
            <img src={image.mobile} className=" md:hidden rounded-md " alt={name} />
            <img src={image.desktop} className="hidden md:flex" alt={name} />
          </div>

          {/*Product Description */}
          <div className="flex flex-col justify-center md:p-20">
            <h1 className="py-4 font-manrope font-bold text-2xl ">{name}</h1>
            <p className="font-manrope pb-4 leading-6">{description}</p>
            <p className="font-manrope pb-4 ">${price}</p>
            <div className="flex flex-row items-center gap-3">
              <button className="font-manrope cursor-pointer text-black text-xs font-bold bg-lightGray p-2 px-4">
                {!itemCount
                ? <img onClick={() => setItemCount(prev => prev+1)} src={PlusSvg} />
                : <div className="flex gap-4" >
                  <img onClick={() => setItemCount(prev => (prev-1))} src={MinusSvg} className="" />
                  <p>{itemCount}</p>
                  <img onClick={() => setItemCount(prev => prev+1)} src={PlusSvg} />
                </div>
                }
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
                  <ul>
                {includes.map((include, index) => (
                  <li key={index}>
                    {include.quantity} x {include.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
