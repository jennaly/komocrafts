import React from "react";
import { getProductsByCategory } from "@/app/lib/data";
import ContentWrapper from "../ui/catalog/ContentWrapper";
import ProductsWrapper from "../ui/catalog/ProductsWrapper";
import Header from "../ui/catalog/Header";
import WorkshopCard from "./WorkshopCard";

const workshopsPage = async () => {
  const data = await getProductsByCategory("Workshops");
  const products = data.collection.products.edges.map((edge) => edge.node);
  return (
    <div className="bg-komo-bg">
      <ContentWrapper>
        <Header categoryTitle={"workshops"} />
        <ProductsWrapper>
          {products.map((product) => (
            <WorkshopCard product={product} key={product.id} />
          ))}
        </ProductsWrapper>
      </ContentWrapper>
    </div>
  );
};

export default workshopsPage;
