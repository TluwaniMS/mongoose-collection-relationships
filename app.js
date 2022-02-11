const express = require("express");
const dotenv = require("dotenv");
const schema = require("./main-graphql-schema");
const { graphqlHTTP } = require("express-graphql");
const { InternalServerErrorResponse } = require("./error-handling-messages/InternalServerErrorResponse");
const { UnknownRequestErrorResponse } = require("./error-handling-messages/UnknownRequestErrorResponse");

const app = express();

dotenv.config();
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    customFormatErrorFn: (error) => {
      let message;
      let statusCode;

      console.log(error);

      error.originalError
        ? ((message = InternalServerErrorResponse.message), (statusCode = InternalServerErrorResponse.statusCode))
        : ((message = UnknownRequestErrorResponse.message), (statusCode = UnknownRequestErrorResponse.statusCode));

      return { message: message, status: statusCode };
    }
  })
);

module.exports = { app };
