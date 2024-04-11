import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_STOREFRONT_GRAPHQL_API_URL;
const storefrontAccessToken = process.env.NEXT_PUBLIC_STOREFRONT_TOKEN;

export const graphQLClient = new GraphQLClient(endpoint!, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
  },
});
