const { gpl } = require('apollo-server-express');

const typeDefs = gpl`
type PollOptions {
    _id: ID!
    name: String!
}

type Polls {
    _id: ID!
    author: String!
    title: String!
    options(_id: String): [pollOptionsSchema]
}

type User {
    _id: ID!
    userName: String
    password: String
    email: String
    polls: [pollsSchema]
}

type vote {
    _id: ID!
    votes: Number!
}

type Query {
    pollOptions: [PollOptions]
    vote: (pollOptions: String!): PollOptions
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;