"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import React from "react";

type SidebarMenuProp = {
  id?: string;
  title: string;
  handle: string;
}[];

const SidebarMenu = ({ sidebarLinks }: { sidebarLinks: SidebarMenuProp }) => {
  const [open, cycleOpen] = useCycle(false, true);

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
    <nav className="">
      <div className="">
        <button onClick={cycleOpen} className="flex gap-1">
          {open ? (
            <IoCloseOutline size={25} className="hover:cursor-pointer ml-4" />
          ) : (
            <IoMenuOutline size={25} className="hover:cursor-pointer ml-4" />
          )}
          Shop
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
              transition: { delay: 0.7, duration: 0.5 },
            }}
            className="h-lvh bg-red-100 fixed"
          >
            <motion.div
              className={`container flex flex-col pt-8 text-xl`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {sidebarLinks!.map(({ id, title, handle }) => (
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

export default SidebarMenu;
