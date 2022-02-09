const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { SuperPowerModel } = require("../graphql-models/SuperPowerGQLModel");

const getAllSuperPowersQuery = {
  type: new GraphQLList(SuperPowerModel),
  resolve(parent, args) {}
};

const getSuperPowerByIdQuery = {
  type: SuperPowerModel,
  args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {}
};

module.exports = { getAllSuperPowersQuery, getSuperPowerByIdQuery };
