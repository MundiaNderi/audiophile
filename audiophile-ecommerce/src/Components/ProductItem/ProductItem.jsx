import React, { useContext, useState } from "react";
import PlusSvg from "../../../public/assets/checkout/+.svg";
import MinusSvg from "../../../public/assets/checkout/-.svg";
import CheckoutModal from "../Modals/CheckoutModal";
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({
  id,
  name,
  price,
  description,
  image,
  includes,
  features,
}) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart, productData } =
    useContext(StoreContext);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div>
      <div id="product-page" className="flex pt-10 flex-col">
        <div className="flex px-6 md:px-32 flex-col md:flex-row">
          {/* Product Image */}
          <div>
            <img
              src={image.mobile}
              className="md:hidden rounded-md"
              alt={name}
            />
            <img
              src={image.desktop}
              className="hidden md:flex rounded-md"
              alt={name}
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col justify-center md:p-20">
            <h1 className="py-4 font-manrope font-bold text-2xl">{name}</h1>
            <p className="font-manrope pb-4 leading-6">{description}</p>
            <p className="font-manrope pb-4">${price}</p>
            <div className="flex flex-row items-center gap-3">
              <button className="font-manrope cursor-pointer text-black text-xs font-bold bg-lightGray p-2 px-4">
                {!cartItems[id] ? (
                  <img
                    onClick={() => addToCart(id)}
                    src={PlusSvg}
                    alt="Increase"
                  />
                ) : (
                  <div className="flex gap-4">
                    <img
                      onClick={() => removeFromCart(id)}
                      src={MinusSvg}
                      alt="Decrease"
                    />
                    <p>{cartItems[id]}</p>
                    <img
                      onClick={() => addToCart(id)}
                      src={PlusSvg}
                      alt="Increase"
                    />
                  </div>
                )}
              </button>
              <button
                onClick={toggleCartModal}
                className="text-white font-manrope text-xs font-bold bg-burntSienna hover:bg-mellowApricot p-2 px-4"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="pt-5 flex flex-col md:flex-row px-6 md:px-32 pb-20 justify-between">
          <div className="md:w-1/2">
            <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
              FEATURES
            </h1>
            <p className="font-manrope font-medium text-red-500 ">{features}</p>
          </div>
          <div className="items-right ml-20">
            <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
              IN THE BOX
            </h1>
            <div className="">
              <ul className="list-none space-y-1">
                {includes.map((include, index) => (
                  <li className="" key={index}>
                    {include.quantity} x {include.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <CheckoutModal
          onClose={toggleCartModal}
          cartItems={cartItems}
          productData={productData}
        />
      )}
    </div>
  );
};

export default ProductItem;
