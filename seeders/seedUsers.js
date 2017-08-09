const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/statdb');

var firstUser = new User({
  username: "Michael",
  password: "asdf"
});

firstUser.save();

var secondUser = new User({
  username: "Tommy",
  password: "asdf"
});

secondUser.save();

var thirdUser = new User({
  username: "Fred",
  password: "asdf"
});

thirdUser.save();
