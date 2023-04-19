const UserProvider = require("../providers/user");

const userTypeDefs = `#graphql
  type User {
    username: String
    password: String
    email: String
  }

  type Token {
    access_token: String
    username: String
  }

  input loginCred {
    email: String
    password: String
  }

  input registerCred {
    email: String
    password: String
    username: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login (loginCred: loginCred): Token
    register (registerCred: registerCred): Token
  }


`;

const userResolvers = {
  Query: {
    users: UserProvider.users,
  },
  Mutation: {
    login: UserProvider.login,
    register: UserProvider.register,
  },
};

module.exports = {
  userTypeDefs,
  userResolvers,
};
