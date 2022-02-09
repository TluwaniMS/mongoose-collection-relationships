const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { SuperPowerModel } = require("../graphql-models/SuperPowerGQLModel");
const { getAllSuperPowers, getSuperPowerById } = require("../database-queries/SuperPowerDBQueries");

const getAllSuperPowersQuery = {
  type: new GraphQLList(SuperPowerModel),
  resolve(parent, args) {
    return getAllSuperPowers();
  }
};

const getSuperPowerByIdQuery = {
  type: SuperPowerModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return getSuperPowerById(args);
  }
};

module.exports = { getAllSuperPowersQuery, getSuperPowerByIdQuery };
