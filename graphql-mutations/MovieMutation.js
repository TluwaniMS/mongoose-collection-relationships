const { GraphQLString, GraphQLNonNull } = require("graphql");
const { linkLeadCharacterToMovie, removeLeadCharacterFromMovie } = require("../database-queries/MoviesDBQueries");

const linkLeadCharacterToMovieMutation = {
  type: GraphQLString,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLString) },
    superHeroId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return linkLeadCharacterToMovie(args);
  }
};

const removeLeadCharacterFromMovieMutation = {
  type: GraphQLString,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return removeLeadCharacterFromMovie(args);
  }
};

module.exports = { linkLeadCharacterToMovieMutation, removeLeadCharacterFromMovieMutation };
