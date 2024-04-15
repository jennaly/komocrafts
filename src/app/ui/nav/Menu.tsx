import React from "react";
import { Links } from "@/app/lib/links";
import SidebarMenu from "./SidebarMenu";
import Link from "next/link";
import { monstserrat } from "../fonts";

const Menu = async () => {
  const links = await Links();
  const sidebarLinks = links[0].subLinks!;
  const mainLinks = links.slice(1);
  return (
    <nav
      className={`grid grid-cols-3 py-4 bg-bg-nav fixed w-full ${monstserrat.className}`}
    >
      <div className="flex justify-between">
        <SidebarMenu sidebarLinks={sidebarLinks} />
        {mainLinks.map((link) => (
          <Link href={`/${link.handle}`} className="hover:text-gray-400">
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex justify-center">Logo</div>
      <div className="flex justify-end pr-4">Search and Cart</div>
    </nav>
  );
};

export default Menu;
