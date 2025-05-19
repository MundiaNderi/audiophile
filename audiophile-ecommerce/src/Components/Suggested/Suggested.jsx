import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import SeeProduct from "../Button/SeeProduct";

const Suggested = () => {
  const { productData } = useContext(StoreContext);
  const suggestedProducts = productData.slice(0, 3);
  const imageBaseUrl = "http://localhost:4000";
  //const imageBaseUrl = "https://audiophile-api-qtz6.onrender.com";

  return (
    <div className=" md:mx-32 md:mb-20">
      <h1 className=" font-bold font-manrope text-lg flex leading-snug justify-center my-4 ">
        YOU MAY ALSO LIKE
      </h1>
      <div className="products justify-center leading-snug flex gap-5 flex-col md:flex-row">
        {suggestedProducts.map((product) => (
          <div key={product._id}>
            <img
              className=" h-318 w-350"
              src={`${imageBaseUrl}${product.image.desktop}`}
            />
            <h1 className="text-lg text-center py-6 font-bold font-manrope">
              {product.name}
            </h1>
            <Link
              onClick={() =>
                console.log(`Navigating to: /product/${product._id}`)
              }
              className="mx-auto flex justify-center"
              to={`/product/${product._id}`}
            >
              <SeeProduct
                text="See Product"
                onClick={() => {
                  // Force a full page reload to the new product
                  window.location.href = `/product/${product._id}`;
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
