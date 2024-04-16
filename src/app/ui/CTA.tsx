import React from "react";
import { monstserrat } from "./fonts";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type CTAText = {
  link: string;
  children: React.ReactNode;
};

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 transition-colors duration-[400ms] hover:text-komo-coffee"
    >
      <span
        className={`${monstserrat.className} text-lg flex gap-4 items-center`}
      >
        {children}
      </span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-komo-beaver transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-komo-beaver transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-komo-beaver transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-komo-beaver transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

const CTA = ({ link, children }: CTAText) => {
  return (
    <Link href={link}>
      <DrawOutlineButton>{children}</DrawOutlineButton>
    </Link>
  );
};

export default CTA;
