const { Schema, model } = require('mongoose');
const pollOptionsSchema = require('./PollOptions');
const userSchema = require('./User');

const pollSchema = new Schema({
  author: userSchema.userName,
  title: {
    type: String,
    required: true,
    trim: true
  },
  options: [pollOptionsSchema]
});

const Polls = model('Polls', pollSchema);

module.exports = Polls;
