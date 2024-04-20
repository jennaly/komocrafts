"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import React, { useState } from "react";
import { gilda } from "@/app/ui/fonts";
import Link from "next/link";
import MobileSubMenu from "./MobileSubMenu";

type SubLink = {
  title: string;
  handle: string;
  id?: string;
};

type MobileMenuProps = {
  title: string;
  handle: string;
  subLinks?: SubLink[];
}[];

const MobileMenu = ({ links }: { links: MobileMenuProps }) => {
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
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ right: -window.innerWidth }}
            animate={{
              right: 0,
              width: "100vw",
              transition: { duration: 1 },
            }}
            exit={{
              right: -window.innerWidth,
              width: "100vw",
              transition: { delay: 0.5, duration: 0.5 },
            }}
            className="h-lvh bg-komo-bg fixed mt-4"
          >
            <motion.div
              className={`container flex flex-col mt-8 gap-8 ml-10`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links!.map((link) => (
                <motion.div variants={itemVariants} key={link.handle}>
                  {!link.subLinks && (
                    <Link href={`/${link.handle}`}>
                      <h2
                        className={`${gilda.className} border-b-2 pb-2 text-2xl `}
                      >
                        {link.title}
                      </h2>
                    </Link>
                  )}

                  {link.subLinks && <MobileSubMenu link={link} />}
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileMenu;
