const { Polls } = require('../models');
const {User, models} = require('../models')
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    polls: async () => {
        return Polls.find().sort({ createAt: -1});
    },

    vote: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Polls.find(params);
    },
    users: async () => {
      return User.find().sort({createAt: -1 });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPoll: async (parent, { pollId, title, options }) => {
      const poll = await Polls.create({ pollId, title, options });
      
      return poll
    },
  }

}

module.exports = resolvers;