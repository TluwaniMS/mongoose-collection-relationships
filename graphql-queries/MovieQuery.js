const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { MovieModel } = require("../graphql-models/MovieGQLModel");

const getAllMoviesQuery = {
  type: new GraphQLList(MovieModel),
  resolve(parent, args) {}
};

const getMovieByIdQuery = {
  type: MovieModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {}
};

module.exports = { getAllMoviesQuery, getMovieByIdQuery };
