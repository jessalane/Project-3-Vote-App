const { Schema, model } = require('mongoose');

const voteSchema = new Schema({
  vote: {
    type: Number
  }
}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

const Vote = model('Vote', voteSchema);

module.exports = Vote;
