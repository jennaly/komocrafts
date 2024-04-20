import { ProductsByCategoryData } from "@/app/lib/definitions";
import { gilda, monstserrat } from "@/app/ui/fonts";
import Link from "next/link";

type CategoryLink = {
  id?: string;
  title: string;
  handle: string;
};
type HeaderProps = {
  data: ProductsByCategoryData;
  categoryLinks: CategoryLink[];
};
const Header = ({ data, categoryLinks }: HeaderProps) => {
  return (
    <section className="h-60 flex flex-col justify-around">
      <h1
        className={`${gilda.className} text-4xl lg:text-6xl 2xl:text-7xl leading-normal`}
      >
        Shop {data.collection.title}
      </h1>

      <div className="w-full flex overflow-x-scroll">
        <div className="flex flex-nowrap w-full gap-4 text-komo-beaver font-medium">
          {categoryLinks &&
            categoryLinks.map((link) => (
              <Link
                href={`/shop/${link.handle}`}
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
