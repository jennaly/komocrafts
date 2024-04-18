import { gql } from "graphql-request";
import { graphQLClient } from "./client";
import {
  ProductsData,
  ShopifyProductData,
  ProductCategoriesData,
  SingleCategoryData,
  ProductsByCategoryData,
} from "./definitions";

export const getAllPhysicalProducts = async (): Promise<ProductsData> => {
  const getAllPhysicalProductsQuery = gql`
    query PhysicalProductsQuery {
      products(first: 250, query: "title: NOT Workshop") {
        nodes {
          title
          handle
          id
          tags
          descriptionHtml
          featuredImage {
            id
            url
            width
            height
            altText
          }
          images(first: 3) {
            edges {
              node {
                id
                url
                width
                height
                altText
              }
            }
          }
          variants(first: 100) {
            edges {
              node {
                title
                id
                image {
                  id
                  url
                  width
                  height
                  altText
                }
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

  try {
    return await graphQLClient.request(getAllPhysicalProductsQuery);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getSingleProduct = async (
  handle: string
): Promise<ShopifyProductData> => {
  const getSingleProductQuery = gql`
    query SingleProductQuery($handle: String!) {
      product(handle: $handle) {
        title
        handle
        id
        descriptionHtml
        tags
        featuredImage {
          id
          url
          width
          height
          altText
        }
        images(first: 20) {
          edges {
            node {
              id
              url
              width
              height
              altText
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              title
              id
              image {
                id
                url
                width
                height
                altText
              }
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        compareAtPriceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  `;
  const variables = {
    handle: handle,
  };

  try {
    return await graphQLClient.request(getSingleProductQuery, variables);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getProductsByCategory = async (
  categoryHandle: string
): Promise<ProductsByCategoryData> => {
  const getProductsByCategoryQuery = gql`
    query ProductsByCategory($handle: String) {
      collection(handle: $handle) {
        title
        handle
        products(first: 250) {
          edges {
            node {
              title
              handle
              id
              tags
              descriptionHtml
              featuredImage {
                id
                url
                width
                height
                altText
              }
              images(first: 3) {
                edges {
                  node {
                    id
                    url
                    width
                    height
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              compareAtPriceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    handle: categoryHandle,
  };

  try {
    return await graphQLClient.request(getProductsByCategoryQuery, variables);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getProductCategories =
  async (): Promise<ProductCategoriesData> => {
    const getProductCategoriesQuery = gql`
      query allProductCategories {
        collections(
          first: 250
          query: "NOT title:Workshops AND NOT title:Featured"
        ) {
          nodes {
            id
            title
            handle
            descriptionHtml
            image {
              id
              url
              width
              height
              altText
            }
          }
        }
      }
    `;

    try {
      return await graphQLClient.request(getProductCategoriesQuery);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

export const getSingleCategory = async (
  handle: string
): Promise<SingleCategoryData> => {
  const getSingleCategoryQuery = gql`
    query singleCategory($handle: String!) {
      collection(handle: $handle) {
        title
        handle
        image {
          id
          url
          width
          height
          altText
        }
        descriptionHtml
      }
    }
  `;

  const variables = {
    handle: handle,
  };

  try {
    return await graphQLClient.request(getSingleCategoryQuery, variables);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
