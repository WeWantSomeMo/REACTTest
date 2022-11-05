// const express = require('express');
// require('dotenv').config();
// const {graphqlHTTP} = require('express-graphql');
// const schema = require('./schema/schema');
// const port = process.env.PORT || 4000;

// const app = express();

// app.use('graphql', graphqlHTTP({
//    schema, 
//    graphiql: process.env.NODE_ENV === 'development', 
// }))

// app.listen(port, console.log('server listening on port ${port'));

var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
    message: () => 'Add $25 for the month of Novemember.'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));