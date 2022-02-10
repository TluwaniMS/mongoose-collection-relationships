const { GraphQLString, GraphQLNonNull, GraphQLList } = require("graphql");
const {
  linkSuperPowersToSuperHero,
  removeSuperPowerFromSuperHero,
  linkMultipleSuperHerosToSuperPower
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

const linkSuperPowerToMulitipleSuperHeroesMutation = {
  type: GraphQLString,
  args: {
    superHeroIds: { type: new GraphQLList(GraphQLString) },
    superPowerId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return linkMultipleSuperHerosToSuperPower(args);
  }
};

module.exports = {
  linkSuperPowersToSuperHeroMutation,
  removeSuperPowerFromSuperHeroMutation,
  linkSuperPowerToMulitipleSuperHeroesMutation
};
