import { getProductsByCategory } from "./lib/data";
import Featured from "./ui/home/Featured";
import Hero from "./ui/home/Hero";

const Home = async () => {
  const featuredCollection = await getProductsByCategory("featured");

  return (
    <main className="">
      <Hero />
      <Featured data={featuredCollection} />
    </main>
  );
};

export default Home;
