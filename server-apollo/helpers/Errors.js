const { GraphQLError } = require("graphql");

module.exports = class Errors extends GraphQLError {
  constructor(status, message) {
    super(message, { code: status });
    super.name = "Handled";
  }
};
