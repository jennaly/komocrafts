"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import React, { useState } from "react";
import { gilda } from "@/app/ui/fonts";

type ShopMenuProp = {
  id?: string;
  title: string;
  handle: string;
}[];

const ShopMenu = ({ shopLinks }: { shopLinks: ShopMenuProp }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav>
      <div>
        <button onClick={handleOpen} className="flex gap-1 pl-4">
          {open ? (
            <IoCloseOutline size={25} className="hover:cursor-pointer ml-4" />
          ) : (
            <IoMenuOutline size={25} className="hover:cursor-pointer ml-4" />
          )}
          <span className="hover:text-gray-400">Shop</span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            className="h-lvh bg-bg-nav fixed mt-4"
          >
            <motion.div
              className={`container flex flex-col mt-8 text-2xl ${gilda.className} gap-4 ml-10`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {shopLinks!.map(({ id, title, handle }) => (
                <motion.a
                  key={id}
                  href={`/shop/category/${handle}`}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {title}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ShopMenu;
