import { getAllPhysicalProducts } from "@/app/lib/data";
import React from "react";
import { Links } from "@/app/lib/links";
import ContentWrapper from "@/app/shop/category/ContentWrapper";

const AllProductsPage = async () => {
  const data = await getAllPhysicalProducts();
  const links = await Links();
  const categoryLinks = links[0].subLinks!;
  const products = data.products.nodes;

  return (
    <div className="bg-komo-bg">
      <ContentWrapper
        categoryTitle={"all"}
        categoryLinks={categoryLinks}
        products={products}
      ></ContentWrapper>
    </div>
  );
};

export default AllProductsPage;
