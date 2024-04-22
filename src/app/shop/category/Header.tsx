import { ProductsByCategoryData } from "@/app/lib/definitions";
import { formatCategoryTitle } from "@/app/lib/utils";
import { gilda, monstserrat } from "@/app/ui/fonts";
import Link from "next/link";

type CategoryLink = {
  id?: string;
  title: string;
  handle: string;
};
type HeaderProps = {
  categoryTitle: string;
  categoryLinks: CategoryLink[];
};
const Header = ({ categoryTitle, categoryLinks }: HeaderProps) => {
  return (
    <section className="">
      <h1
        className={`${gilda.className} text-4xl lg:text-6xl 2xl:text-7xl leading-normal`}
      >
        Shop {formatCategoryTitle(categoryTitle)}
      </h1>

      <div className="w-full flex overflow-x-scroll lg:overflow-visible my-10">
        <div className="flex flex-nowrap lg:flex-wrap w-full gap-4 text-komo-beaver font-medium">
          {categoryLinks &&
            categoryLinks.map((link) => (
              <Link
                href={`/shop/category/${link.handle}`}
                className={`${monstserrat.className} shrink-0 w-fit px-4 py-2 rounded-full border border-komo-beaver hover:bg-komo-bone delay-200 duration-200`}
                key={link.id ? link.id : link.handle}
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
