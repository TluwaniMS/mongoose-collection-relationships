const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./main-graphql-schema");
const app = express();

dotenv.config();
app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

module.exports = { app };
