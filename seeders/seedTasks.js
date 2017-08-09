const mongoose = require('mongoose');
const Task = require('../models/task');

mongoose.connect('mongodb://localhost:27017/statdb');

var firstTask = new Task({
  name: "Swimming",
  stats: [{
    date: new Date("2017-08-02"),
    type: "Laps",
    number: 8
  }],
  userId: "598b2904965556e8c01bd7d8"
});

firstTask.save();

var secondTask = new Task({
  name: "Working Out",
  stats: [{
    date: new Date("2017-07-22"),
    type: "Pounds",
    number: 20
  }],
  userId: "598b2904965556e8c01bd7da"
});

secondTask.save();
