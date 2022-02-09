const { GraphQLString, GraphQLNonNull, GraphQLList } = require("graphql");
const {
  linkSuperPowersToSuperHero,
  removeSuperPowerFromSuperHero
} = require("../database-queries/SuperHeroesDBQueries");

const linkSuperPowersToSuperHeroMutation = {
  type: GraphQLString,
  args: {
    superHeroId: { type: new GraphQLNonNull(GraphQLString) },
    superPowerIds: { type: new GraphQLList(GraphQLString) }
  },
  resolve(parent, args) {
    return linkSuperPowersToSuperHero(args);
  }
};

const removeSuperPowerFromSuperHeroMutation = {
  type: GraphQLString,
  args: {
    superHeroId: { type: new GraphQLNonNull(GraphQLString) },
    superPowerId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return removeSuperPowerFromSuperHero(args);
  }
};

module.exports = { linkSuperPowersToSuperHeroMutation, removeSuperPowerFromSuperHeroMutation };
