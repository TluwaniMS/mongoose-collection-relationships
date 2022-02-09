const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { SupeHeroModel } = require("./SuperHeroGQLModel");

const MovieModel = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    leadCharacter: { type: new GraphQLNonNull(SupeHeroModel) },
    about: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { MovieModel };
