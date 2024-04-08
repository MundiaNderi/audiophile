import React from "react";
import ProductPage from "./ProductPage";

const CategoryPage = () => {
  // Assuming you have the category and product slugs available from the clicked category and product
  const clickedCategorySlug = "earphones"; // Replace this with the actual clicked category slug
  const clickedProductSlug = "yx1-earphones"; // Replace this with the actual clicked product slug

  return (
    <div>
      <ProductPage
        categorySlug={clickedCategorySlug}
        productSlug={clickedProductSlug}
      />
    </div>
  );
};

export default CategoryPage;
