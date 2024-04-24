"use client";

import React, { useState } from "react";
import { ShopifyProductData } from "@/app/lib/definitions";
import Image from "next/image";
import { formatPrice } from "@/app/lib/utils";
import Link from "next/link";
import { gilda } from "@/app/ui/fonts";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ShopifyProductData;
}
const WorkshopCard = ({ product, className }: ProductCardProps) => {
  const {
    handle,
    title,
    featuredImage,
    compareAtPriceRange,
    priceRange,
    tags,
  } = product;

  return (
    <div className={`${className}`}>
      <Link href={`/product/${handle}`}>
        <Image
          src={featuredImage.url}
          alt={featuredImage.altText!}
          width={featuredImage.width}
          height={featuredImage.height}
          className="h-80 lg:overflow-hidden object-cover"
        />

        <div className="absolute top-2 left-2 flex gap-2">
          {compareAtPriceRange.maxVariantPrice.amount !== "0.0" && (
            <span className="bg-white py-1 px-2 text-xs">ON SALE!</span>
          )}

          {tags.includes("bestseller") && (
            <span className="bg-komo-latte py-1 px-2 text-xs">BEST SELLER</span>
          )}
        </div>

        <div className="flex flex-col">
          <h4 className={`${gilda.className} text-2xl mt-2 hover:underline`}>
            {title}
          </h4>
          <div className="flex gap-2">
            {compareAtPriceRange.maxVariantPrice.amount !== "0.0" && (
              <span className="line-through">
                {formatPrice(compareAtPriceRange.maxVariantPrice.amount)}
              </span>
            )}

            <span>
              {formatPrice(priceRange.minVariantPrice.amount)}{" "}
              {priceRange.minVariantPrice.currencyCode}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkshopCard;
