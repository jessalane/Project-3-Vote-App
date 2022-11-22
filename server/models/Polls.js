const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const dateFormat = require('../utils/dateFormat');
const Vote = require('./vote');

const pollSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  author: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 50
  },
  options: [{
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
    vote: {
      type: Schema.Types.ObjectId,
      ref: 'Vote',
    }
  }]

  
});

const Polls = model('Polls', pollSchema);

module.exports = Polls;
