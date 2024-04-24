import { getProductsByCategory } from "@/app/lib/data";
import React from "react";
import { Links } from "@/app/lib/links";
import ContentWrapper from "@/app/ui/catalog/ContentWrapper";
import Header from "@/app/ui/catalog/Header";
import ProductsWrapper from "@/app/ui/catalog/ProductsWrapper";
import ProductCard from "@/app/ui/product/ProductCard";

type ShopPageProp = {
  params: {
    category: string;
  };
};

const ShopPage = async ({ params }: ShopPageProp) => {
  const data = await getProductsByCategory(params.category);
  const links = await Links();
  const categoryLinks = links[0].subLinks!;
  const products = data.collection.products.edges.map((edge) => edge.node);

  return (
    <div className="bg-komo-bg">
      <ContentWrapper>
        <Header categoryTitle={params.category} categoryLinks={categoryLinks} />
        <ProductsWrapper>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ProductsWrapper>
      </ContentWrapper>
    </div>
  );
};

export default ShopPage;
