const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { SupeHeroModel } = require("../graphql-models/SuperHeroGQLModel");

const getAllSuperHeroesQuery = {
  type: new GraphQLList(SupeHeroModel),
  resolve(parent, args) {}
};

const getSuperHeroByIdQuery = {
  type: SupeHeroModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {}
};

module.exports = { getAllSuperHeroesQuery, getSuperHeroByIdQuery };
