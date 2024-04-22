import { getProductsByCategory, getSingleCategory } from "./lib/data";
import Categories from "./ui/home/Categories";
import Featured from "./ui/home/Featured";
import Hero from "./ui/home/Hero";
import HomepageCollage from "./ui/home/HomepageCollage";
import Workshop from "./ui/home/Workshop";

const Home = async () => {
  const featuredCollection = await getProductsByCategory("featured");
  const coasters = await getSingleCategory("coasters");
  const wallHangings = await getSingleCategory("wall-hangings");
  const keychains = await getSingleCategory("keychains");
  const supplies = await getSingleCategory("supplies");

  return (
  return (
      <Hero />
      <Featured data={featuredCollection} />
      {/* <HomepageCollage /> */}
      <Categories
        coasters={coasters}
        wallHangings={wallHangings}
        keychains={keychains}
        supplies={supplies}
      />
      <Workshop />
    </main>
  );
};

export default Home;
