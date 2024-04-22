import { getProductsByCategory } from "@/app/lib/data";
import React from "react";
import { Links } from "@/app/lib/links";
import ContentWrapper from "@/app/shop/category/ContentWrapper";

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
      <ContentWrapper
        categoryTitle={params.category}
        categoryLinks={categoryLinks}
        products={products}
      ></ContentWrapper>
    </div>
  );
};

export default ShopPage;
