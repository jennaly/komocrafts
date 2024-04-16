"use client";
import React from "react";
import { gilda } from "../fonts";
import CTA from "../CTA";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

type HeroH1 = {
  children: React.ReactNode;
};

const HeroH1 = ({ children }: HeroH1) => {
  return (
    <h1
      className={`${gilda.className} text-4xl lg:text-6xl 2xl:text-7xl leading-normal mb-2`}
    >
      {children}
    </h1>
  );
};
const Hero = () => {
  return (
    <section className="justify-center bg-[url(/hero-mobile.jpg)] md:bg-[url(/hero-desktop.jpg)] bg-cover bg-top h-screen bg-no-repeat grid grid-cols-12 grid-rows-12">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="col-span-9 col-start-2 lg:col-start-2 lg:col-span-5 row-start-2 lg:row-start-5 my-auto"
      >
        <HeroH1>Handcrafted with care for memorable moments</HeroH1>
        <CTA link={"/shop"}>
          Shop our latest <BsArrowRight />
        </CTA>
      </motion.div>
    </section>
  );
};

export default Hero;
