import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl5747jqv4bu901ued887c6m5/master",
  cache: new InMemoryCache(),
});
