const { Schema, model } = require('mongoose');

const votesSchema = new Schema({
  votes: {
    type: Number
  }
});

const Votes = model('Votes', votesSchema);

module.exports = Votes;
