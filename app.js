const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./main-graphql-schema");
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
        ? ((message = "There was an internal server error, please try again later"), (statusCode = 500))
        : ((message =
            "There was an error fulfilling your request, please check your request and ensure it's pointing to the correct end-point"),
          (statusCode = 400));

      return { message: message, statusCode: statusCode };
    }
  })
);

module.exports = { app };
