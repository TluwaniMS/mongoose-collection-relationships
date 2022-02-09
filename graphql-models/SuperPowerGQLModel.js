const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");

const SuperPowerModel = new GraphQLObjectType({
  name: "SuperPower",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    power: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { SuperPowerModel };
