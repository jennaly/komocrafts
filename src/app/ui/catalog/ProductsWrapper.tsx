"use client";

import { ShopifyProductData } from "@/app/lib/definitions";
import ProductCard from "@/app/ui/product/ProductCard";
import React from "react";
import { motion } from "framer-motion";

interface ProductsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const ProductsWrapper = ({ children }: ProductsWrapperProps) => {
  return (
    <motion.section className="justify-between w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </motion.section>
  );
};

export default ProductsWrapper;
