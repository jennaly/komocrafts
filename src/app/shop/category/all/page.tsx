import { getAllPhysicalProducts } from "@/app/lib/data";
import React from "react";
import { Links } from "@/app/lib/links";
import ContentWrapper from "@/app/ui/catalog/ContentWrapper";
import Header from "@/app/ui/catalog/Header";
import ProductsWrapper from "@/app/ui/catalog/ProductsWrapper";
import ProductCard from "@/app/ui/product/ProductCard";

const AllProductsPage = async () => {
  const data = await getAllPhysicalProducts();
  const links = await Links();
  const categoryLinks = links[0].subLinks!;
  const products = data.products.nodes;

  return (
    <div className="bg-komo-bg">
      <ContentWrapper>
        <Header categoryTitle={"all"} categoryLinks={categoryLinks} />
        <ProductsWrapper>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ProductsWrapper>
      </ContentWrapper>
    </div>
  );
};

export default AllProductsPage;
