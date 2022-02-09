const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllMoviesQuery, getMovieByIdQuery } = require("./graphql-queries/MovieQuery");
const { getAllSuperHeroesQuery, getSuperHeroByIdQuery } = require("./graphql-queries/SuperHeroQuery");
const { getAllSuperPowersQuery, getSuperPowerByIdQuery } = require("./graphql-queries/SuperPowerQuery");
const {
  linkLeadCharacterToMovieMutation,
  removeLeadCharacterFromMovieMutation
} = require("./graphql-mutations/MovieMutation");
const {
  linkSuperPowersToSuperHeroMutation,
  removeSuperPowerFromSuperHeroMutation
} = require("./graphql-mutations/SuperHeroMutation");

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
  fields: {
    linkLeadCharacterToMovie: linkLeadCharacterToMovieMutation,
    removeLeadCharacterFromMovie: removeLeadCharacterFromMovieMutation,
    linkSuperPowersToSuperHero: linkSuperPowersToSuperHeroMutation,
    removeSuperPowerFromSupeHero: removeSuperPowerFromSuperHeroMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
