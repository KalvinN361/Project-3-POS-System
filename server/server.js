const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');
const DBconnect = require('./server/config/connection.js');
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./dumb')
const { authMiddleware } = require("./utils/auth")
const logger = require('morgan');
const { appendFile } = require('fs');
// need models

const app = express();

DBconnect();
app.use(express.urlencoded({ extended: true }));
const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  context: authMiddleware
});

server.applyMiddleware({ app })
app.use(logger('dev'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const PORT = process.env.MONGODB_URI || 8000;
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});