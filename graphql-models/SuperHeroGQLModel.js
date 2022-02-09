const { GraphQLNonNull, GraphQLList, GraphQLString, GraphQLObjectType } = require("graphql");
const { SuperPowerModel } = require("./SuperPowerGQLModel");

const SupeHeroModel = new GraphQLObjectType({
  name: "SuperHero",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    superPowers: { type: new GraphQLList(SuperPowerModel) }
  })
});

module.exports = { SupeHeroModel };
