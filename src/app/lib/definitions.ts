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
  description: string;
  tags: string[];
  featuredImage: ShopifyImage;
  images: {
    edges: {
      node: ShopifyImage;
    };
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
    handle: string;
    products: {
      edges: {
        node: ShopifyProductData;
      }[];
    };
  };
};
