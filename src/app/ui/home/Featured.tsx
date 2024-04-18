"use client";

import { ProductsByCategoryData } from "@/app/lib/definitions";
import React from "react";
import { motion } from "framer-motion";
import { gilda } from "../fonts";
import CTA from "../CTA";
import ProductCard from "../product/ProductCard";

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

const itemVariants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: { opacity: 1 },
};

const Featured = ({ data }: { data: ProductsByCategoryData }) => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="container bg-komo-bg mx-auto px-4 py-24 flex flex-col justify-around lg:justify-center gap-4"
    >
      <motion.div
        variants={itemVariants}
        className="flex w-full justify-between items-center lg:row-start-3"
      >
        <h3 className={`${gilda.className} text-2xl lg:text-3xl `}>
          Explore our newest arrivals
        </h3>

        <CTA link={"/all"}>Shop All</CTA>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="w-full flex overflow-x-scroll lg:overflow-hidden mt-10"
      >
        <div className="flex flex-nowrap w-full gap-10 lg:gap-6 items-stretch">
          {data.collection.products.edges.map(({ node }) => (
            <ProductCard product={node} key={node.id} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Featured;
