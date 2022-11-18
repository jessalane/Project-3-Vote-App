const mongoose = require('mongoose');
const pollsSchema = require('./polls');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  }, 
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  polls: [pollsSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
