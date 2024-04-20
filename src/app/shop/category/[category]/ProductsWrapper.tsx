"use client";

import { ShopifyProductData } from "@/app/lib/definitions";
import ProductCard from "@/app/ui/product/ProductCard";
import React from "react";
import { motion } from "framer-motion";

const ProductsWrapper = ({
  products,
}: {
  products: { node: ShopifyProductData }[];
}) => {
  return (
    <motion.section className="justify-between w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(({ node }) => (
        <ProductCard product={node} />
      ))}
    </motion.section>
  );
};

export default ProductsWrapper;
