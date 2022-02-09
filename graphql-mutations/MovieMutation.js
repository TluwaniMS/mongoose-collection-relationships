const { GraphQLString, GraphQLNonNull } = require("graphql");

const linkLeadCharacterToMovieMutation = {
  type: GraphQLString,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLString) },
    superHeroId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {}
};

const removeLeadCharacterFromMovieMutation = {
  type: GraphQLString,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {}
};

module.exports = { linkLeadCharacterToMovieMutation, removeLeadCharacterFromMovieMutation };
