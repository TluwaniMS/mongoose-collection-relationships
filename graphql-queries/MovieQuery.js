const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { MovieModel } = require("../graphql-models/MovieGQLModel");
const { getAllMovies, getMovieById } = require("../database-queries/MoviesDBQueries");

const getAllMoviesQuery = {
  type: new GraphQLList(MovieModel),
  resolve(parent, args) {
    return getAllMovies();
  }
};

const getMovieByIdQuery = {
  type: MovieModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return getMovieById(args);
  }
};

module.exports = { getAllMoviesQuery, getMovieByIdQuery };
