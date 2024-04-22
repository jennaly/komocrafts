import React from "react";
import Header from "./Header";
import ProductsWrapper from "./ProductsWrapper";
import {
  ProductsByCategoryData,
  ShopifyProductData,
} from "@/app/lib/definitions";

type CategoryLink = {
  id?: string;
  title: string;
  handle: string;
};

type ProductCardProps = {
  data: ProductsByCategoryData;
  categoryLinks: CategoryLink[];
  products: ShopifyProductData[];
};

const ContentWrapper = ({
  data,
  categoryLinks,
  products,
}: ProductCardProps) => {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col justify-around lg:justify-center gap-4">
      <Header data={data} categoryLinks={categoryLinks} />
      <ProductsWrapper products={products} />
    </div>
  );
};

export default ContentWrapper;
