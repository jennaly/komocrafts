import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { gilda } from "../fonts";
import Link from "next/link";

type SubLink = {
  title: string;
  handle: string;
  id?: string;
};
type MobileSubMenuProps = {
  title: string;
  handle: string;
  subLinks?: SubLink[];
};
const MobileSubMenu = ({ link }: { link: MobileSubMenuProps }) => {
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
        delay: 0.5,
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
    <div>
      <div className="flex items-center gap-8 pr-20 justify-between border-b-2 pb-2">
        <h2 className={`${gilda.className} text-2xl `}>{link.title}</h2>
        <button onClick={handleOpen} className="flex gap-1 pl-4">
          {open ? (
            <FiChevronUp size={25} className="hover:cursor-pointer ml-4" />
          ) : (
            <FiChevronDown size={25} className="hover:cursor-pointer ml-4" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`container flex flex-col gap-4 mt-4 ml-4 text-xl`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {link.subLinks!.map((subLink) => (
              <motion.div
                variants={itemVariants}
                key={subLink.id}
                className="hover:underline"
              >
                <Link href={`${link.handle}${subLink.handle}`}>
                  <h3>{subLink.title}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSubMenu;
