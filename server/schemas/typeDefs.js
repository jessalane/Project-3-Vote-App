const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    password: String
    email: String
    polls: [Polls]
}

type Polls {
    _id: ID!
    createdAt: String!
    author: String!
    title: String!
    options(_id: String): [Options]
}

type Options {
    _id: ID!
    name: String!
    image: String
    votes: [Vote]
}

type Vote {
    _id: ID!
    count: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Polls]
    thought(pollId: ID!): Polls
    polls(pollId: ID!): Polls
    vote(voteId: ID!): Vote
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPoll(
        title: String!
    ): Polls
    addOption(
        optionId: ID!
        name: String!
        image: String
    ): Options
    addVote(
        voteId: ID!
        count: String
    ): Vote
    removePoll(pollId: ID!): Polls
    removeOption(OptionId: ID!): Options
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;