"use client";

import React, { useState } from "react";
import { ShopifyProductData } from "@/app/lib/definitions";
import Image from "next/image";
import { formatPrice } from "@/app/lib/utils";
import Link from "next/link";
import { gilda } from "../fonts";

const ProductCard = ({ product }: { product: ShopifyProductData }) => {
  const {
    handle,
    title,
    featuredImage,
    images,
    compareAtPriceRange,
    priceRange,
    tags,
  } = product;

  const getAltFeaturedImage = () => {
    for (let i = 0; i < images.edges.length; i++) {
      if (images.edges[i].node.id !== featuredImage.id) {
        return images.edges[i].node;
      }
    }
  };

  const altFeaturedImage = getAltFeaturedImage();
  const [displayedImage, setDisplayedImage] = useState(featuredImage);

  return (
    <div className="relative shrink-0 w-full md:w-1/2 lg:shrink">
      <Link href={`/product/${handle}`}>
        <Image
          src={displayedImage.url}
          alt={displayedImage.altText!}
          width={displayedImage.width}
          height={displayedImage.height}
          onMouseEnter={() => setDisplayedImage(altFeaturedImage!)}
          onMouseLeave={() => setDisplayedImage(featuredImage)}
          className="h-80 md:h-96 lg:h-128 lg:overflow-hidden object-cover"
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

export default ProductCard;
