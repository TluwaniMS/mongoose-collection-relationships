const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { SupeHeroModel } = require("../graphql-models/SuperHeroGQLModel");
const { getAllSuperHeroes, getSuperHeroById } = require("../database-queries/SuperHeroesDBQueries");

const getAllSuperHeroesQuery = {
  type: new GraphQLList(SupeHeroModel),
  resolve(parent, args) {
    return getAllSuperHeroes();
  }
};

const getSuperHeroByIdQuery = {
  type: SupeHeroModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return getSuperHeroById(args);
  }
};

module.exports = { getAllSuperHeroesQuery, getSuperHeroByIdQuery };
