"use client";

import React from "react";
import { motion } from "framer-motion";
import { gilda, monstserrat } from "../fonts";
import Image from "next/image";
import CTA from "../CTA";
import { BsArrowRight } from "react-icons/bs";

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

const Workshop = () => {
  return (
    <motion.section
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="flex flex-col lg:flex-row justify-between"
    >
      <div className="my-auto mx-auto px-4 lg:px-8 py-20 md:w-1/2 xl:w-1/3">
        <h2
          className={`${gilda.className} text-center break-keep text-4xl lg:text-5xl 2xl:text-6xl leading-normal`}
        >
          Craft your own masterpieces
        </h2>
        <p className={`${monstserrat.className} mt-8 text-center`}>
          Get hands-on experience through our workshops. No prior experience
          necessary &ndash; just bring your creativity and enthusiasm.
        </p>
        <div className="text-center mt-4">
          <CTA link={"/workshops"}>
            Explore upcoming workshops <BsArrowRight />
          </CTA>
        </div>
      </div>

      <Image
        src="/workshops.jpg"
        width="1084"
        height="1335"
        alt="Workshop station with unraveled yarn"
        className="h-96 lg:h-screen lg:w-1/2 object-cover overflow-hidden"
      />
    </motion.section>
  );
};

export default Workshop;
