const { gpl } = require('apollo-server-express');

const typeDefs = gpl`
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
    count: Number!
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
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPoll(
        pollId: ID!
        createdAt: String!
        author: String!
        title: String!
    ): Poll
    addOption(
        optionId: ID!
        title: String!
        image: String
    ): Options
    addVote(
        voteId: ID!
        count: Number
    ): Vote
    removePoll(pollId: ID!): Poll
    removeOption(OptionId: ID!): Options
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;