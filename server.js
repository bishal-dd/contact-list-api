const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema, GraphQLSchema } = require("graphql");
const { expressjwt: jwt } = require("express-jwt");
const db = require("./models");
const schema = require("./api/graphql");
const port = 8080;

app.use(function (req, res, next) {
  // Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // You can add context data here if needed
  },
  cors: {
    origin: "*",
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

db.sequelize.sync().then(() => {
  startServer();
});
