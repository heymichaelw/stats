const bodyParser = require('body-parser');
const User = require('../models/user');
const Task = require('../models/task');

module.exports = {

  tasks: function(req, res){
    Task.find({}).then(function(tasks){
      res.json(tasks);
    });
  },
  newTask: function(req, res){
    var newTask = new Task(req.body);
    newTask.save().then(function(task){
      res.json(task);
    });
  }
};
