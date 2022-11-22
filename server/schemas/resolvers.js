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
    addPoll: async (parent, { pollId, createdAt, author, title }) => {
      const poll = await Poll.create({ pollId, createdAt, author, title });
      
      await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { thoughts: thought._id } }
      );
      return poll
    },
    addOption: async (parent, { optionId, title, image }) => {
      return Polls.findOneAndUpdate(
        { _id: pollId },
        {
          $addToSet: { options: { optionId, title, image } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePoll: async (parent, { pollId }) => {
      return Polls.findOneAndDelete({ _id: pollId });
    },
    removeOption: async (parent, { optionId }) => {
      return Polls.options.findOneAndDelete({ _id: optionId });
    },
  }

}

module.exports = resolvers;