const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllMoviesQuery, getMovieByIdQuery } = require("./graphql-queries/MovieQuery");
const { getAllSuperHeroesQuery, getSuperHeroByIdQuery } = require("./graphql-queries/SuperHeroQuery");
const { getAllSuperPowersQuery, getSuperPowerByIdQuery } = require("./graphql-queries/SuperPowerQuery");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllSuperPowers: getAllSuperPowersQuery,
    getSuperPowerById: getSuperPowerByIdQuery,
    getAllSuperHeroes: getAllSuperHeroesQuery,
    getSuperHeroById: getSuperHeroByIdQuery,
    getAllMovies: getAllMoviesQuery,
    getMovieById: getMovieByIdQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});

module.exports = new GraphQLSchema({
  query: Query,
//   mutation: Mutation
});
