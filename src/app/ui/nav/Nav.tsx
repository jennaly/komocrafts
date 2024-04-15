import React from "react";
import { Links } from "@/app/lib/links";
import SidebarMenu from "./SidebarMenu";
import Link from "next/link";

const Nav = async () => {
  const links = await Links();
  const sidebarLinks = links[0].subLinks!;
  const mainLinks = links.slice(1);
  return (
    <nav className="grid grid-cols-3">
      <div className="flex justify-between">
        <SidebarMenu sidebarLinks={sidebarLinks} />
        {mainLinks.map((link) => (
          <Link href={`/${link.handle}`}>{link.title}</Link>
        ))}
      </div>

      <div className="flex justify-center">Logo</div>
      <div className="flex justify-end">Search and Cart</div>
    </nav>
  );
};

export default Nav;
