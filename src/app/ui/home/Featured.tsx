"use client";

import { ProductsByCategoryData } from "@/app/lib/definitions";
import React from "react";
import { motion } from "framer-motion";
import { gilda } from "../fonts";
import CTA from "../CTA";
import ProductCard from "../product/ProductCard";

const Featured = ({ data }: { data: ProductsByCategoryData }) => {
  return (
    <motion.section className="container mx-auto px-4 py-4 my-20 flex flex-col justify-around lg:justify-center gap-4">
      <div className="flex w-full justify-between items-center lg:row-start-3">
        <h3 className={`${gilda.className} text-2xl lg:text-3xl `}>
          Explore our newest arrivals
        </h3>

        <CTA link={"/all"}>Shop All</CTA>
      </div>

      <div className="w-full flex overflow-x-scroll lg:overflow-hidden mt-10">
        <div className="flex flex-nowrap w-full gap-10 lg:gap-6 items-stretch">
          {data.collection.products.edges.map(({ node }) => (
            <ProductCard product={node} key={node.id} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
