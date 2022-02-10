const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllMoviesQuery, getMovieByIdQuery } = require("./graphql-queries/MovieQuery");
const { getAllSuperHeroesQuery, getSuperHeroByIdQuery } = require("./graphql-queries/SuperHeroQuery");
const { getAllSuperPowersQuery, getSuperPowerByIdQuery } = require("./graphql-queries/SuperPowerQuery");
const { linkLeadCharacterToMovieMutation } = require("./graphql-mutations/MovieMutation");
const {
  linkSuperPowersToSuperHeroMutation,
  removeSuperPowerFromSuperHeroMutation,
  linkSuperPowerToMulitipleSuperHeroesMutation
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
    linkSuperPowersToSuperHero: linkSuperPowersToSuperHeroMutation,
    removeSuperPowerFromSupeHero: removeSuperPowerFromSuperHeroMutation,
    linkSuperPowerToMulitipleSuperHeroes: linkSuperPowerToMulitipleSuperHeroesMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
