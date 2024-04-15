import { getProductCategories } from "./data";

export const Links = async () => {
  const categoriesData = await getProductCategories();

  const categories = categoriesData.collections.nodes.map((node) => {
    return { id: node.id, title: node.title, handle: node.handle };
  });

  const allLinks = [
    {
      title: "Shop",
      subLinks: [{ title: "Shop All", handle: "all" }, ...categories],
    },
    { title: "Workshops", handle: "workshops" },
    {
      title: "Our Story",
      handle: "our-story",
    },
    {
      title: "Contact Us",
      handle: "contact-us",
    },
  ];

  return allLinks;
};
