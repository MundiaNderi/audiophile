import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlusSvg from "../../../public/assets/checkout/+.svg";
import MinusSvg from "../../../public/assets/checkout/-.svg";
import CheckoutModal from "../Modals/CheckoutModal";
import { useState } from "react";
import AudioGear from "../AudioGear/AudioGear";
import HeroProducts from "../HeroProducts/HeroProducts";
import Suggested from "../Suggested/Suggested";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("Product ID:", id);
  const { cartItems, addToCart, removeFromCart, productData } = useContext(StoreContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const imageBaseUrl = "http://localhost:4000";
  //const imageBaseUrl = "https://audiophile-api-qtz6.onrender.com"; 

  const product = productData.find((item) => item._id === id);

  if (!product)
    return <p className="text-center"> Product not found or still loading</p>;

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div>
      <div id="product-page" className="flex pt-10 flex-col">
        <div className="flex px-6  md:px-32 flex-col md:flex-row">
          {/* Product Image */}
          <div>
            <img
              src={`${imageBaseUrl}${product.image.mobile}`}
              className="md:hidden rounded-md"
              alt={product.name}
            />
            <img
              src={`${imageBaseUrl}${product.image.desktop}`}
              className="hidden md:flex rounded-md"
              alt={product.name.desktop}
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col justify-center md:p-20">
            <h1 className="py-4 font-manrope font-bold text-2xl">
              {product.name}
            </h1>
            <p className="font-manrope pb-4 opacity-50 leading-6">{product.description}</p>
            <p className="font-manrope font-bold pb-4">$ { }{product.price}</p>
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
            <p className="font-manrope leading-6 opacity-40 font-medium">{product.features}</p>
          </div>
          <div className="items-right md:ml-20">
            <h1 className="font-bold font-manrope py-4 tracking-wide leading-4">
              IN THE BOX
            </h1>
            <div className="">
              <ul className="list-none space-y-1 opacity-50">
                {product.includes.flatMap((include, index) =>
                  include.item
                    .split(/\r?\n|\r|↵/)
                    .filter((line) => line.trim() !== "")
                    .map((line, i) => <li key={`${index}-${i}`}>{line}</li>)
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="suggestions">
        </div>
        <Suggested />
        <HeroProducts />
        <AudioGear />
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

export default ProductDetails;
