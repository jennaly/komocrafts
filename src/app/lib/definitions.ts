type ShopifyImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  altText: null;
};

type VariantPrice = {
  minVariantPrice: {
    amount: string;
    currencyCode: string;
  };
  maxVariantPrice: {
    amount: string;
    currencyCode: string;
  };
};

export type ShopifyProductData = {
  title: string;
  handle: string;
  id: string;
  descriptionHtml: string;
  tags: string[];
  featuredImage: ShopifyImage;
  images: {
    edges: {
      node: ShopifyImage;
    }[];
  };
  variants?: {
    edges: {
      node: {
        title: string;
        id: string;
        image: ShopifyImage;
      };
    }[];
  };
  priceRange: VariantPrice;
  compareAtPriceRange: VariantPrice;
};

export type ProductsData = {
  products: {
    nodes: ShopifyProductData[];
  };
};

export type ProductsByCategoryData = {
  collection: {
    title: string;
    handle: string;
    products: {
      edges: {
        node: ShopifyProductData;
      }[];
    };
  };
};

export type SingleCategoryData = {
  collection: {
    id: string;
    title: string;
    handle: string;
    image: ShopifyImage;
    descriptionHtml: string;
  };
};

export type ProductCategoriesData = {
  collections: {
    nodes: SingleCategoryData["collection"][];
  };
};
