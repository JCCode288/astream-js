const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { userTypeDefs, userResolvers } = require("./schemas/user");
const { animeTypeDefs, animeResolvers } = require("./schemas/anime");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, animeTypeDefs],
  resolvers: [userResolvers, animeResolvers],
  introspection: true,
});

const port = process.env.PORT || 3002;

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
