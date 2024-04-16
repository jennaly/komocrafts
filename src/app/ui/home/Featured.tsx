"use client";

import { ProductsByCategoryData } from "@/app/lib/definitions";
import React from "react";
import { motion } from "framer-motion";
import { gilda } from "../fonts";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/app/lib/utils";

const Featured = ({ data }: { data: ProductsByCategoryData }) => {
  return (
    <motion.section className="container mx-auto px-4 py-4 mt-8 flex flex-col justify-around lg:justify-center gap-4">
      <div className="flex w-full justify-between items-bottom lg:row-start-3 mt-10">
        <h3 className={`${gilda.className} text-2xl lg:text-3xl `}>
          Explore our newest arrivals
        </h3>

        <Link href="/" className="text-lg underline underline-offset-4">
          Shop all
        </Link>
      </div>

      <div className="w-full flex overflow-x-scroll lg:overflow-hidden mt-10">
        <div className="flex flex-nowrap w-full gap-10 lg:gap-6">
          {data.collection.products.edges.map(
            ({
              node: {
                id,
                featuredImage,
                title,
                priceRange,
                compareAtPriceRange,
              },
            }) => (
              <div
                key={id}
                className="relative shrink-0 w-full md:w-1/2 lg:shrink"
              >
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.altText!}
                  width={featuredImage.width}
                  height={featuredImage.height}
                  className="h-96 lg:h-128 lg:overflow-hidden lg:object-cover"
                />
                {compareAtPriceRange.maxVariantPrice.amount !== "0.0" && (
                  <span className="absolute top-2 left-2 bg-white p-1 text-xs">
                    ON SALE!
                  </span>
                )}

                <div className="flex flex-col">
                  <h4 className={`${gilda.className} text-2xl mt-2`}>
                    {title}
                  </h4>
                  <div className="flex gap-2">
                    {compareAtPriceRange.maxVariantPrice.amount !== "0.0" && (
                      <span className="line-through">
                        {formatPrice(
                          compareAtPriceRange.maxVariantPrice.amount
                        )}
                      </span>
                    )}

                    <span>
                      {formatPrice(priceRange.minVariantPrice.amount)}{" "}
                      {priceRange.minVariantPrice.currencyCode}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
