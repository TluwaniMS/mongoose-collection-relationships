const { GraphQLString, GraphQLNonNull, GraphQLList } = require("graphql");

const linkSuperPowersToSuperHeroMutation = {
  type: GraphQLString,
  args: {
    superHeroId: { type: new GraphQLNonNull(GraphQLString) },
    superPowerIds: { type: new GraphQLList(GraphQLString) }
  },
  resolve(parent, args) {}
};

const removeSuperPowerFromSuperHeroMutation = {
  type: GraphQLString,
  args: {
    superHeroId: { type: new GraphQLNonNull(GraphQLString) },
    superPowerId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {}
};

module.exports = { linkSuperPowersToSuperHeroMutation, removeSuperPowerFromSuperHeroMutation };
