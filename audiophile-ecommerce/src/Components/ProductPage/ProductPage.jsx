import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";

const ProductPage = ({ category }) => {
  const { productData } = useContext(StoreContext);
  
  // Check if productData is defined and is an array before mapping over it
  if (!Array.isArray(productData)) {
    return <div>No products available</div>; 
  }
  
  return (
    <div id="product-page" className="food-display">
      <div className="">
        {productData.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name} 
            price={item.price}
            description={item.description}
            includes={item.includes} 
            image={item.image} 
            features={item.features} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
