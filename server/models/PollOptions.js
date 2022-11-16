const { Schema, model } = require('mongoose');
const votesSchema = require('./vote');

const pollOptionsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: false,
    trim: true
  },
  votes: votesSchema
});

const PollOptions = model('Polls', pollOptionsSchema);

module.exports = PollOptions;
