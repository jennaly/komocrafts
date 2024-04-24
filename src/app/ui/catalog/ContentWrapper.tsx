"use client";
import React from "react";
import Header from "./Header";
import ProductsWrapper from "./ProductsWrapper";
import {
  ProductsByCategoryData,
  ShopifyProductData,
} from "@/app/lib/definitions";
import { motion } from "framer-motion";

type CategoryLink = {
  id?: string;
  title: string;
  handle: string;
};

type ProductCardProps = {
  categoryTitle: string;
  categoryLinks?: CategoryLink[];
  products: ShopifyProductData[];
};

const sectionVariants = {
  offScreen: {
    y: 50,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3,
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};
interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 0.3,
      }}
      className="container mx-auto px-4 py-24 flex flex-col justify-around lg:justify-center gap-4"
    >
      {children}
    </motion.div>
  );
};

export default ContentWrapper;
