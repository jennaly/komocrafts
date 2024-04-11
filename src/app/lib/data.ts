import { gql } from "graphql-request";
import { graphQLClient } from "./client";
import { ProductsData, ShopifyProductData, CategoryData } from "./definitions";

export const getAllPhysicalProducts = async (): Promise<ProductsData> => {
  const getAllPhysicalProductsQuery = gql`
    query PhysicalProductsQuery {
      products(first: 250, query: "tag_not:Workshops") {
        nodes {
          title
          handle
          id
          tags
          description
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
        description
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
): Promise<CategoryData> => {
  const getProductsByCategoryQuery = gql`
    query ProductsByCategory($handle: String) {
      collection(handle: $handle) {
        handle
        products(first: 250) {
          edges {
            node {
              title
              handle
              id
              tags
              description
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