import React from "react";
import { Links } from "@/app/lib/links";
import ShopMenu from "./ShopMenu";
import Link from "next/link";
import { monstserrat } from "../fonts";
import MobileMenu from "./MobileMenu";

const Menu = async () => {
  const links = await Links();
  const shopLinks = links[0].subLinks!;
  const mainLinks = links.slice(1);

  return (
    <nav
      className={`grid grid-cols-3 py-4 bg-bg-nav fixed w-full ${monstserrat.className}`}
    >
      <div className="hidden lg:flex justify-between">
        <ShopMenu shopLinks={shopLinks} />
        {mainLinks.map((link) => (
          <Link href={`/${link.handle}`} className="hover:text-gray-400">
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex justify-center">Logo</div>
      <div className="flex justify-end lg:pr-4">Search and Cart</div>

      <div className="flex justify-end pr-4 lg:hidden">
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};

export default Menu;
