const { ApolloClient, InMemoryCache } = require("@apollo/client");

const client = new ApolloClient({
  // uri: "http://localhost:3002/",
  uri: "https://astream-server.somelogo.shop",
  cache: new InMemoryCache(),
});

export default client;
