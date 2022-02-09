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

module.exports = { linkLeadCharacterToMovieMutation };
