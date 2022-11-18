const { PollOptions } = require('../models');

const resolvers = {
    Query: {
    pollOptions: async () => {
        return PollOptions.find().sort({ createAt: -1});
    },

    vote: async (parent, { _id }) => {
        const params = _id ? {_id} : {};
        return PollOptions.find(params);
    },
  },
}

module.exports = resolvers;