"use client";

import React from "react";
import { gilda } from "../fonts";
import { SingleCategoryData } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

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
    },
  },
};

const Categories = ({
  coasters,
  wallHangings,
  keychains,
  supplies,
}: {
  coasters: SingleCategoryData;
  wallHangings: SingleCategoryData;
  keychains: SingleCategoryData;
  supplies: SingleCategoryData;
}) => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="h-screen grid grid-cols-12 grid-rows-12"
    >
      <Coasters data={coasters} />
      <WallHangings data={wallHangings} />
      <Keychains data={keychains} />
      <Supplies data={supplies} />
    </motion.section>
  );
};

const CategoryTitleStyle = `${gilda.className} text-3xl  col-span-full lg:my-auto`;
const CategoryTextStyle =
  "grid grid-cols-5 px-4 h-full bg-shop-overlay/50 hover:bg-shop-overlay/60 text-white";

const Coasters = ({ data }: { data: SingleCategoryData }) => {
  const { title, handle, image } = data.collection;
  return (
    <div
      style={{ backgroundImage: `url('${image.url}')` }}
      className={`w-full row-span-4 col-span-full lg:row-start-3 lg:col-span-6 lg:row-span-10 z-10 bg-bottom bg-cover`}
    >
      <Link href={`/shop/category/${handle}`}>
        <div className={`${CategoryTextStyle} grid-rows-12`}>
          <h4 className={`${CategoryTitleStyle} row-start-9 lg:row-start-11`}>
            {title}
          </h4>

          <CategoryDetails className="row-start-11 lg:row-start-12 " />
        </div>
      </Link>
    </div>
  );
};

const WallHangings = ({ data }: { data: SingleCategoryData }) => {
  const { title, handle, image } = data.collection;
  return (
    <div
      style={{ backgroundImage: `url('${image.url}')` }}
      className="w-full col-span-full row-span-4 lg:row-start-3 lg:col-span-6 lg:row-span-5 z-10 bg-cover bg-bottom bg-no-repeat"
    >
      <Link href={`/shop/category/${handle}`}>
        <div className={`${CategoryTextStyle} grid-rows-6`}>
          <h4 className={`${CategoryTitleStyle} row-start-5`}>{title}</h4>

          <CategoryDetails className="row-start-6" />
        </div>
      </Link>
    </div>
  );
};

const Keychains = ({ data }: { data: SingleCategoryData }) => {
  const { title, handle, image } = data.collection;
  return (
    <div
      style={{ backgroundImage: `url('${image.url}')` }}
      className="lg:row-start-8 lg:col-span-3 col-span-6 row-span-4 lg:row-span-5 z-10 bg-cover bg-center"
    >
      <Link href={`/shop/category/${handle}`}>
        <div className={`${CategoryTextStyle} grid-rows-6`}>
          <h4 className={`${CategoryTitleStyle} row-start-5`}>{title}</h4>

          <CategoryDetails className="row-start-6" />
        </div>
      </Link>
    </div>
  );
};

const Supplies = ({ data }: { data: SingleCategoryData }) => {
  const { title, handle, image } = data.collection;
  return (
    <div
      style={{ backgroundImage: `url('${image.url}')` }}
      className="lg:row-start-8 lg:col-span-3 col-span-6 row-span-4 lg:row-span-5 z-10 bg-cover bg-center"
    >
      <Link href={`/shop/category/${handle}`}>
        <div className={`${CategoryTextStyle} grid-rows-6`}>
          <h4 className={`${CategoryTitleStyle} row-start-5`}>{title}</h4>

          <CategoryDetails className="row-start-6" />
        </div>
      </Link>
    </div>
  );
};

const CategoryDetails = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        "flex justify-between items-start col-span-12",
        className
      )}
    >
      <span className="hidden lg:inline-block text-sm">From $16.00</span>
      <button className="underline underline-offset-4 lg:text-base text-sm">
        See products
      </button>
    </div>
  );
};

export default Categories;
