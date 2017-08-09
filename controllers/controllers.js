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
  },
  viewTask: function(req, res){
    var id = req.params.id;
    Task.findById(id).then(function(task){
      res.json(task);
    });
  },
  updateTask: function(req, res){
    var id = req.params.id;
    var name = req.body.name;
    Task.findById(id).then(function(task){
      task.name = name;
      task.save();
      res.json(task);
    });
  }
};
