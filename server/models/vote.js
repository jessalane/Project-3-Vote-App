const { Schema, model } = require('mongoose');

const votesSchema = new Schema({
  votes: {
    type: Int
  }
});

const Votes = mongoose.model('Votes', votesSchema);

module.exports = Votes;
